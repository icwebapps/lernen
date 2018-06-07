import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ResourcesTabSelector extends Component {
  constructor() 
  {
    super();
    this.state = {
      tabID: 1  
    };
  }

  onClick(i) 
  {
    this.setState({tabID: i});
  }

  selected(i)
  {
    return this.state.tabID == i ? "tab-selected" : "";
  }

  render() 
  {
    return (  
      <div className="resources-tabs">
        <div className={"resources-tab-item " + this.selected(1)} onClick={(e)=>this.onClick(1)}>Documents</div>
        <div className={"resources-tab-item " + this.selected(2)} onClick={(e)=>this.onClick(2)}>Photos</div>
        <div className={"resources-tab-item " + this.selected(3)} onClick={(e)=>this.onClick(3)}>Videos</div>
      </div>
    );
  }
}
