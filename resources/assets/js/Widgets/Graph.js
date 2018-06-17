import React, { Component } from 'react';
import '../../../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineMarkSeries, XAxis, YAxis, Hint} from 'react-vis';
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
      this.state.submissions = this.state.submissions
        .filter(s => (s.grade != null && s.assignment.student_id == this.props.studentId))
        .sort(function(a, b){return (a.created_at > b.created_at)});
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



    let ticksY = [];
    for(let i = 0; i <= 10; ++i ) {
      ticksY.push(10 * i );
    }
    let ticksX = [];
    for (let i = 1; i <= this.state.submissions.length; i++) {
      ticksX.push(i);
    }
    return (
      <div className="graph">
        <div className="graph-header" >
          Progress
        </div>
        <div className="subject-list-name">
          Maths
        </div>
        <XYPlot title="Progress graph" yDomain={[0, 100]} xDomain={[0, this.state.submissions.length]}
                margin = {{left: 150, right: 10, top: 50, bottom: 100}} height={500} width={600}>
          <LineMarkSeries
            data={data}
            lineStyle={{stroke: "red"}}
            markStyle={{stroke: "red", fill: "#4B87DD"}}
          />
          <XAxis tickValues={ticksX} tickLabelAngle={-45} tickFormat={i => this.state.submissions[i-1].assignment.title}/>
          <YAxis tickValues={ticksY}/>
        </XYPlot>
      </div>
    );
  }
}