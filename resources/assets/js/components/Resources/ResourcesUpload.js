import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class ResourcesUpload extends Component {

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
        if (response.data.status == 1) {
          this.props.onUpload();
        }
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
