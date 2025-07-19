import PlayingCard, { type PlayingCardType } from "../PlayingCard/PlayingCard";

const PlayerArea = () => {
  const playerHand: PlayingCardType[] = [
    { rank: "A", suit: "♠" },
    { rank: "K", suit: "♥" },
    { rank: "Q", suit: "♦" },
    { rank: "J", suit: "♣" },
    { rank: "10", suit: "♠" },
  ]; // Placeholder for player's hand

  return (
    <div>
      <div>Player Area</div>
      <div style={{ display: "flex", gap: "10px" }}>
        {playerHand.map((el) => (
          <PlayingCard card={el} />
        ))}
      </div>
    </div>
  );
};

export default PlayerArea;
