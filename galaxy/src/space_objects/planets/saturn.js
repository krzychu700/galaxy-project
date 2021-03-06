import React from "react";
import "./Saturn.scss";

export default class Saturn extends React.Component {
  render(props) {
    const orbitSize = {
      height: `${this.props.saturn  }px`,
      width: `${this.props.saturn  }px`
    };

    return (
      <div id="Saturn" className="orbitSaturnPosition">
        <div className="orbitSaturn" style={orbitSize}>
          <div className="posSaturn">
            <div className="planetSaturn " />
          </div>
        </div>
      </div>
    );
  }
}
