import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ModalAddStudent from '../Modal/ModalAddStudent';

export default class ResourcesRow extends Component {
  constructor() {
    super();
    this.state = {
      addStudent: false
    }
  }

  openAddStudent() {
    if (this.state.addStudent) {
      this.setState({ addStudent: false });
    }
    else {
      this.setState({ addStudent: true });
    }
  }

  render() {
    return (
      <div className="resources-row">
        <div className="resources-table-cell">
          <a href={this.props.resource.url}>{this.props.resource.name}</a>
        </div>
        <div className="resources-table-cell">Assignment</div>
        <div className="resources-table-cell">0</div>
        <div className="resources-table-cell">{this.props.resource.created_at}</div>
        <div className="resources-table-cell resources-faces-list">
          {
            this.props.resource.assignments.map((a, j) =>
              <a href={"/contacts/"+a.student.user.id} alt={a.student.user.name} title={a.student.user.name} key={"contact"+j}>
                <img key={"pp"+j} src={a.student.user.profile_picture} />
              </a>
            )
          }
          <img src="/images/icons8-plus-50.png" onClick={() => this.openAddStudent()} />
        </div>
        { this.state.addStudent ?
          <ModalAddStudent
            resource={this.props.resource}
            contacts={this.props.contacts}
            subject={this.props.subject}
            onAddStudent={this.props.onAddStudent}
            onCancel={()=>this.openAddStudent()}
          /> : '' }
      </div>
    );
  }
}