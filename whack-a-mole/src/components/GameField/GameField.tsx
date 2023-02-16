import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setScore } from "../../reducers/game";
import { store } from "../../store";

import backgroundImage from "../../assets/images/Background.jpg";
import holeImage from "../../assets/images/Hole.png";
import moleImage from "../../assets/images/Mole.png";

function GameField() {
  const dispatch = useDispatch();
  const score = store.getState().game.score;

  const [molePosition, setMolePosition] = useState(0);
  const [moleIsVisible, setMoleIsVisible] = useState(false);

  const handleMoleClick = () => {
    dispatch(setScore(score + 10));
  };

  const visibleMole = () => {
    return (
      <div
        className="game-field__mole"
        id={molePosition.toString()}
        onClick={handleMoleClick}
      >
        <img src={moleImage} alt="mole" />
      </div>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setMolePosition(Math.floor(Math.random() * 12) + 1);
      setMoleIsVisible(true);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="game-field"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center center`,
      }}
    >
      <div className="hole-container">
        {[...Array(12)].map((_, index) => {
          const isMolePosition = index + 1 === molePosition;
          return (
            <div className="game-field__hole" key={index} id={index.toString()}>
              {isMolePosition && moleIsVisible ? (
                visibleMole()
              ) : (
                <img src={holeImage} alt="hole" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GameField;
