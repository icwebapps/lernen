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
      tabID: '1',
      subject: ''
    };
    this.loadResources();
    this.loadContacts();
  }

  tabChange(i) {
    this.setState({ tabID: i });
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
      this.setState(response.data);
    });
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
      <div className="panel-subjects">
        <SubjectSidebar onChangeSubject={(subject)=>this.changeSubject(subject)} />
      </div>,
      <div className="panel-resources">
        <ResourcesTabSelector key="resources-tab-selector" tabID={this.state.tabID} onTabChange={(i)=>this.tabChange(i)} />
        <ResourcesTable key="resources-table"  resources={this.state.resources} contacts={this.state.contacts} onAddStudent={(_)=>this.onAddStudent()} />
        <ResourcesUpload key="resources-upload" onUpload={this.onUpload} />
      </div>
    ]);
  }
}

if (document.getElementById('resources-widget')) {
    ReactDOM.render(<Resources />, document.getElementById('resources-widget'));
}

