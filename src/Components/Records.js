import { useEffect, useState } from "react";

const Records = ({ data, records, currentPage }) => {
  const [sortedRecords, setSortedRecords] = useState(records);
  const [order, setOrder] = useState("ASC");
  const sortHandler = (e) => {
    const property = e.target.innerText;
    if (property === "Name") {
      if (order === "ASC") {
        const sd = [...records].sort((a, b) => (a.name > b.name ? 1 : -1));
        setSortedRecords(sd);
        setOrder("DSC");
      }
      if (order === "DSC") {
        const sd = [...records].sort((a, b) => (b.name > a.name ? 1 : -1));
        setSortedRecords(sd);
        setOrder("ASC");
      }
    } else if (property === "Rank") {
      if (order === "ASC") {
        const sd = [...records].sort((a, b) => (a.rank > b.rank ? 1 : -1));
        setSortedRecords(sd);
        setOrder("DSC");
      }
      if (order === "DSC") {
        const sd = [...records].sort((a, b) => (b.rank > a.rank ? 1 : -1));
        setSortedRecords(sd);
        setOrder("ASC");
      }
    } else if (property === "Age") {
      if (order === "ASC") {
        const sd = [...records].sort((a, b) => (a.age > b.age ? 1 : -1));
        setSortedRecords(sd);
        setOrder("DSC");
      }
      if (order === "DSC") {
        const sd = [...records].sort((a, b) => (b.age > a.age ? 1 : -1));
        setSortedRecords(sd);
        setOrder("ASC");
      }
    }
  };

  useEffect(() => {
    setSortedRecords(records);
  }, [currentPage]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={sortHandler.bind("ASC")}>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Points</th>
          <th onClick={sortHandler.bind("ASC")}>Rank</th>
          <th>Date of Birth</th>
          <th onClick={sortHandler.bind("ASC")}>Age</th>
        </tr>
      </thead>
      <tbody>
        {sortedRecords.map((data) => {
          return (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.description}</td>
              <td>{data.type}</td>
              <td>{data.points}</td>
              <td>{data.rank}</td>
              <td>{data.dob}</td>
              <td>{data.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Records;
