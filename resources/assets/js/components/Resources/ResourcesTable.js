import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ResourcesRow from './ResourcesRow';

export default class ResourcesTable extends Component {
  render() {
    return (
      <div className="resources-table">
        <div className="resources-table-header resources-row" key="resources-table-headers">
          <div className="resources-table-cell">Name <img src="/images/icons8-sort-down-filled-50.png" /></div>
          <div className="resources-table-cell">Type <img src="/images/icons8-sort-down-filled-50.png" /></div>
          <div className="resources-table-cell">Downloads <img src="/images/icons8-sort-down-filled-50.png" /></div>
          <div className="resources-table-cell">Uploaded <img src="/images/icons8-sort-down-filled-50.png" /></div>
          <div className="resources-table-cell">Students <img src="/images/icons8-sort-down-filled-50.png" /></div>
        </div>
        {
          this.props.resources.map((r, i) => {
            if (r.subject.id === this.props.subject) {
              return <ResourcesRow contacts={this.props.contacts} key={"resource"+i} resource={r} onAddStudent={this.props.onAddStudent} />
            }
            return '';
          })
        }
      </div>
    );
  }
}
