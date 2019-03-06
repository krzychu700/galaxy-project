import React from "react";

export default class Earth extends React.Component {
  render() {
    return (
      <div id="Earth" className="orbit">
        <div className="pos">
          <div className="planet">
            <div className="moonOrbit">
              <div className="moonPos">
                <div className="moon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
