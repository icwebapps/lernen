import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UpcomingCard from './UpcomingCard';

export default class UpcomingColumn extends Component {
  render() {
    return(
      <div className="column">
        <div className="column-title"> 
        {
          this.props.i == 0 ? "Today" : 
            (this.props.i == 1 + 1 ? "Tomorrow" : 
                this.props.start.getMonth() + 1 + "/" + this.props.start.getDate())
        }
        </div>
        <div className="column-content"> 
        {
          this.props.events.map((e, i) => {
          return <UpcomingCard key={"card"+i} time={e.time} name={e.student} location={e.location} subject={e.subject.name} />
          })
        }
          
        </div>            
      </div>
    );
  }
}