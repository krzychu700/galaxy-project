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
import Objects from "./objects.json";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      galaxyObects: Objects
    };
  }

  render() {
    return (
      <div className="galaxy">
        <Sun />
        <Mercury mercury={this.state.galaxyObects.MERCURY.distance_from_sun} />
        <Venus venus={this.state.galaxyObects.VENUS.distance_from_sun} />
        <Earth earth={this.state.galaxyObects.EARTH.distance_from_sun} />
        <Mars mars={this.state.galaxyObects.MARS.distance_from_sun} />
        <Jupiter jupiter={this.state.galaxyObects.JUPITER.distance_from_sun} />
        <Saturn saturn={this.state.galaxyObects.SATURN.distance_from_sun} />
        <Uranus uranus={this.state.galaxyObects.URANUS.distance_from_sun} />
        <Neptune neptune={this.state.galaxyObects.NEPTUNE.distance_from_sun} />
        <Pluto pluto={this.state.galaxyObects.PLUTO.distance_from_sun} />
      </div>
    );
  }
}

export default App;
