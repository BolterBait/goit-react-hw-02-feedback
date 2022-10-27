import React, { Component } from 'react';
import { StatisticData } from './Feedback.styled';

export class Feedback extends Component {
  // static defaultProps = {
  //   step: 1,
  // };

  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  // for (let i = 0; i < 5; i++) {
  //   console.log(this.state.good);
  //   this.setState(prevState => {
  //     console.log(prevState.good);
  //   });
  // }

  handleGood = event => {
    console.log(event.type);
    const { target } = event;
    setTimeout(() => {
      console.log(target);
    }, 500);
  };

  render() {
    // const step = this.props;

    return (
      <StatisticData>
        <span>Good: {this.state.good}</span>
        <span>Neutral: {this.state.neutral}</span>
        <span>Bad: {this.state.bad}</span>
        <button type="button" onClick={this.handleGood}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBad}>
          Bad
        </button>
      </StatisticData>
    );
  }
}

// export class Feedback extends Component {
//   constructor() {
//     super();
//     this.state = {
//       good: 0,
//       neutral: 0,
//       bad: 0,
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Please leave feedback</h1>
//         {/* <button type="button">Good</button>
//         <button type="button">Neutral</button>
//         <button type="button">Bad</button> */}
//         <h2>Statistics</h2>
//         <StatisticData>
//           <span>Good: {this.state.good}</span>
//           <span>Neutral: {this.state.neutral}</span>
//           <span>Bad: {this.state.bad}</span>
//         </StatisticData>
//       </div>
//     );
//   }
// }
