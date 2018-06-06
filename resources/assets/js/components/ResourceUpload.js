import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';



export default class ResourceUpload extends Component {

  constructor() {
    super();
    this.state = {};
  }

  onSubmit(e) {
    e.preventDefault();
    axios.post('/resources', {
      ...this.state,
      _token: $('meta[name="csrf-token"]').attr('content')
    }).then((response) => {
      alert("uploaded"); // need to change this to check if file is chosen
    });
  }

  render() {
    return (
      <form method="post" onSubmit={(e)=>this.onSubmit(e)} encType="multipart/form-data">

        <input type="file" name="filename"/>
        <input type="submit" value="Add Resource" className="add-resource"/>
      </form>
    )
  }
}

if (document.getElementById('upload-form')) {
  ReactDOM.render(<ResourceUpload />, document.getElementById('upload-form'));
}
