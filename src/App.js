import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import getPlayers from "./get-players";
import Players from "./Components/Players";
import PlayersDetails from "./Components/PlayerDetails";

function App() {
  const [playersData, setPlayersData] = useState([]);
  const [playerDetails, setPlayerDetails] = useState([]);

  useEffect(() => {
    async function playersData() {
      const data = await getPlayers();
      setPlayersData(data);
    }
    playersData();
  }, []);

  const playerDetailsHandler = (data, name) => {
    const playerData = data.filter((pData) => {
      return pData.name === name;
    });
    console.log(playerData);
    setPlayerDetails(playerData);
  };
  return (
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
        <PlayersDetails playerDetails={playerDetails} />
      </Route>
    </Switch>
  );
}

export default App;
