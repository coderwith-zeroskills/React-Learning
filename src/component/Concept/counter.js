import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("count", this.state.count);
      }
    );
    // console.log(this.state.count);
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div class="div">
        COUNT: {this.state.count}
        <br></br>
        <button class="btn" onClick={() => this.incrementFive()}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
