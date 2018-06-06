import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';


export default class ResourceRow extends Component {
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
        <div key={"resource"+i} className="resources-row">
          <div className="resources-table-cell">{r.name}</div>
          <div className="resources-table-cell">Assignment</div>
          <div className="resources-table-cell">0</div>
          <div className="resources-table-cell">{r.created_at}</div>
          <div className="resources-table-cell resources-faces-list">
            <img src="images/jasonlipowicz.png" />
            <img src="images/boaz.jpg" />
            <img src="images/icons8-plus-50.png" />
          </div>
        </div>
      )
    );
  }
}

if (document.getElementById('resources-row-container')) {
    ReactDOM.render(<ResourceRow />, document.getElementById('resources-row-container'));
}

