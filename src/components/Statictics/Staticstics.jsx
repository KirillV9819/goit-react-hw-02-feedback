import React from 'react';

const Statistics = ({ good, neutral, bad, total }) => (
  <div>
    <h2 className="title">Statistics</h2>
    <ul className="list">
      <li className="item">Good:{good}</li>
      <li className="item">Neutral:{neutral}</li>
      <li className="item">Bad:{bad}</li>
      <li className="item">Total:</li>
      <li className="item">Positive feedback:</li>
    </ul>
  </div>
);

export default Statistics;
