import React from "react";
import "./Sun.scss";

export default class Sun extends React.Component {
  render(props) {
    // const orbitSize = {
    //   height: `${this.props.earth.orbit}px`,
    //   width: `${this.props.earth.orbit}px`
    // };

    return (
      <div id="Sun">
        <div className="sunPos">
          <div className="sun " />
        </div>
      </div>
    );
  }
}
