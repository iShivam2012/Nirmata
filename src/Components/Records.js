import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/Records.css";

const Records = ({ records, currentPage, playerDetailsHandler }) => {
  const [sortedRecords, setSortedRecords] = useState(records);
  const [order, setOrder] = useState("ASC");
  const sortHandler = (e) => {
    const property = e.target.innerText;
    if (property === "Name ") {
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
    } else if (property === "Rank ") {
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
    } else if (property === "Age ") {
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

  const onClickHandler = (name) => {
    playerDetailsHandler(records, name);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Sort by</th>
            <th onClick={sortHandler.bind("ASC")}>
              Name <i className="fa fa-sort"></i>
            </th>
            <th onClick={sortHandler.bind("ASC")}>
              Rank <i className="fa fa-sort"></i>
            </th>
            <th onClick={sortHandler.bind("ASC")}>
              Age <i className="fa fa-sort"></i>
            </th>
          </tr>
        </thead>
      </table>
      <div className="flex row ">
        {sortedRecords.map((data) => {
          const PlayerType = {
            bowler: "Bowler",
            allRounder: "All Rounder",
            batsman: "Batsman",
            wicketKeeper: "Wicket Keeper",
          };
          return (
            <div className="card col-sm-4" key={data.id}>
              <div className="card-header text-center">
                <Link
                  onClick={() => onClickHandler(data.name)}
                  to="/playerDetails"
                >
                  {data.name}
                </Link>
              </div>
              <div className="card-body flex">
                <div className="flex-column">
                  <h6 className="card-title">Type</h6>
                  <p className="card-text"> {PlayerType[data.type]} </p>
                </div>
                <div className="flex-column">
                  <h6 className="card-title">Points</h6>
                  <p className="card-text">{data.points}</p>
                </div>
                <div className="flex-column">
                  <h6 className="card-title">Rank</h6>
                  <p className="card-text">{data.rank}</p>
                </div>
                <div className="flex-column">
                  <h6 className="card-title">Age</h6>
                  <p className="card-text"> {data.age}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Records;
