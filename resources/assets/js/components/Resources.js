import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ResourcesTabSelector from './Resources/ResourcesTabSelector';
import ResourcesTable from './Resources/ResourcesTable';
import ResourcesUpload from './Resources/ResourcesUpload';
import ResourcesRow from './Resources/ResourcesRow';
import ResourcesTabSelector from './Resources/ResourcesTabSelector';
import SubjectSidebar from './Resources/SubjectSidebar';

export default class Resources extends Component {
  constructor() {
    super();
    this.state = {resources: []};
    this.loadData();
  }

  loadData() {
    axios.get('/resources/list', {
      _token: $('meta[name="csrf-token"]').attr('content') 
    }).then((response) => {
      this.setState(response.data);
    });
  }

  changeSubject(new_subject) {
    this.setState({ subject: new_subject });
  }

  render() {
    return ([
      <div className="panel-subjects">
        <SubjectSidebar onChangeSubject={(subject)=>this.changeSubject(subject)} />
      </div>,
      <div className="panel-resources">
        <ResourcesTabSelector key="resources-tab-selector"/>
        <ResourcesTable key="resources-table"/>
        <ResourcesUpload key="resources-upload"/>
      </div>
    ]);
  }
}

if (document.getElementById('resources-widget')) {
    ReactDOM.render(<Resources />, document.getElementById('resources-widget'));
}

