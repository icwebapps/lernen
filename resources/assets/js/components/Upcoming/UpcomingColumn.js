import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UpcomingCard from './UpcomingCard';

export default class UpcomingColumn extends Component {
  render() {
    return(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="column">
        <div className="column-title"> 
        {
          this.props.i == 0 ? "Today" : 
            (this.props.i == 1 + 1 ? "Tomorrow" : 
                this.props.start.getMonth() + 1 + "/" + this.props.start.getDate())
        }
=======
      this.props.events.map((e, i) => 
=======
      this.props.events.map((e, i) =>
>>>>>>> Start data formatting for upcoming cards
      <div className="column" key={"upcoming-column-" + i}>
      <div className="column-title">
      {
        this.props.start.getDate() == this.props.today.getDate() ? "Today" :
          (this.props.start.getDate() == this.props.today.getDate() + 1 ? "Tomorrow" :
              this.props.start.getMonth() + 1 + "/" + this.props.start.getDate())
      }
      </div>
      <div className="column-content">
        <div className="card accent-red">
        <div className="card-left">{e.time.match("[0-9][0-9]?:[0-9][0-9]")}</div>
        <div className="card-middle">
          <div className="card-title">{e.student.name}</div>
          <div className="card-sub">{e.location}</div>
          <div className="card-text">{e.subject.name}</div>
        </div>
        <div className="card-right">
          <img src={e.student.profile_picture} className="card-graphic" />
<<<<<<< HEAD
        </div>              
>>>>>>> Add user's profile picture to upcoming cards
=======
        </div>
>>>>>>> Start data formatting for upcoming cards
=======
      <div className="column">
=======
      <div className="column" key={this.props.i + "-column"}>
>>>>>>> Sort events into date columns
        <div className="column-title">
        {
          this.props.i == 0 ? "Today" :
            (this.props.i == 1 ? "Tomorrow" :
                this.props.start.getMonth() + 1 + "/" + this.props.start.getDate())
        }
        </div>
        <div className="column-content">
        {
        this.props.events.map(e => 
            <div className="card accent-red">
            <div className="card-left">{e.time.match("[0-9][0-9]?:[0-9][0-9]")}</div>
            <div className="card-middle">
              <div className="card-title">{e.student.name}</div>
              <div className="card-sub">{e.location + " " + e.date}</div>
              <div className="card-text">{e.subject.name}</div>
            </div>
            <div className="card-right">
              <img src={e.student.profile_picture} className="card-graphic" />
            </div>
            </div>
          )
        }
>>>>>>> Fix upcoming column logic
        </div>
        <div className="column-content"> 
        {
          this.props.events.map((e, i) => {
          return <UpcomingCard key={"card"+i} time={e.time} name={e.student} location={e.location} subject={e.subject.name} />
          })
        }
          
        </div>            
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
    );
=======
  );
>>>>>>> Fix upcoming column logic
=======
    );
>>>>>>> Use i instead of today value
  }
}