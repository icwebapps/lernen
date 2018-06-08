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
      subject: false
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

  loadResources() {
    axios.get('/resources/list', {
      _token: $('meta[name="csrf-token"]').attr('content') 
    }).then((response) => {
      this.setState(response.data, () => this.setDefaults());
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

  setDefaults() {
    if (this.state.resources.length > 0) {
      this.setState({ subject: this.state.resources[0].subject.id }, () => {
        this.setState({ type: this.getTypes()[0] });
      });
    }
  }

  changeSubject(new_subject) {
    this.setState({ subject: new_subject });
  }
  
  onUpload() {
    this.loadResources();
  }

  onAddStudent() {
    this.loadResources();
  }

  render() {
    return ([
      <div className="panel-subjects" key="panel-subjects">
        <SubjectSidebar
          selected={this.state.subject}
          resources={this.state.resources}
          onChangeSubject={(subject)=>this.changeSubject(subject)} />
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
          onAddStudent={()=>this.onAddStudent()} />
        <ResourcesUpload
          key="resources-upload"
          onUpload={()=>this.onUpload()} />
      </div>
    ]);
  }
}

if (document.getElementById('resources-widget')) {
    ReactDOM.render(<Resources />, document.getElementById('resources-widget'));
}

