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
    this.setState({ addStudent: true });
  }

  render() {
    return (
      <div className="resources-row">
        <div className="resources-table-cell">
          <a href={"assets.lernen.co.uk/"+this.props.resource.url}>{this.props.resource.name}</a>
        </div>
        <div className="resources-table-cell">Assignment</div>
        <div className="resources-table-cell">0</div>
        <div className="resources-table-cell">{this.props.resource.created_at}</div>
        <div className="resources-table-cell resources-faces-list">
          {
            this.props.resource.students.map((s, j) =>
              <a href={"/contacts/"+s.user.id} alt={s.user.name} title={s.user.name}><img key={"pp"+j} src={s.user.profile_picture} /></a>
            )
          }
          <img src="/images/icons8-plus-50.png" onClick={(e) => this.openAddStudent()} />
        </div>
        { this.state.addStudent ? <ModalAddStudent allContacts={this.props.allContacts} /> : '' }
      </div>
    );
  }
}