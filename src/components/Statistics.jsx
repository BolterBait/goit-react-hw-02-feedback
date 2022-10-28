import { Result, DataRecord } from './Feedback.styled';
import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <Result>
        <DataRecord>Good: {good}</DataRecord>
        <DataRecord>Neutral: {neutral}</DataRecord>
        <DataRecord>Bad: {bad}</DataRecord>
        <DataRecord>Total: {total}</DataRecord>
        <DataRecord>Positive feedback: {positivePercentage}%</DataRecord>
      </Result>
    </div>
  );
};

export default Statistics;
