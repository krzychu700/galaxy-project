import React, { Component } from "react";
import Mercury from "../src/space_objects/planets/mercury";
import Venus from "../src/space_objects/planets/venus";
import Earth from "../src/space_objects/planets/earth";
import Mars from "../src/space_objects/planets/mars";
import Jupiter from "../src/space_objects/planets/jupiter";
import Saturn from "../src/space_objects/planets/saturn";
import Uranus from "../src/space_objects/planets/uranus";
import Neptune from "../src/space_objects/planets/neptune";
import Pluto from "../src/space_objects/planets/pluto";
import Sun from "../src/space_objects/planets/sun";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mercury: {
        orbit: 300
      },
      venus: {
        orbit: 450
      },
      earth: {
        orbit: 600
      },
      mars: {
        orbit: 750
      },
      jupiter: {
        orbit: 850
      },
      saturn: {
        orbit: 950
      },
      uranus: {
        orbit: 1000
      },
      neptune: {
        orbit: 1100
      },
      pluto: {
        orbit: 1150,
        orbitTime: 10300
      }
    };
  }

  render() {
    return (
      <div className="galaxy">
        <Sun />
        <Mercury mercury={this.state.mercury} />
        <Venus venus={this.state.venus} />
        <Earth earth={this.state.earth} />
        <Mars mars={this.state.mars} />
        <Jupiter jupiter={this.state.jupiter} />
        <Saturn saturn={this.state.saturn} />
        <Uranus uranus={this.state.uranus} />
        <Neptune neptune={this.state.neptune} />
        <Pluto pluto={this.state.pluto} />
      </div>
    );
  }
}

export default App;
