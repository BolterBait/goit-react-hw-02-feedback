import React from 'react';
import { StatisticData, Buttons, Button } from './Feedback.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <StatisticData>
      <Buttons>
        {options.map(item => (
          <li key={item}>
            <Button type="button" name={item} onClick={onLeaveFeedback}>
              {item}
            </Button>
          </li>
        ))}
      </Buttons>
    </StatisticData>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};
