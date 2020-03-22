import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Reliable, efficient delivery </h1>
          <h2> Powered by Technology</h2>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </header>
        <div className="card-container">
          <div className="card card-cyan special">
            <div className="card-title">
              <h2>Supervisor</h2>
            </div>
            <div className="card-content">
              <p>Monitors activity to identify project roadblocks</p>
            </div>
            <div className="card-image">
              <img
                src={require("./assets/images/icon-supervisor.svg")}
                alt="Super"
              />
            </div>
          </div>
          <div className="card card-red">
            <div className="card-title">
              <h2>Team Builder</h2>
            </div>
            <div className="card-content">
              <p>
                Scans our talent network to create the optimal team for your
                project
              </p>
            </div>
            <div className="card-image">
              <img
                src={require("./assets/images/icon-team-builder.svg")}
                alt="Super"
              />
            </div>
          </div>
          <div className="card card-blue special">
            <div className="card-title">
              <h2>Calculator</h2>
            </div>
            <div className="card-content">
              <p>
                Uses data from past projects to provide better delivery
                estimates
              </p>
            </div>
            <div className="card-image">
              <img
                src={require("./assets/images/icon-calculator.svg")}
                alt="Super"
              />
            </div>
          </div>
          <div className="card card-orange">
            <div className="card-title">
              <h2>Karma</h2>
            </div>
            <div className="card-content">
              <p> Regularly evaluates our talent to ensure quality</p>
            </div>
            <div className="card-image">
              <img
                src={require("./assets/images/icon-karma.svg")}
                alt="Super"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
