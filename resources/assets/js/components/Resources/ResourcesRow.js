import React from 'react';

const ResourcesRow = ({resource}) =>
  <div className="resources-row">
    <div className="resources-table-cell">
      <a href={"assets.lernen.co.uk/"+resource.url}>{resource.name}</a>
    </div>
    <div className="resources-table-cell">Assignment</div>
    <div className="resources-table-cell">0</div>
    <div className="resources-table-cell">{resource.created_at}</div>
    <div className="resources-table-cell resources-faces-list"> 
      <img src="/images/jasonlipowicz.png" />
      <img src="/images/boazfrancis.jpg" />
      <img src="/images/icons8-plus-50.png" />
    </div>
  </div>;

export default ResourcesRow;