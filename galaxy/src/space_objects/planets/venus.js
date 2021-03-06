import React from "react";
import "./Venus.scss";

export default class Venus extends React.Component {
  render(props) {
    const orbitSize = {
      height: `${this.props.venus}px`,
      width: `${this.props.venus}px`
    };

    return (
      <div id="Venus" className="orbitVenusPosition">
        <div className="orbitVenus" style={orbitSize}>
          <div className="posVenus">
            <div className="planetVenus" />
          </div>
        </div>
      </div>
    );
  }
}
