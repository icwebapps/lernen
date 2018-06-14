import React, {Component} from 'react';



export default class ModalViewFeedback extends Component {
  render() {
    return ([
      <div key="modal-overlay" className="modal-overlay" onClick={()=>this.props.onCancel()}/>,
      <div key="modal-add-object" className="modal-add-object">
        <div className="modal-label">{this.props.feedback}</div>

      </div>
    ]);
  }
}