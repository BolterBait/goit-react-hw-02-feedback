import React, { Component } from 'react';
import {
  StatisticData,
  Buttons,
  Button,
  Result,
  DataRecord,
} from './Feedback.styled';

export class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <StatisticData>
        <h1>Please leave feedback</h1>
        <Buttons>
          <Button type="button" onClick={this.handleGood}>
            Good
          </Button>
          <Button type="button" onClick={this.handleNeutral}>
            Neutral
          </Button>
          <Button type="button" onClick={this.handleBad}>
            Bad
          </Button>
        </Buttons>
        <h2>Statistics</h2>
        <Result>
          <DataRecord>Good: {this.state.good}</DataRecord>
          <DataRecord>Neutral: {this.state.neutral}</DataRecord>
          <DataRecord>Bad: {this.state.bad}</DataRecord>
        </Result>
      </StatisticData>
    );
  }
}
