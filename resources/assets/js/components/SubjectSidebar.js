import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';


 
if (document.getElementById('subject-widget')) {
  ReactDOM.render(<SubjectSidebar />, document.getElementById('subject-widget'));
}