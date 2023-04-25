import React, { Component } from "react";

class Mess extends Component {
  constructor() {
    super();
    this.state = {
      name: "NA",
      Anime: "NA",
      power: "NA",
    };
  }
  changeMessage() {
    this.setState({
      name: "eren",
      Anime: "AOT",
      power: "foundind titan",
    });
  }

  render() {
    return (
      <div>
        {/* <h>{this.state.message}</h> */}
        <h>character name :{this.state.name}</h>
        <br></br>
        <h>anime name {this.state.Anime}</h>
        <br></br>
        <h>Power :{this.state.power}</h>
        <br></br>
        <br></br>
        <button onClick={() => this.changeMessage()}>
          click me to reveal the anime character details
        </button>
      </div>
    );
  }
}
export default Mess;
