import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class Progress extends Component {
  constructor() {
    super();
    this.state = {
      subjects: []
    };
    this.loadProgress();
  }

  loadProgress() {
    axios.get('/submissions/progress').then((response) => {
      this.setState(response.data);
    });
  }

  getRating(number) {
    if (number >= 90) return "excellent";
    if (number >= 70) return "good";
    if (number >= 50) return "ok";
    return "poor";
  }

  render() {
    return this.state.subjects.map((s, i) => {
      const average = Math.ceil(s.progress.total / s.progress.count);
      const rotate = average/100*360;
      return <div key={"subject-performance"+i} className={"subject-performance rating-"+this.getRating(average)}>
      <div className="subject-performance-name">{s.name}</div>
      <div className={"circle subject-performance-circle " + (average > 50 ? "over50" : "")}>
        <span>{average}%</span>
        <div className="slice">
          <div className="bar" style={{ transform: "rotate("+rotate+"deg)" }}></div>
          <div className="fill"></div>
        </div>
      </div>
      <div className="subject-performance-caption">
        Performance:
        <div className="subject-performance-rating">{this.getRating(average)}</div>
      </div>
    </div>
    });
  }
}