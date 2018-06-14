import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class ModalNotifications extends Component {
  clearAll() {
    axios.post('/notifications/clear').then(() => this.props.onClearAll());
  }

  clickNotification(n) {
    axios.post('/notifications/clear', {
      id: n.id
    }).then(() => location.href = n.url);    
  }

  render() {
    return (
    <div className="notifications-overlay">
      <div className="notifications-overlay-title">Notifications</div>
      <div className="notifications-overlay-content">
        {
          this.props.notifications.map((n, i) =>
            <div key={"notification"+i} className="notifications-overlay-item" onClick={()=>this.clickNotification(n)}>
              {n.message}
            </div>
          )
        }
        <div className="notifications-overlay-item nohover" onClick={()=>this.clearAll()}>
          <img src="/images/icons8-delete-50.png" className="clearall" /> Clear All
        </div>
      </div>
    </div>);
  }
}