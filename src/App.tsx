import { useState } from "react";

import "./App.css";
import { shuffleNewDeck } from "./lib/lib";

import GameTable from "./components/GameTable/GameTable";
import FooterUI from "./components/FooterUI/FooterUI";

function App() {
  const shuffledDeck = useState(() => shuffleNewDeck());
  console.log("Shuffled Deck:", shuffledDeck);
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
      <GameTable />
      <FooterUI />
    </div>
  );
}

export default App;
