import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class UpcomingColumn extends Component {
  render() {
    return(
      this.props.events.length > 0 ?  
      <div className="column">
      <div className="column-title">{
        this.props.start.getDate() == this.props.today.getDate() ? "Today" : 
          (this.props.start.getDate() == this.props.today.getDate() + 1 ? "Tomorrow" : 
              this.props.start.getMonth() + 1 + "/" + this.props.start.getDate())
      }
      </div>
      <div className="column-content"> {
        this.props.events.map((e, _) => 
        <div className="card accent-red">
        <div className="card-left">{e.time}</div>
        <div className="card-middle">
          <div className="card-title">{e.student}</div>
          <div className="card-sub">{e.location}</div>
          <div className="card-text">{e.subject}</div>
        </div>  
        <div class="card-right">
          <img src="images/jasonlipowicz.png" class="card-graphic" />
        </div>              
        </div>)
      }
      </div>
      </div> : ''
    );
  }
}