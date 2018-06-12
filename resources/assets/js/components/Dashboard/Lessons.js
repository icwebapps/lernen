import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import UpcomingCard from '../Upcoming/UpcomingCard';

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
      this.filterLessons().map( (l, i) => {
        return <UpcomingCard key={"card"+i} time={l.time} name={l.tutor.name} location = {l.location} subject = {l.subject} />
        
      })
    )
  }
  

}

if (document.getElementById('lesson-widget')) {
  ReactDOM.render(<Lessons/>, document.getElementById('lesson-widget'));
}