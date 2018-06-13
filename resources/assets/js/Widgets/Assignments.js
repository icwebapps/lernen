import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class Assignments extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      file: null
    };
    this.loadAssignments();
  }


  loadAssignments() {
    axios.get('/assignments/list?completed=false').then((response) => {
      this.setState(response.data);
    });
  }

  updateFile(e) {
    this.setState({file: e.target.files[0]});
  }

  onSubmit(e, id) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('assignment_id', id);
    axios.post('/submissions', formData, {
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

  displayAssignments() {
    return (this.state.tasks.length.toString() + " assignments left");
  }

  render() {
    return (
    <div className="dashboard-panel-item flex-rows">
      <div className="assignments-progress">
        {this.displayAssignments()}
      </div>
      <div className="assignments-list">
        <div className="assignments-row assignments-header">
          <div className="assignments-cell">Assignment</div>
          <div className="assignments-cell">Due</div>
          <div className="assignments-cell">Submit</div>
        </div>
        {
          this.state.tasks.map((t) => {
            return (
              <div className="assignments-row">
                <div className="assignments-cell" style={{cursor: 'pointer'}}>
                  <a href={t.url} download>{t.title}</a>
                </div>
                <div className="assignments-cell due-soon">{t.due}</div>
                <div className="assignments-cell">
                  {/*<img src={"images/upload-icon.png"} onClick={() => this.chooseFile()}/>*/}
                  <input type="file" name="file" onChange={(e)=>this.updateFile(e)} key="submission-file-upload" ref={ref => this.fileInput = ref} />
                  <input type="button" value="Add Submission" onClick={(e)=>this.onSubmit(e, t.assignment_id)} className="add-resource" key="submission-file-submit" />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
    );
  }
}

if (document.getElementById('assignment-widget')) {
  ReactDOM.render(<Assignments/>, document.getElementById('assignment-widget'));
}
