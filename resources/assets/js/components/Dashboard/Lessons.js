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
    axios.get('/lessons/list').then((response) => {
      this.setState(response.data);
    });
  }

  filterLessons() {
    return this.state.lessons.filter(l => {
        const thisDay = new Date(this.state.today);
        const lessonDay = new Date(l.date);
        return lessonDay.getDate() == thisDay.getDate()
        && lessonDay.getMonth() == thisDay.getMonth();})
  }
  
  render() {
    return(
      this.filterLessons().length > 0 ? 
      this.filterLessons().map( (l, i) => {
        return <UpcomingCard key={"card"+i} time={l.time} 
                             name={l.tutor.user.name} location={l.location} 
                             subject={l.subject} picture={l.student.user.profile_picture} />
        
      }) : <h4>     No Lessons Today!     </h4>
    )
  }
  

}

if (document.getElementById('lesson-widget')) {
  ReactDOM.render(<Lessons/>, document.getElementById('lesson-widget'));
}