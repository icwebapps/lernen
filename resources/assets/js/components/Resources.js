import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ResourcesTabSelector from './Resources/ResourcesTabSelector';
import ResourcesTable from './Resources/ResourcesTable';
import ResourcesUpload from './Resources/ResourcesUpload';

export default class Resources extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return ([
      <ResourcesTabSelector key="resources-tab-selector"/>,
      <ResourcesTable key="resources-table"/>,
      <ResourcesUpload key="resources-upload"/>
    ]);
  }
}

if (document.getElementById('resources-widget')) {
    ReactDOM.render(<Resources />, document.getElementById('resources-widget'));
}

