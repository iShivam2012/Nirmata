const Records = ({ data, records }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Points</th>
          <th>Rank</th>
          <th>Date of Birth</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {records.map((data) => {
          const dob = new Date(data.dob).toDateString();
          const age =
            new Date().getFullYear() - new Date(data.dob).getFullYear();
          return (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.description}</td>
              <td>{data.type}</td>
              <td>{data.points}</td>
              <td>{data.rank}</td>
              <td>{dob}</td>
              <td>{age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Records;
