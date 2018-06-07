import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Resources from "./Resources";



export default class ResourceUpload extends Component {

  constructor() {
    super();
    this.state = {
      file : null
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file);
    axios.post('/resources', formData,
      {
        headers:
          {
          'content-type': 'multipart/form-data'
          }
      }).then((response) => {

    });
  }

  updateFile(e) {
    this.setState({file: e.target.files[0]});
  }

  render() {
    return ([
      <input type="file" name="file" onChange={(e)=>this.updateFile(e)}/>,
      <input type="button" value="Add Resource" onClick={(e)=>this.onSubmit(e)} className="add-resource"/>
    ])
  }
}

if (document.getElementById('upload-form')) {
  ReactDOM.render(<ResourceUpload />, document.getElementById('upload-form'));
}
