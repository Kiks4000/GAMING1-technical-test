import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import PlayerNameModal from "../../components/PlayerNameModal";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [showMole, setShowMole] = useState<boolean>(Math.random() > 0.5);
  const [showMole2, setShowMole2] = useState<boolean>(Math.random() > 0.5);
  const [showMole3, setShowMole3] = useState<boolean>(Math.random() > 0.5);
  const [showMole4, setShowMole4] = useState<boolean>(Math.random() > 0.5);

  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleMole = (): void => {
    setShowMole(!showMole);
    setShowMole2(!showMole2);
    setShowMole3(!showMole3);
    setShowMole4(!showMole4);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      toggleMole();
    }, 1000);
    return () => clearInterval(interval);
  }, [showMole, showMole2, showMole3, showMole4]);

  return (
    <section className="home-section">
      {showModal ? (
        <PlayerNameModal showModal={showModal} setShowModal={setShowModal} />
      ) : null}
      <div className="home-title-container">
        <h1 className="home-title">whack-a-mole</h1>
      </div>
      <div className="home-mole-container">
        {showMole ? (
          <img src={require("../../assets/images/Hole.png")} alt="" />
        ) : (
          <img src={require("../../assets/images/Mole.png")} alt="" />
        )}
        {showMole2 ? (
          <img src={require("../../assets/images/Hole.png")} alt="" />
        ) : (
          <img src={require("../../assets/images/Mole.png")} alt="" />
        )}
        {showMole3 ? (
          <img src={require("../../assets/images/Hole.png")} alt="" />
        ) : (
          <img src={require("../../assets/images/Mole.png")} alt="" />
        )}
        {showMole4 ? (
          <img src={require("../../assets/images/Hole.png")} alt="" />
        ) : (
          <img src={require("../../assets/images/Mole.png")} alt="" />
        )}
      </div>
      <div className="home-btn-container">
        <Button onClick={handleModal} className={""} text={"PLAY"} />
        <Button
          onClick={() => navigate("/leaderboard")}
          className={""}
          text={"LEADERBOARD"}
        />
      </div>
    </section>
  );
}

export default Home;
