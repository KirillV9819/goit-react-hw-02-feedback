import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onGoodIncrement, onNeutralIncrement, onBadIncrement }) => (
  <div>
    <h2>Please leave feedback</h2>
    <button className={s.btn} onClick={onGoodIncrement}>Good</button>
    <button className={s.btn} onClick={onNeutralIncrement}>Neutral</button>
    <button className={s.btn} onClick={onBadIncrement}>Bad</button>
  </div>
);

export default FeedbackOptions;
