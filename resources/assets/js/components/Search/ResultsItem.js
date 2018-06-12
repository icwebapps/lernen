import React from 'react';

const ResultsItem = ({data, i, onClick, hasChat}) =>
  <div className="contact-item" key={i} onClick={onClick ? (_)=> onClick(data) : null}>
    <div className="contact-name">{data.name}</div>
    {
      hasChat ?
      <div className="contact-options">
          <img src="/images/icons8-speech-bubble-50.png"/>
      </div>
      : ''
    }
    
  </div>;

export default ResultsItem;