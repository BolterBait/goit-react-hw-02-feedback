import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';
import PropTypes from 'prop-types';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  keys = Object.keys(this.state);

  handleState = e => {
    const name = e.target.name;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () =>
    Math.floor((this.state.good / this.countTotalFeedback()) * 100 || 0);

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleState}
            options={this.keys}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
