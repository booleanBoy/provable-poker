import { useState } from "react";
import "./App.css";
import PlayerArea from "./components/PlayerArea/PlayerArea";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100dvh",
        margin: "20px",
        boxSizing: "border-box",
      }}
    >
      <div>
        <h1>Provable Poker</h1>
      </div>
      <div>
        <div>Table Container</div>
        <PlayerArea />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
