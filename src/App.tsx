import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import robot from "./assets/RobotAtMechanexus.png";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<string | undefined>("empty");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://robomechanexus-backend-test.onrender.com/api")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [setData]);

  return (
    <>
      <h1>Robomechanexus</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p>Robot mechatronics workshop</p>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h1>API Response</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
      <img src={robot} alt="Robot" />
    </>
  );
}

export default App;
