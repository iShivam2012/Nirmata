import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Styles/Records.css";

const PlayersDetails = ({ data }) => {
  const [playerDetails, setPlayerDetails] = useState([]);
  useEffect(() => {
    const playerDetail = JSON.parse(localStorage.getItem("playerDetail"));
    if (playerDetail.length > 0) {
      setPlayerDetails(playerDetail);
    }
  }, []);
  let similarTypePlayers = [];
  if (playerDetails.length > 0) {
    const playerType = playerDetails[0].type;
    similarTypePlayers = data.filter((playerData) => {
      if (playerData.name !== playerDetails[0].name) {
        return playerData.type === playerType;
      }
      return "";
    });
    if (similarTypePlayers.length > 5) {
      similarTypePlayers.slice(0, 5);
    }
  }

  return (
    <div className="container">
      <h3 className="text-center display-4">Cricketers Details</h3>
      <div className="flex">
        {playerDetails.length > 0 && (
          <div className="card col-sm-4" key={playerDetails[0].id}>
            <div className="card-header text-center">
              <b>Name: </b>
              {playerDetails[0].name}
            </div>
            <div className="card-body ">
              <p className="card-text">
                <b>Description: </b>
                {playerDetails[0].description}
              </p>
              <p className="card-text">
                <b>Type: </b>
                {playerDetails[0].type}
              </p>
              <p className="card-text">
                <b>Points: </b>
                {playerDetails[0].points}
              </p>
              <p className="card-text">
                <b>Rank: </b>
                {playerDetails[0].rank}
              </p>
              <p className="card-text">
                <b>DOB: </b>
                {playerDetails[0].dob}
              </p>
              <p className="card-text">
                <b>Age: </b>
                {playerDetails[0].age}
              </p>
            </div>
          </div>
        )}
      </div>
      <h3 className="text-center display-4">Similar Players details </h3>
      <div className="flex">
        {similarTypePlayers.map((data) => {
          return (
            <div
              style={{ margin: "10px" }}
              className="card col-sm-4"
              key={data.id}
            >
              <div className="card-header text-center">
                <b>Name: </b> {data.name}
              </div>
              <div className="card-body ">
                <p className="card-text flex">
                  <b>Points: </b>
                  {data.points}
                </p>
                <p className="card-text flex">
                  <b>Rank: </b>
                  {data.rank}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Link style={{ margin: "20px" }} className="flex" to="/cricketApp">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default PlayersDetails;
