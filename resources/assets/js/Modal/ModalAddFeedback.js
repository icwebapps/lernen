import React, {Component} from 'react';
import axios from 'axios';
import Field from '../Form/Field';

export default class ModalAddFeedback extends Component {
  constructor(props) {
    super();
    this.state = {
      submission_id: props.submissionID,
      grade: null,
      feedback: ""
    }
  }

  submit() {
    const formData = new FormData();
    formData.append('grade', this.state.grade);
    formData.append('feedback', this.state.feedback);
    formData.append('submission_id', this.state.submission_id);
    axios.post('/submissions/feedback', formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then((response) => {
      if (response.data.status == 1) {
        this.props.onCancel();
      }
    });
  }

  render() {
    return ([
      <div key="modal-overlay" className="modal-overlay" onClick={()=>this.props.onCancel()}/>,
      <div key="modal-add-object" className="modal-add-object">
        <div className="modal-title">Leave Grade and Feedback</div>
        <div className="modal-label">Grade</div>
        <Field type="text" value={this.state.grade} name="" onChange={(name)=>this.setState({ grade: parseInt(name) })} />
        <div className="modal-separator"/>
        <div className="modal-label">Feedback</div>
        <Field type="text" value={this.state.feedback} name="" onChange={(name)=>this.setState({ feedback: name })} />
        <div className="modal-separator"/>
        <input type="button" value="Submit Feedback" onClick={()=>this.submit()} className="add-button bold-button" key="add-assignment" />
      </div>
    ]);
  }
}