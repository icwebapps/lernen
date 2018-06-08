import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ResourcesTabSelector extends Component {
  componentDidUpdate(prev) {
    if (prev.resources.length === 0 && this.props.resources.length > 0) {
      const tabs = this.getTabs();
      if (tabs.length > 0) {
        this.onClick(tabs[0]);
      }
    }
  }

  getTabs() {
    const types = [];
    this.props.resources.map(r => {
      if (types.indexOf(r.type) === -1) {
        types.push(r.type);
      }
    });
    return types;
  }

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
          this.getTabs().map(type =>
            <div key={"tab" + type} className={"resources-tab-item " + this.selected(type)} onClick={(e)=>this.onClick(type)}>
              {this.capitaliseWord(type)+'s'}
            </div>
          )
        }
      </div>
    );
  }
}
