import React from "react";
import "./Jupiter.scss";

export default class Jupiter extends React.Component {
  render(props) {
    const orbitSize = {
      height: `${this.props.jupiter}px`,
      width: `${this.props.jupiter}px`
    };

    return (
      <div id="Jupiter" className="orbitJupiterPosition">
        <div className="orbitJupiter" style={orbitSize}>
          <div className="posJupiter">
            <div className="planetJupiter " />
          </div>
        </div>
      </div>
    );
  }
}
