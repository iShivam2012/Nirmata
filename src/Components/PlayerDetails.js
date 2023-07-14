const PlayersDetails = ({ playerDetails, data }) => {
  const playerType = playerDetails[0].type;
  const similarTypePlayers = data.filter((playerData) => {
    if (playerData.name !== playerDetails[0].name) {
      return playerData.type === playerType;
    }
    return "";
  });
  if (similarTypePlayers.length > 5) {
    similarTypePlayers.slice(0, 5);
  }
  return (
    <div className="container">
      <ul className="list-group" key={playerDetails[0].id}>
        <li className="list-group-item">Name: {playerDetails[0].name}</li>
        <li className="list-group-item">
          Description: {playerDetails[0].description}
        </li>
        <li className="list-group-item">Type: {playerDetails[0].type}</li>
        <li className="list-group-item">Points: {playerDetails[0].points}</li>
        <li className="list-group-item">Rank: {playerDetails[0].rank}</li>
        <li className="list-group-item">DOB: {playerDetails[0].dob}</li>
        <li className="list-group-item">Age: {playerDetails[0].age}</li>
      </ul>
      {similarTypePlayers.map((data) => {
        return (
          <ul style={{ margin: "10px" }} className="list-group" key={data.id}>
            <li className="list-group-item">Name: {data.name}</li>
            <li className="list-group-item">Points: {data.points}</li>
            <li className="list-group-item">Rank: {data.rank}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default PlayersDetails;
