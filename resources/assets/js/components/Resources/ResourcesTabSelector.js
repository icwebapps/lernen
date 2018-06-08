import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ResourcesTabSelector extends Component {
  capitaliseWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  onClick(i) {
    this.props.onTabChange(i);
  }

  selected(t) {
    return this.props.selected == t ? "tab-selected" : "";
  }

  render() {
    return (  
      <div className="resources-tabs">
        {
          this.props.tabs.map(type =>
            <div key={"tab" + type} className={"resources-tab-item " + this.selected(type)} onClick={(e)=>this.onClick(type)}>
              {this.capitaliseWord(type)+'s'}
            </div>
          )
        }
      </div>
    );
  }
}
