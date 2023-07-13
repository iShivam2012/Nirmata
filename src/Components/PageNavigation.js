const PageNavigation = ({
  onPrevPageChangeHandler,
  onNextPageChangeHandler,
  onNumberChangeHandler,
  numbers,
}) => {
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" onClick={onPrevPageChangeHandler}>
            Prev
          </button>
        </li>
        {numbers.map((no, index) => {
          return (
            <li key={index}>
              <button
                className="page-link"
                onClick={() => onNumberChangeHandler(no)}
              >
                {no}
              </button>
            </li>
          );
        })}
        <li className="page-item">
          <button className="page-link" onClick={onNextPageChangeHandler}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
