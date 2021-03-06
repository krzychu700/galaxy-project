import React from "react";
import "./Uranus.scss";

export default class Uranus extends React.Component {
  render(props) {
    const orbitSize = {
      height: `${this.props.uranus}px`,
      width: `${this.props.uranus}px`
    };

    return (
      <div id="Uranus" className="orbitUranusPosition">
        <div className="orbitUranus" style={orbitSize}>
          <div className="posUranus">
            <div className="planetUranus " />
          </div>
        </div>
      </div>
    );
  }
}
