import React, { Component } from "react";
import Timer from "./Timer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      timerIDs: []  // matches the test expectation
    };
    this.handleAddTimer = this.handleAddTimer.bind(this);
  }

  // Lifecycle method – called once when App mounts
  componentDidMount() {
    this.handleAddTimer();  // add initial timer
  }

  handleAddTimer() {
    const newTimerId = Math.floor(Math.random() * 100000);
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, newTimerId]
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAddTimer}>Add Timer</button>
        <div className="TimerGrid">  {/* matches the test */}
          {this.state.timerIDs.map(id => (
            <Timer key={id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
