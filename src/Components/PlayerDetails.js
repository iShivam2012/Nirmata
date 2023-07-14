const PlayersDetails = (playerDetails) => {
  return (
    <div className="container">
      <ul className="list-group" key={playerDetails.playerDetails[0].id}>
        <li className="list-group-item">
          Name: {playerDetails.playerDetails[0].name}
        </li>
        <li className="list-group-item">
          Description: {playerDetails.playerDetails[0].description}
        </li>
        <li className="list-group-item">
          Type: {playerDetails.playerDetails[0].type}
        </li>
        <li className="list-group-item">
          Points: {playerDetails.playerDetails[0].points}
        </li>
        <li className="list-group-item">
          Rank: {playerDetails.playerDetails[0].rank}
        </li>
        <li className="list-group-item">
          DOB: {playerDetails.playerDetails[0].dob}
        </li>
        <li className="list-group-item">
          Age: {playerDetails.playerDetails[0].age}
        </li>
      </ul>
    </div>
  );
};

export default PlayersDetails;
