import React from "react";
import "./Neptune.scss";

export default class Neptune extends React.Component {
  render(props) {
    const orbitSize = {
      height: `${this.props.neptune}px`,
      width: `${this.props.neptune}px`
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
