import * as styles from "./PlayingCard.module.css";

export type PlayingCardType = {
  rank: string;
  suit: "♠" | "♥" | "♦" | "♣";
};

const SideSuitIcons = ({
  suitIcon,
  iconCount,
}: {
  suitIcon: PlayingCardType["suit"];
}) => {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {suitIcon}
    </div>
  );
};
const CenterSuitIcons = ({
  suitIcon,
  iconCount,
}: {
  suitIcon: PlayingCardType["suit"];
  iconCount: Array<boolean>;
}) => {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {iconCount.map((val) => (
        <div style={{ visibility: val ? "visible" : "hidden" }}>{suitIcon}</div>
      ))}
    </div>
  );
};

const PlayingCard = ({ card }: { card: PlayingCardType }) => {
  const suitColour = card.suit === "♥" || card.suit === "♦" ? "red" : "black";

  function getIconColumnCounts(rank: string) {
    // Convert rank to number, handle face cards
    const rankMap: Record<string, number> = { J: 11, Q: 12, K: 13, A: 1 };
    const num = rankMap[rank] ?? parseInt(rank, 10);
    console.log(`Rank: ${rank}, Numeric Value: ${num}`);

    const sideCalced =
      num <= 3 ? 0 : num <= 5 ? 2 : num <= 8 ? 3 : num <= 10 ? 4 : 0;
    const centerCalced =
      num === 1 || num === 5 || num === 9
        ? [true]
        : num === 2 || num === 8 || num === 10
        ? [true, true]
        : num === 3
        ? [true, true, true]
        : num === 7
        ? [true, false]
        : [];

    return { side: sideCalced, center: centerCalced };
  }

  const { side: iconSideCount, center: iconCenterCount } = getIconColumnCounts(
    card.rank
  );

  return (
    <div className={styles.playingCardContainer} style={{ color: suitColour }}>
      <div className={styles.corner + " " + styles.topCorner}>
        <div>{card.rank}</div>
        <div>{card.suit}</div>
      </div>
      <div className={styles.suitIconsContainer}>
        <SideSuitIcons suitIcon={card.suit} iconCount={iconSideCount} />
        <CenterSuitIcons suitIcon={card.suit} iconCount={iconCenterCount} />
        <SideSuitIcons suitIcon={card.suit} iconCount={iconSideCount} />
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
