import { useEffect, useState } from "react";
import "./App.css";
import getPlayers from "./get-players";
import Players from "./Components/Players";

function App() {
  const [playersData, setPlayersData] = useState([]);

  useEffect(() => {
    async function playersData() {
      const data = await getPlayers();
      setPlayersData(data);
    }
    playersData();
  }, []);

  return (
    <div>
      <Players data={playersData} />
    </div>
  );
}

export default App;
