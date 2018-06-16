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



    let ticks = [];
    for(let i = 0; i <= 10; ++i ){
      ticks.push(10 * i );
    }
    return (
      <div className="graph">
        <XYPlot yDomain={[0, 100]} height={300} width={300}>
          <LineSeries data={data} />
          <XAxis tickValues={[0, 1, 3, 4, 5]} tickLabelAngle={-90} tickFormat={v => `Value is ${v}`}/>
          <YAxis tickValues={ticks}/>
        </XYPlot>
      </div>
    );
  }
}