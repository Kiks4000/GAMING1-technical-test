import React from "react";
import { useState } from "react";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setName } from "../../reducers/game";

function PlayerNameModal({ showModal, setShowModal }: any) {
  const [playerName, setPlayerName] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePlayerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  const handleModal = (): void => {
    setShowModal(!showModal);
  };

  const handleSubmit = (): void => {
    dispatch(setName(playerName ? playerName : "Player 1"));
    navigate("/game");
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <span className="modal-close-btn" onClick={handleModal}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <h1 className="modal-title">New challenger !</h1>
        <input
          type="text"
          className="modal-input"
          value={playerName}
          onChange={handlePlayerName}
          placeholder="Please enter your name"
          onKeyUp={(key) => {
            if (key.key === "Enter") {
              handleSubmit();
            }
          }}
        />
        <Button
          onClick={handleSubmit}
          className={"playerName-submit-btn"}
          text={"SUBMIT"}
        />
      </div>
    </div>
  );
}

export default PlayerNameModal;
