import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ModalNotifications from '../Modal/ModalNotifications';

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      unread_messages: 0,
      notifications: []
    };
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.update !== prevProps.update) {
      this.loadData();
    }
  }

  loadData() {
    axios.get('/messages/unread').then((response) => this.setState(response.data));
    axios.get('/notifications/unread').then((response) => this.setState(response.data));    
  }

  render() {
    return (
    <div className="sidebar">
      <div className="nav">
        <div className={"nav-item " + (this.props.selected == "dashboard" ? "nav-selected" : "")}>
          <a href="/dashboard"><img src="/images/icons8-dashboard-50.png" /></a>
        </div>
        <div className={"nav-item " + (this.props.selected == "calendar" ? "nav-selected" : "")}>
          <a href="/calendar"><img src="/images/icons8-today-100.png" /></a>
        </div>
        <div className={"nav-item " + (this.props.selected == "contacts" ? "nav-selected" : "")}>
          <a href="/contacts"><img src="/images/icons8-address-book-2-filled-100.png" /></a>
          {
            this.state.unread_messages > 0 ?
            <div className="sidebar-notification">{this.state.unread_messages}</div>
            : ''
          }
        </div>
        {
          this.props.isTutor ?
          <div className={"nav-item " + (this.props.selected == "resources" ? "nav-selected" : "")}>
            <a href="/resources"><img src="/images/icons8-open-50.png" /></a>
          </div>
          : ''
        }
        <div className={"nav-item " + (this.props.selected == "account" ? "nav-selected" : "")}>
          <a href="/account"><img src="/images/icons8-male-user-50.png" /></a>
        </div>
      </div>
      <div className="nav-item notifications">
        <img src={"/images/icons8-notification-100"+(this.state.notifications.length == 0 ? "-faded" : "")+".png"} />
        {
          this.state.notifications.length > 0 ?
            <div className="sidebar-notification">{this.state.notifications.length}</div>
          : ''
        }
        <ModalNotifications notifications={this.state.notifications} />
      </div>
    </div>
    );
  }
}