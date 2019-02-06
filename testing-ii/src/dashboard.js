import React from 'react';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      strikes: 0,
      balls: 0,
      fouls: 0,
    };
  }

  /** 
   * if 3 strikes, reset strikes and balls to 0 
   * else, increment strikes by 1
   */
  handleStrikes = () => {
    this.setState(prevState => {
      if (prevState.strikes === 2) {
        return { 
          strikes: 0, balls: 0, fouls: 0,
        };
      }
      return {
        strikes: prevState.strikes + 1,
      };
    });
  }

  /**
   * if 4 balls, reset strikes and balls to 0
   * else, increment balls by 1
   */
  handleBall = () => {
    this.setState(prevState => {
      if (prevState.balls === 3) {
        return { 
          strikes: 0, balls: 0, fouls: 0,
        };
      }
      return { 
        balls: prevState.balls + 1,
      };
    });
  }

  /**
   * increment fouls by 1
   */
  handleFoul = () => {
    this.setState(prevState => ({
      fouls: prevState.fouls + 1,
    }));
  }

  /**
   * if hit, reset strikes, balls and fouls to 0
   */
  handleHit = () => {
    this.setState(prevState => ({
      strikes: 0,
      balls: 0,
      fouls: 0,
    }));
  }

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <button onClick={this.handleStrikes}>Strikes</button>
        <button onClick={this.handleBall}>Balls</button>
        <button onClick={this.handleFoul}>Foul</button>
        <button onClick={this.handleHit}>Hit</button>
        <div data-testid='strikesCounter'>{this.state.strikes}</div>
      </div>
    );
  };
};

export default Dashboard;
