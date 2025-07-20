import * as styles from "./PlayingCard.module.css";

export type PlayingCardType = {
  rank: string;
  suit: "♠" | "♥" | "♦" | "♣";
};

const SideSuitIcons = ({ card }: { card: PlayingCardType }) => {
  const rankMap: Record<string, number> = { J: 11, Q: 12, K: 13, A: 1 };
  const num = rankMap[card.rank] ?? parseInt(card.rank, 10);
  const iconCount =
    num <= 3 ? 0 : num <= 5 ? 2 : num <= 8 ? 3 : num <= 10 ? 4 : 0;
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {new Array(iconCount).fill(null).map(() => (
        <div>{card.suit}</div>
      ))}
    </div>
  );
};
const CenterSuitIcons = ({ card }: { card: PlayingCardType }) => {
  const rankMap: Record<string, number> = { J: 11, Q: 12, K: 13, A: 1 };
  const num = rankMap[card.rank] ?? parseInt(card.rank, 10);
  const centerCalced =
    num === 1 || num === 5 || num === 9
      ? { icons: [true], justification: "center" }
      : num === 2
      ? { icons: [true, true], justification: "space-between" }
      : num === 8 || num === 10
      ? { icons: [true, true], justification: "space-around" }
      : num === 3
      ? { icons: [true, true, true], justification: "space-between" }
      : num === 7
      ? { icons: [true, false], justification: "space-around" }
      : null;

  if (!centerCalced) {
    return <div></div>;
  }

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: centerCalced.justification,
      }}
    >
      {centerCalced.icons.map((val) => (
        <div style={{ visibility: val ? "visible" : "hidden" }}>
          {card.suit}
        </div>
      ))}
    </div>
  );
};

const PlayingCard = ({ card }: { card: PlayingCardType }) => {
  const suitColour = card.suit === "♥" || card.suit === "♦" ? "red" : "black";

  return (
    <div className={styles.playingCardContainer} style={{ color: suitColour }}>
      <div className={styles.corner + " " + styles.topCorner}>
        <div>{card.rank}</div>
        <div>{card.suit}</div>
      </div>
      <div className={styles.suitIconsContainer}>
        <SideSuitIcons card={card} />
        <CenterSuitIcons card={card} />
        <SideSuitIcons card={card} />
      </div>
      <div className={styles.corner + " " + styles.bottomCorner}>
        <div>{card.rank}</div>
        <div>{card.suit}</div>
      </div>
    </div>
  );
};

export default PlayingCard;

// visual reference: https://tse4.mm.bing.net/th/id/OIP.4JKIizREvlVn4vwUsFeahwHaF2?r=0&pid=Api
