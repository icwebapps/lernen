import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ResourcesRow from './Resources/ResourcesRow';

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

  render() {
    return (  
      this.state.resources.map((r, i) =>
        <ResourcesRow key={"resource"+i} resource={r} />
      )
    );
  }
}

if (document.getElementById('resources-widget')) {
    ReactDOM.render(<Resources />, document.getElementById('resources-widget'));
}

