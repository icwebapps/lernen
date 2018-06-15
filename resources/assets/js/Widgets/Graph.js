import React, { Component } from 'react';
import '../../../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis} from 'react-vis';
import axios from "axios";

export default class Graph extends Component {
  constructor() {
    super();
    this.state = {
      submissions: []
    };
    this.loadSubmissions();
  }

  loadSubmissions() {
    axios.get('/submissions/list').then((response) => {
      this.setState(response.data);
      console.log(this.state.submissions);
    });
  }


  render() {
    let data = [];
    let i = 1;
    this.state.submissions.forEach((s) => {
      if (s.grade != null) {
        data.push({x: i++, y: s.grade});
      }
    });
    return (
      <div className="graph">
        <XYPlot height={300} width={300}>
          <LineSeries data={data} />
          <XAxis />
          <YAxis />
        </XYPlot>
      </div>
    );
  }
}