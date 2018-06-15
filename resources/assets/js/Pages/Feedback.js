import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Sidebar from '../Widgets/Sidebar';

export default class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      pages: [],
      hover: [null, null],
      scroll: 0
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
    this.setState({ hover: [i, e.clientY + (this.state.scroll - 851*i) - 167] })
  }

  onLeave() {
    this.setState({ hover: [null, null] });
  }

  handleScroll(event) {
    let scrollTop = event.target.scrollTop;
    this.setState({ scroll: scrollTop });
  }

  render() {
    return ([
      <Sidebar key="sidebar" selected={this.props.page} isTutor={this.props.isTutor} />,
      <div key="feeback-main" className="width-scrollable" style={{display: 'block'}} onScroll={(e)=>this.handleScroll(e)}>
        {
          this.state.pages.map((p, i) => {
            return (
            <div key={"page"+i} className="feedback-page-item" onMouseMove={(e)=>this.onHover(e, i)} onMouseLeave={()=>this.onLeave()}>
              <img src={"data:image/png;base64,"+p.data} />
              <div className="feedback-annotate">
              {
                this.state.hover[0] == i ?
                <img src="/images/icons8-plus-math-50.png" style={{top: Math.max(this.state.hover[1], 0)}} />
                : null
              }
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