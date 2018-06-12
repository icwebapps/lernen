import React, {Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class Assignments extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      progress_bar_width: 0,
      file: null
    };
    this.loadAssignments();
  }


  loadAssignments() {
    axios.get('/assignments/list', {
      _token: $('meta[name="csrf-token"]').attr('content')
    }).then((response) => {
      this.setState(response.data);
      this.changeStyle();
    });
  }

  changeStyle() {
    const percentage = this.percentageComplete();
    this.setState({progress_bar_width: percentage});
  }

  percentageComplete() {
    var comp = this.state.tasks.filter(t => t.completed);
    return this.state.tasks.length > 0 ? comp.length*100.0/this.state.tasks.length : 100;
  }

  updateFile(e) {
    this.setState({file: e.target.files[0]});
  }

  onSubmit(e, id) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file);
    formData.append('assignment_id', id);
    axios.post('/assignments', formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then((response) => {
      if (response.data.status == 1) {
        this.onUpload(response.data.type, id);
        this.fileInput.value = null;
      }
    });
  }

  onUpload(new_type, id) {
    this.loadAssignments(() => {
      this.setState({ type: new_type });
    });
  }

  displayAssignments() {
    return (this.state.tasks.filter(t => !t.completed).length.toString() + " assignments left");
  }

  render() {
    return (
    <div className="dashboard-panel-item flex-rows">
      <div className="assignments-progress">
        {this.displayAssignments()}
        <div className="assignments-progress-bar">
          <div className="progress-complete" style={{ width: this.state.progress_bar_width + "%" }}/>
        </div>
      </div>
      <div className="assignments-list">
        <div className="assignments-row assignments-header">
          <div className="assignments-cell">Assignment</div>
          <div className="assignments-cell">Due</div>
          <div className="assignments-cell">Submit</div>
        </div>
        {
          this.state.tasks.map((t) => {
            if (!t.completed) {
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
            }
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
