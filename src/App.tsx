import { useState } from "react";
import "./App.css";
import robot from "./assets/RobotAtMechanexus.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Robomechanexus</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p>Robot mechatronics workshop</p>
      <img src={robot} alt="Robot" />
    </>
  );
}

export default App;
