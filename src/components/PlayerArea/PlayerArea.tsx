import PlayingCard, { type PlayingCardType } from "../PlayingCard/PlayingCard";

const PlayerArea = () => {
  const playerHand: PlayingCardType[] = [
    { rank: "A", suit: "♠" },
    { rank: "K", suit: "♥" },
    { rank: "Q", suit: "♦" },
    { rank: "J", suit: "♣" },
    { rank: "10", suit: "♠" },
    { rank: "9", suit: "♥" },
    { rank: "8", suit: "♦" },
    { rank: "7", suit: "♣" },
    { rank: "6", suit: "♠" },
    { rank: "5", suit: "♥" },
    { rank: "4", suit: "♦" },
    { rank: "3", suit: "♣" },
    { rank: "2", suit: "♠" },
  ]; // Placeholder for player's hand

  return (
    <div>
      <div>Player Area</div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {playerHand.map((el) => (
          <PlayingCard card={el} />
        ))}
      </div>
    </div>
  );
};

export default PlayerArea;
