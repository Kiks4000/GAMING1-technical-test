import React from "react";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { store } from "../../store";
import { setScore, setName } from "../../reducers/game";
import { postLeaderboard } from "../../api/routes";

function GameOverModal() {
  const navigate = useNavigate();

  const name = store.getState().game.name || "Player 1";
  const score = store.getState().game.score;

  async function handleHome() {
    await postLeaderboard({ name, score });
    store.dispatch(setScore(0));
    store.dispatch(setName(""));
    navigate("/");
  }

  async function handleLeaderboard() {
    await postLeaderboard({ name, score });
    store.dispatch(setScore(0));
    store.dispatch(setName(""));
    navigate("/leaderboard");
  }

  return (
    <div className="modal-container">
      <div className="modal">
        <h1 className="modal-title">Game Over {name ? name : "Player 1"}</h1>
        <p className="modal-text">Your score is {score}</p>
        <div className="modal-btn-container">
          <Button onClick={handleHome} className={""} text={"HOME"} />
          <Button
            onClick={handleLeaderboard}
            className={""}
            text={"LEADERBOARD"}
          />
        </div>
      </div>
    </div>
  );
}

export default GameOverModal;
