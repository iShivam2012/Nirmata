import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import getPlayers from "./get-players";
import Players from "./Components/Players";
import PlayersDetails from "./Components/PlayerDetails";

function App() {
  const [playersData, setPlayersData] = useState([]);

  useEffect(() => {
    async function playersData() {
      const data = await getPlayers();
      localStorage.setItem("playersData", JSON.stringify(data));
      setPlayersData(JSON.parse(localStorage.getItem("playersData")));
    }
    playersData();
  }, []);

  const playerDetailsHandler = (data, name) => {
    const playerData = data.filter((pData) => {
      return pData.name === name;
    });
    localStorage.setItem("playerDetail", JSON.stringify(playerData));
  };
  return (
    <div className="App">
      <div className="jumbotron header">
        <div className="container">
          <h1 style={{ margin: "10px" }} className="display-4">
            Cricket App
          </h1>
          <p className="lead">
            This is a demo cricket Web App where you can see the player details
          </p>
        </div>
      </div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/cricketApp" />
        </Route>
        <Route path="/cricketApp">
          <div className="container">
            {playersData.length > 0 && (
              <Players
                data={playersData}
                playerDetailsHandler={playerDetailsHandler}
              />
            )}
          </div>
        </Route>
        <Route path="/playerDetails" exact>
          {playersData.length > 0 && <PlayersDetails data={playersData} />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
