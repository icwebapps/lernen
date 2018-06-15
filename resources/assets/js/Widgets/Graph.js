import React, { Component } from 'react';
import '../../../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';
import axios from "axios";

export default class Graph extends Component {
  constructor() {
    super();
    this.state = {
      submissions: []
    };
    this.loadGradedSubmissions();
  }

  loadGradedSubmissions() {
    axios.get('/submissions/list ? graded=true').then((response) => {
      this.setState(response.data);
    });
  }


  render() {
    var data = [];
    var i = 0;
    for (var s in this.state.submissions) {
      data.push({x: i++, y: s.grade});
    }
    return (
      <div className="graph">
        <XYPlot height={300} width={300}>
          <LineSeries data={data} />
        </XYPlot>
      </div>
    );
  }
}