import * as styles from "./PlayingCard.module.css";
import jackOfSpades from "./assets/jackOfSpades.webp";
import jackOfClubs from "./assets/jackOfClubs.webp";
import jackOfHearts from "./assets/jackOfHearts.webp";
import jackOfDiamonds from "./assets/jackOfDiamonds.webp";
import queenOfSpades from "./assets/queenOfSpades.webp";
import queenOfClubs from "./assets/queenOfClubs.webp";
import queenOfHearts from "./assets/queenOfHearts.webp";
import queenOfDiamonds from "./assets/queenOfDiamonds.webp";
import kingOfSpades from "./assets/kingOfSpades.webp";
import kingOfClubs from "./assets/kingOfClubs.webp";
import kingOfHearts from "./assets/kingOfHearts.webp";
import kingOfDiamonds from "./assets/kingOfDiamonds.webp";

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
  const hidden = true;
  if (hidden)
    return (
      <div
        className={styles.playingCardContainer}
        style={{ color: suitColour }}
      >
        <div className={styles.cardBack}></div>
      </div>
    );

  return (
    <div className={styles.playingCardContainer} style={{ color: suitColour }}>
      <div className={styles.corner + " " + styles.topCorner}>
        <div>{card.rank}</div>
        <div>{card.suit}</div>
      </div>
      <CenterContent card={card} />
      <div className={styles.corner + " " + styles.bottomCorner}>
        <div>{card.rank}</div>
        <div>{card.suit}</div>
      </div>
    </div>
  );
};

export default PlayingCard;

const CenterContent = ({ card }: { card: PlayingCardType }) => {
  if (card.rank === "J" || card.rank === "Q" || card.rank === "K") {
    const imageMap: Record<
      string,
      Partial<Record<PlayingCardType["suit"], string>>
    > = {
      J: {
        "♠": jackOfSpades,
        "♣": jackOfClubs,
        "♥": jackOfHearts,
        "♦": jackOfDiamonds,
      },
      Q: {
        "♠": queenOfSpades,
        "♣": queenOfClubs,
        "♥": queenOfHearts,
        "♦": queenOfDiamonds,
      },
      K: {
        "♠": kingOfSpades,
        "♣": kingOfClubs,
        "♥": kingOfHearts,
        "♦": kingOfDiamonds,
      },
    };

    const imageSrc = imageMap[card.rank]?.[card.suit];

    return (
      <div className={styles.suitImageContainer}>
        <div
          style={{ position: "absolute", left: 28, top: 25, fontSize: "34px" }}
        >
          {card.suit}
        </div>
        {imageSrc && <img src={imageSrc} width="100%" />}
        <div
          style={{
            position: "absolute",
            right: 28,
            bottom: 25,
            fontSize: "34px",
            transform: "rotate(180deg)",
          }}
        >
          {card.suit}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.suitIconsContainer}>
      <SideSuitIcons card={card} />
      <CenterSuitIcons card={card} />
      <SideSuitIcons card={card} />
    </div>
  );
};
// visual reference: https://tse4.mm.bing.net/th/id/OIP.4JKIizREvlVn4vwUsFeahwHaF2?r=0&pid=Api
