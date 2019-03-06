import React, { Component } from "react";
import Earth from "../src/space_objects/planets/earth";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="galaxy">
        <Earth />
      </div>
    );
  }
}

export default App;
