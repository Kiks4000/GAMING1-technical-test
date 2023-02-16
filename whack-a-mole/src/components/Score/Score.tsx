import React from "react";
import { store } from "../../store";

function Score() {
  const [score, setScore] = React.useState<number>(store.getState().game.score);

  React.useEffect(() => {
    store.subscribe(() => {
      setScore(store.getState().game.score);
    });
  }, [score]);

  return (
    <div className="score-banner">
      <h1>Score: {score}</h1>
    </div>
  );
}

export default Score;
