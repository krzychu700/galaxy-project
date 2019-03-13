import React from "react";
import "./Mars.scss";

export default class Mars extends React.Component {
  render(props) {
    const orbitSize = {
      height: `${this.props.mars.orbit}px`,
      width: `${this.props.mars.orbit}px`
    };

    return (
      <div id="Mars" className="orbitMarsPosition">
        <div className="orbitMars" style={orbitSize}>
          <div className="posMars">
            <div className="planetMars" />
          </div>
        </div>
      </div>
    );
  }
}
