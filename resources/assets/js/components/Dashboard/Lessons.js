import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class Lessons extends Component {
  constructor() {
    super();
    this.state = {
      lessons: []
    };
    this.loadData();
  }
  
  loadData() {
    axios.get('/students/list', {
      _token: $('meta[name="csrf-token"]').attr('content')
    }).then((response) => {
      this.setState(response.data);
    });
  }

  filterLessons() {
    return this.state.lessons.filter(l => {
        const thisDay = new Date(this.state.today);
        const lessonDay = new Date(l.date);
        return lessonDay.getDate() == thisDay.getDate() + 7
        && lessonDay.getMonth() == thisDay.getMonth();})
  }
  
  render() {
    return(
    <div className="dashboard-panel-item">
    {this.filterLessons().length > 0 ? this.filterLessons().map((l) =>
      <div className="card accent-red">
        <div className="card-left">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
          </svg>
          {l.time}
        </div>
        <div className="card-middle">
          <div className="card-title">{l.tutor.name}</div>
          <div className="card-sub">{l.location}</div>
          <div className="card-text">{l.subject}</div>
        </div>
        <div className="card-right">
          <img src="images/jasonlipowicz.png" className="card-graphic"/>
        </div>
      </div>
      ) : <h4>No Lessons Today</h4>
    }    
    </div>
    )
  }
  

}

if (document.getElementById('lesson-widget')) {
  ReactDOM.render(<Lessons/>, document.getElementById('lesson-widget'));
}