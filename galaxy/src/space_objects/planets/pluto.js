import React from "react";
import "./Pluto.scss";

export default class Pluto extends React.Component {
  render(props) {
    const orbitSize = {
      height: `${this.props.pluto}px`,
      width: `${this.props.pluto}px`
    };

    return (
      <div id="Pluto" className="orbitPlutoPosition">
        <div className="orbitPluto" style={orbitSize}>
          <div className="posPluto">
            <div className="planetPluto " />
          </div>
        </div>
      </div>
    );
  }
}
