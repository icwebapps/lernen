import React, {Component} from 'react';
import axios from 'axios';
import Field from '../Form/Field';

export default class ModalAddFeedback extends Component {
  constructor(props) {
    super();
    this.state = {
      grade: null,
      feedback: ""
    }
  }

  submit(e, id) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('grade', this.state.grade);
    formData.append('feedback', this.state.feedback);
    axios.patch('/submissions', formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then((response) => {
      if (response.data.status == 1) {
        this.loadAssignments();
        this.fileInput.value = null;
      }
    });
  }

  render() {
    return ([
      <div key="modal-overlay" className="modal-overlay" onClick={(_)=>this.props.onCancel()}></div>,
      <div key="modal-add-object" className="modal-add-object">
        <div className="modal-title">Leave Grade and Feedback</div>
        <div className="modal-label">Grade</div>
        <Field type="text" value={this.state.grade} name="" onChange={(name)=>this.setState({ grade: name.toInteger() })} />
        <div className="modal-separator"></div>
        <div className="modal-label">Feedback</div>
        <Field type="text" value={this.state.feedback} name="" onChange={(name)=>this.setState({ feedback: name })} />
        <div className="modal-separator"></div>
        <input type="button" value="Submit Feedback" onClick={()=>this.submit()} className="add-button bold-button" key="add-assignment" />
      </div>
    ]);
  }
}