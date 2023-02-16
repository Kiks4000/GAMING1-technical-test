import React from "react";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import PlayerNameModal from "../../components/PlayerNameModal";
import { getLeaderboard, Leaderboard } from "../../api/routes";

function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = React.useState([] as Leaderboard[]);

  const navigate = useNavigate();

  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  React.useEffect(() => {
    getLeaderboard().then((data) => {
      setLeaderboard(data);
    });
  }, []);

  return (
    <section className="leaderboard-section">
      {showModal ? (
        <PlayerNameModal showModal={showModal} setShowModal={setShowModal} />
      ) : null}
      <div className="leaderboard-title-container">
        <h1 className="leaderboard-title">Leaderboard</h1>
      </div>
      <div className="leaderboard-container">
        <div className="leaderboard-list-container">
          <div className="leaderboard-list-firstHalf">
            {leaderboard.slice(0, 5).map((player) => (
              <div className="leaderboard-list-item">
                <p className="leaderboard-list-item-name">{player.name}</p>
                <p className="leaderboard-list-item-score">{player.score}</p>
              </div>
            ))}
          </div>
          <div className="leaderboard-list-secondHalf">
            {leaderboard.slice(5, 10).map((player) => (
              <div className="leaderboard-list-item">
                <p className="leaderboard-list-item-name">{player.name}</p>
                <p className="leaderboard-list-item-score">{player.score}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="leaderboard-btn-container">
        <Button
          className="leaderboard-btn"
          text="Back Home"
          onClick={() => {
            navigate("/");
          }}
        />
        <Button onClick={handleModal} className={""} text={"PLAY"} />
      </div>
    </section>
  );
}

export default LeaderboardPage;
