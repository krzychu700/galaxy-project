import React from "react";
import "./Earth.scss";

export default class Earth extends React.Component {
  render(props) {
    const orbitSize = {
      height: `${this.props.earth}px`,
      width: `${this.props.earth}px`
    };

    return (
      <div id="Earth" className="orbitEarthPosition">
        <div className="orbitEarth" style={orbitSize}>
          <div className="posEarth">
            <div className="planetEarth ">
              <div className="moonOrbitEarth">
                <div className="moonPosEarth">
                  <div className="moonEarth" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
