import { useState } from "react";
import Records from "./Records";
import PageNavigation from "./PageNavigation";

const Players = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const playersData = data.map((pData) => {
    const age = new Date().getFullYear() - new Date(pData.dob).getFullYear();
    const dob = new Date(pData.dob).toDateString();
    return { ...pData, age: age, dob: dob };
  });
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = playersData.slice(firstIndex, lastIndex);
  const totalNoOfPages = Math.ceil(playersData.length / recordsPerPage);
  const numbers = [...Array(totalNoOfPages + 1).keys()].slice(1);

  const onPrevPageChangeHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNextPageChangeHandler = () => {
    if (currentPage !== totalNoOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onNumberChangeHandler = (no) => {
    setCurrentPage(no);
  };

  return (
    <div>
      <Records currentPage={currentPage} records={records} data={playersData} />
      <PageNavigation
        numbers={numbers}
        onNextPageChangeHandler={onNextPageChangeHandler}
        onPrevPageChangeHandler={onPrevPageChangeHandler}
        onNumberChangeHandler={onNumberChangeHandler}
      />
    </div>
  );
};

export default Players;
