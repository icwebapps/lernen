import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class ModalNotifications extends Component {
  render() {
    return (
    <div className="notifications-overlay">
      <div className="notifications-overlay-title">Notifications</div>
      <div className="notifications-overlay-content">
        {
          this.props.notifications.map((n, i) =>
            <div key={"notification"+i} class="notifications-overlay-item">
              {n.message}
            </div>
          )
        }
        <div class="notifications-overlay-item nohover">
          <img src="/images/icons8-delete-50.png" class="clearall" /> Clear All
        </div>
      </div>
    </div>);
  }
}