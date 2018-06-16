import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Sidebar from '../Widgets/Sidebar';
import MultillineField from '../Form/MultilineField';
import Field from '../Form/Field';

export default class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      pages: [],
      hover: [null, null],
      scroll: 0,
      addComment: false,
      feedback: []
    };
  }

  componentDidMount() {
    this.loadPages();
    this.loadFeedback();
  }

  loadPages() {
    axios.get('/feedback/'+this.props.submissionId+'/pages').then((response) => {
      this.setState(response.data);
    });
  }

  loadFeedback() {
    axios.get('/feedback/'+this.props.submissionId+'/list').then((response) => {
      this.setState(response.data);
    });
  }

  onHover(e, i) {
    if (!this.state.addComment && this.props.isTutor) {
      this.setState({ hover: [i, e.clientY + (this.state.scroll - 851*i) - 167] })
    }
  }

  onLeave() {
    if (!this.state.addComment && this.props.isTutor) {
      this.setState({ hover: [null, null] });
    }
  }

  handleScroll(event) {
    if (!this.state.addComment && this.props.isTutor) {
      let scrollTop = event.target.scrollTop;
      this.setState({ scroll: scrollTop });
    }
  }

  startComment(event) {
    if (!this.state.addComment && this.props.isTutor) {
      this.setState({ addComment: true });
    }
  }

  stopComment() {
    this.setState({ addComment: false });
  }

  saveFeedback() {
    axios.post('/feedback/' + this.props.submissionId, {
      message: this.state.thisFeedback,
      marks: this.state.marks,
      totalMarks: this.state.totalMarks,
      page: this.state.hover[0],
      position: this.state.hover[1]
    }).then(() => {
      this.setState({ addComment: false, hover: [null, null] });
      this.loadFeedback();
    })
  }

  submit() {
    axios.post('/feedback/' + this.props.submissionId + '/finish').then(() => location.href = '/');
  }

  renderMarks() {
    let count = 0, total = 0;
    this.state.feedback.map(f => {
      count += parseFloat(f.marks); total += parseFloat(f.totalMarks);
    });
    return ["Marks: ", <b>{count}/{total}</b>, <br />, <br />]
  }

  renderComment(i) {
    if (this.state.hover[0] == i) {
      return ([
        <img src="/images/icons8-plus-math-50.png" style={{top: Math.max(this.state.hover[1], 0)}} />,
        this.state.addComment ?
          <div className="feedback-form" style={{top: Math.max(this.state.hover[1], 0)}}>
            <MultillineField className="feedback-text" onChange={(val)=>this.setState({thisFeedback: val})} />
            <Field placeholder="Marks achieved" className="feedback-half feedback-marks" onChange={(val)=>this.setState({marks: val})}/>
            <div className="feedback-marks-separator">/</div>
            <Field placeholder="Possible marks" className="feedback-half feedback-total" onChange={(val)=>this.setState({totalMarks: val})} />
            <input type="button" value="Save" onClick={(_)=>this.saveFeedback()} className="save-feedback bold-button" />
            <input type="button" value="Cancel" onClick={(_)=>this.stopComment()} className="cancel-feedback" />
          </div>
        : null
      ])
    }
  }

  render() {
    return ([
      <Sidebar key="sidebar" selected={this.props.page} isTutor={this.props.isTutor} />,
      <div key="feeback-main" className="width-scrollable" style={{display: 'block'}} onClick={(e)=>this.startComment(e)} onScroll={(e)=>this.handleScroll(e)}>
        { !this.props.isTutor ? this.renderMarks() : null }
        {
          this.state.pages.map((p, pageNum) => {
            return (
            <div key={"page"+pageNum} className="feedback-page-item" onMouseMove={(e)=>this.onHover(e, pageNum)} onMouseLeave={()=>this.onLeave()}>
              <img src={"data:image/png;base64,"+p.data} />
              <div className="feedback-annotate">
                {this.renderComment(pageNum)}
                {
                  this.state.feedback.map((f, i) => 
                    f.page == pageNum ?
                    <div key={"feedback"+i} className="feedback-saved" style={{ top: f.position }}>
                      {f.message}
                      <br /><b>{f.marks} / {f.totalMarks}</b>
                    </div>
                    : null
                  )
                }
              </div>
            </div>
            )
          })
        }
        {
          this.props.isTutor ?
          <input type="button" className="feedback-submit" value="Submit Feedback" onClick={()=>this.submit()} /> :
          <input type="button" className="feedback-submit" value="Back" onClick={()=>location.href='/submissions'} />
        }
      </div>
    ]);
  }
}

if (document.getElementById('feedback-widget')) {
  var el = document.getElementById('feedback-widget');
  ReactDOM.render(<Feedback submissionId={el.dataset.submissionid} userId={el.dataset.userid} isTutor={el.dataset.istutor} page={el.dataset.page} />, el);
}