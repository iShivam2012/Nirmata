import { useState } from "react";
import Records from "./Records";
import PageNavigation from "./PageNavigation";

const Players = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const totalNoOfPages = Math.ceil(data.length / recordsPerPage);
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
      <Records records={records} data={data} />
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
