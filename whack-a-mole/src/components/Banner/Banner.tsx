import React, { useState } from "react";
import Name from "../Name";
import Score from "../Score";
import Timer from "../Timer";
import GameOverModal from "../GameOverModal";

function Banner() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleTimerComplete = () => {
    setShowModal(true);
  };

  return (
    <div className="banner">
      <Name />
      <Score />
      <Timer onTimerComplete={handleTimerComplete} />
      {showModal ? <GameOverModal /> : null}
    </div>
  );
}

export default Banner;
