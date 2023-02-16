import React from "react";
import { useDispatch } from "react-redux";
import { setScore } from "../../reducers/game";
import { store } from "../../store";

function GameField() {
  const dispatch = useDispatch();

  const backgroundImage = require("../../assets/images/Background.jpg");
  const hole = require("../../assets/images/Hole.png");
  const mole = require("../../assets/images/Mole.png");

  const score = store.getState().game.score;

  const [molePosition, setMolePosition] = React.useState<number>(0);
  const [moleIsVisible, setMoleIsVisible] = React.useState<boolean>(false);

  const handleMoleClick = () => {
    setMoleIsVisible(false);
    dispatch(setScore(score + 10));
  };

  const algorithm = () => {
    if (moleIsVisible) {
      return (
        <div
          className="game-field__mole"
          id={molePosition.toString()}
          onClick={handleMoleClick}
        >
          <img src={mole} alt="" />
        </div>
      );
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMolePosition(Math.floor(Math.random() * 12));
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
        {molePosition === 1 ? (
          algorithm()
        ) : (
          <div className="game-field__hole" id="1">
            <img src={hole} alt="" />
          </div>
        )}
        {molePosition === 2 ? (
          algorithm()
        ) : (
          <div className="game-field__hole" id="2">
            <img src={hole} alt="" />
          </div>
        )}
        {molePosition === 3 ? (
          algorithm()
        ) : (
          <div className="game-field__hole" id="3">
            <img src={hole} alt="" />
          </div>
        )}
        {molePosition === 4 ? (
          algorithm()
        ) : (
          <div className="game-field__hole" id="4">
            <img src={hole} alt="" />
          </div>
        )}
        {molePosition === 5 ? (
          algorithm()
        ) : (
          <div className="game-field__hole" id="5">
            <img src={hole} alt="" />
          </div>
        )}
        {molePosition === 6 ? (
          algorithm()
        ) : (
          <div className="game-field__hole" id="6">
            <img src={hole} alt="" />
          </div>
        )}
        {molePosition === 7 ? (
          algorithm()
        ) : (
          <div className="game-field__hole" id="7">
            <img src={hole} alt="" />
          </div>
        )}
        {molePosition === 8 ? (
          algorithm()
        ) : (
          <div className="game-field__hole" id="8">
            <img src={hole} alt="" />
          </div>
        )}
        {molePosition === 9 ? (
          algorithm()
        ) : (
          <div className="game-field__hole" id="9">
            <img src={hole} alt="" />
          </div>
        )}
        {molePosition === 10 ? (
          algorithm()
        ) : (
          <div className="game-field__hole" id="10">
            <img src={hole} alt="" />
          </div>
        )}
        {molePosition === 11 ? (
          algorithm()
        ) : (
          <div className="game-field__hole" id="11">
            <img src={hole} alt="" />
          </div>
        )}
        {molePosition === 12 ? (
          algorithm()
        ) : (
          <div className="game-field__hole" id="12">
            <img src={hole} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default GameField;
