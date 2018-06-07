import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ResourcesRow from './ResourcesRow';


export default class ResourcesTable extends Component {
  constructor() {
    super();
    this.state = {
      tabID: '1',
      subject: '',
      resources: []
    };
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
    return ([
      <div className="resources-table-header resources-row" key="resources-table-headers">
        <div className="resources-table-cell">Name <img src="/images/icons8-sort-down-filled-50.png" /></div>
        <div className="resources-table-cell">Type <img src="/images/icons8-sort-down-filled-50.png" /></div>
        <div className="resources-table-cell">Downloads <img src="/images/icons8-sort-down-filled-50.png" /></div>
        <div className="resources-table-cell">Uploaded <img src="/images/icons8-sort-down-filled-50.png" /></div>
        <div className="resources-table-cell">Students <img src="/images/icons8-sort-down-filled-50.png" /></div>
      </div>,
      this.state.resources.map((r, i) =>
      <ResourcesRow key={"resource"+i} resource={r} />
      )
    ]);
  }
}
