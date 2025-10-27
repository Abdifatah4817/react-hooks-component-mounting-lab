import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0
    };
    this.clockTick = this.clockTick.bind(this);
  }

  clockTick() {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  }

  // Lifecycle method – start interval
  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000);
  }

  // Lifecycle method – cleanup interval
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Time: {this.state.time}</div>;
  }
}

export default Timer;
