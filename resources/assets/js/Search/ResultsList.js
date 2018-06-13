import React from 'react';
import ResultsItem from './ResultsItem';

const ResultsList = ({minChars = 0, dataSource, q, onClick, hasChat}) => {
  if (q.length >= minChars) {
    return dataSource.map((d, i) => {
      if (q == "" || (q != "" && d.name.toLowerCase().includes(q))) {
        return <ResultsItem data={d} key={i} i={i} onClick={onClick} hasChat={hasChat} />
      }
    });
  }
  return '';
};

export default ResultsList;