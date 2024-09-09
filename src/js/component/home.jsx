import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '/workspaces/Stephens64-TrafficLight-React/src/js/index.js';

function TrafficLight() {
  const [color, setColor] = useState("red");

  return (
    <div className="traffic-light">
      <div
        onClick={() => setColor("red")}
        className={`light red ${color === 'red' ? 'glow' : ''}`}
      ></div>

      <div
        onClick={() => setColor("yellow")}
        className={`light yellow ${color === 'yellow' ? 'glow' : ''}`}
      ></div>

      <div
        onClick={() => setColor("green")}
        className={`light green ${color === 'green' ? 'glow' : ''}`}
      ></div>
    </div>
  );
}

// Render the TrafficLight component
ReactDOM.render(<TrafficLight />, document.querySelector('#app'));

export default TrafficLight;
