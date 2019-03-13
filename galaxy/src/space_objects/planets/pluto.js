import React from "react";
import "./Pluto.scss";

export default class Pluto extends React.Component {
  render(props) {
    const orbitSize = {
      height: `${this.props.pluto.orbit}px`,
      width: `${this.props.pluto.orbit}px`,
      animationDuration: `${this.props.pluto.orbitTime}ms`
    };
    const timeLong = {
      animationDuration: `${this.props.pluto.orbitTime}ms`
    };

    return (
      <div id="Pluto" className="orbitPlutoPosition">
        <div className="orbitPluto" style={orbitSize}>
          <div className="posPluto" style={timeLong}>
            <div className="planetPluto " style={timeLong} />
          </div>
        </div>
      </div>
    );
  }
}
