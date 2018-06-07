import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ResourcesTabSelector from './Resources/ResourcesTabSelector';
import ResourcesTable from './Resources/ResourcesTable';

export default class Resources extends Component {
  constructor() {
    super();
    this.state = {};
  }

  addStudent(resource) {
    console.log(resource);
  }

  render() {
    return ([
      <ResourcesTabSelector key="sesources-tab-selector"/>,
      <ResourcesTable key="resources-table"/>
    ]);
  }
}

if (document.getElementById('resources-widget')) {
    ReactDOM.render(<Resources />, document.getElementById('resources-widget'));
}

