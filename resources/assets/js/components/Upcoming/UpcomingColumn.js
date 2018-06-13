import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UpcomingCard from './UpcomingCard';

export default class UpcomingColumn extends Component {
  render() {
    return(
      this.props.events.length > 0 ?  
      <div className="column">
      <div className="column-title"> {
        this.props.start.getDate() == this.props.today.getDate() ? "Today" : 
          (this.props.start.getDate() == this.props.today.getDate() + 1 ? "Tomorrow" : 
              this.props.start.getMonth() + 1 + "/" + this.props.start.getDate())
      }
      </div>
      <div className="column-content"> {
        this.props.events.map((e, i) => {
        return <UpcomingCard key={"card"+i} time={e.time} name={e.student} location = {e.location} subject = {e.subject} />
        })
      }
      </div>
      </div> : ''
    );
  }
}