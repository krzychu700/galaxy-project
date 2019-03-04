import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="galaxy">
        <div className="orbit">
          <div className="pos">
            <div className="planet">
              <div className="moonOrbit">
                <div className="moonPos">
                  <div className="moon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
