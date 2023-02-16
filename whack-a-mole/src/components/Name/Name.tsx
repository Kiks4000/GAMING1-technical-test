import React from "react";
import { store } from "../../store";

function Name() {
  const name = store.getState().game.name;
  return (
    <div className="name-banner">
      <h1>Player Name : {name ? name : "Player 1"}</h1>
    </div>
  );
}

export default Name;
