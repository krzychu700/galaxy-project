import React from "react";
import "./Mercury.scss";

export default class Mercury extends React.Component {
  render(props) {
    const orbitSize = {
      height: `${this.props.mercury}px`,
      width: `${this.props.mercury}px`
    };

    return (
      <div id="Mercury" className="orbitMercuryPosition">
        <div className="orbitMercury" style={orbitSize}>
          <div className="posMercury">
            <div className="planetMercury " />
          </div>
        </div>
      </div>
    );
  }
}
