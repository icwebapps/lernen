import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Sidebar from '../Widgets/Sidebar';
import MultillineField from '../Form/MultilineField';

export default class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      pages: [],
      hover: [null, null],
      scroll: 0,
      addComment: false,
      comments: []
    };
  }

  componentDidMount() {
    this.loadPages();  
  }

  loadPages() {
    axios.get('/submissions/'+this.props.submissionId+'/pages').then((response) => {
      this.setState(response.data);
    });
  }

  onHover(e, i) {
    if (!this.state.addComment) {
      this.setState({ hover: [i, e.clientY + (this.state.scroll - 851*i) - 167] })
    }
  }

  onLeave() {
    if (!this.state.addComment) {
      this.setState({ hover: [null, null] });
    }
  }

  handleScroll(event) {
    if (!this.state.addComment) {
      let scrollTop = event.target.scrollTop;
      this.setState({ scroll: scrollTop });
    }
  }

  startComment(event) {
    if (!this.state.addComment) {
      this.setState({ addComment: true });
    }
  }

  stopComment() {
    this.setState({ addComment: false });
  }

  renderComment(i) {
    if (this.state.hover[0] == i) {
      return ([
        <img src="/images/icons8-plus-math-50.png" style={{top: Math.max(this.state.hover[1], 0)}} />,
        this.state.addComment ?
          <div className="feedback-form" style={{top: Math.max(this.state.hover[1], 0)}}>
            <MultillineField className="feedback-text" />
            <input type="button" value="Save" onClick={(e)=>{}} className="save-feedback bold-button" />
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
        {
          this.state.pages.map((p, i) => {
            return (
            <div key={"page"+i} className="feedback-page-item" onMouseMove={(e)=>this.onHover(e, i)} onMouseLeave={()=>this.onLeave()}>
              <img src={"data:image/png;base64,"+p.data} />
              <div className="feedback-annotate">{this.renderComment(i)}
              </div>
            </div>
            )
          })
        }
      </div>
    ]);
  }
}

if (document.getElementById('feedback-widget')) {
  var el = document.getElementById('feedback-widget');
  ReactDOM.render(<Feedback submissionId={el.dataset.submissionid} userId={el.dataset.userid} isTutor={el.dataset.istutor} page={el.dataset.page} />, el);
}