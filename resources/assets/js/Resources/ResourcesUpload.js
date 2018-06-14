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
    formData.append('subject_id', this.props.subject);
    axios.post('/resources', formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then((response) => {
      if (response.data.status == 1) {
        this.props.onUpload(response.data.type);
        this.fileInput.value = null;
      }
    });
  }

  updateFile(e) {
    this.setState({file: e.target.files[0]});
  }

  render() {
    return ([
      <input type="file" name="file" onChange={(e)=>this.updateFile(e)} key="resource-file-upload" ref={ref => this.fileInput = ref} />,
      <input type="button" value="Add Resource" onClick={(e)=>this.onSubmit(e)} className="add-resource bold-button" key="resource-file-submit" />
    ])
  }
}
