import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ResourcesTable from './Resources/ResourcesTable';
import ResourcesUpload from './Resources/ResourcesUpload';
import ResourcesRow from './Resources/ResourcesRow';
import ResourcesTabSelector from './Resources/ResourcesTabSelector';
import SubjectSidebar from './Resources/SubjectSidebar';

export default class Resources extends Component {
  constructor() {
    super();
    this.state = {
      resources: [],
      contacts: [],
      type: false,
      subject: false,
      addSubject: false
    };
    this.loadResources();
    this.loadContacts();
  }

  typeChange(t) {
    this.setState({ type: t });
  }

  loadContacts() {
    axios.get('/contacts/list', {
      _token: $('meta[name="csrf-token"]').attr('content') 
    }).then((response) => {
      this.setState(response.data);
    });
  }

  loadResources(callback=()=>{}) {
    axios.get('/resources/list', {
      _token: $('meta[name="csrf-token"]').attr('content') 
    }).then((response) => {
      this.setState(response.data, () => this.setDefaults(callback));
    });
  }

  getTypes() {
    const types = [];
    this.state.resources.map(r => {
      if (r.subject.id === this.state.subject && types.indexOf(r.type) === -1) {
        types.push(r.type);
      }
    });
    return types;
  }

  setDefaults(callback) {
    if (this.state.resources.length > 0 && !this.state.subject) {
      this.setState({ subject: this.state.resources[0].subject.id }, () => {
        this.setState({ type: this.getTypes()[0] }, callback);
      });
    }
    else {
      callback();
    }
  }

  changeSubject(new_subject) {
    this.setState({ subject: new_subject }, () => {
      // Check that we have a valid type now
      if (this.getTypes().indexOf(this.state.type) === -1) {
        this.setState({ type: this.getTypes()[0] });
      }
    });
  }
  
  beginAddSubject() {
    this.setState({
      addSubject: true
    });
  }
  
  onUpload(new_type) {
    this.loadResources(() => {
      this.setState({ type: new_type });
    });
  }

  refreshResources() {
    this.loadResources(() => {
      this.setState({ addSubject: false });
    });
  }

  render() {
    return ([
      <div className="panel-subjects" key="panel-subjects">
        <SubjectSidebar
          selected={this.state.subject}
          resources={this.state.resources}
          onChangeSubject={(subject)=>this.changeSubject(subject)}
          hasAdd={this.state.addSubject}
          onBeginAddSubject={(_)=>this.beginAddSubject()}
          onAddSubject={()=>this.refreshResources()} />
      </div>,
      <div className="panel-resources" key="panel-resources">
        <ResourcesTabSelector
          key="resources-tab-selector"
          selected={this.state.type}
          subject={this.state.subject}
          tabs={this.getTypes()}
          onTabChange={(t)=>this.typeChange(t)} />
        <ResourcesTable
          key="resources-table"
          subject={this.state.subject}
          type={this.state.type}
          resources={this.state.resources}
          contacts={this.state.contacts}
          onAddStudent={()=>this.refreshResources()} />
        <ResourcesUpload
          key="resources-upload"
          onUpload={(new_type)=>this.onUpload(new_type)}
          subject={this.state.subject}
          type={this.state.type} />
      </div>
    ]);
  }
}

if (document.getElementById('resources-widget')) {
    ReactDOM.render(<Resources />, document.getElementById('resources-widget'));
}

