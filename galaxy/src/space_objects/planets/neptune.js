import React from "react";
import "./Neptune.scss";

export default class Neptune extends React.Component {
  render(props) {
    const orbitSize = {
      height: `${this.props.neptune.orbit}px`,
      width: `${this.props.neptune.orbit}px`
    };

    return (
      <div id="Neptune" className="orbitNeptunePosition">
        <div className="orbitNeptune" style={orbitSize}>
          <div className="posNeptune">
            <div className="planetNeptune " />
          </div>
        </div>
      </div>
    );
  }
}
