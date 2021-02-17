import React from "react";
import uuid from 'react-uuid'
function Paginate({
  postPerPage,
  totalPosts,
  paginate,
  currentPage,
  pageNumberLimit,
  maxpageNumberLimit,
  minpageNumberLimit,
  handleNext,
  handlePrevious,
}) {
  const PageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    PageNumbers.push(i);
  }

  let pageIncrement = null;
  if (PageNumbers.length > maxpageNumberLimit) {
    pageIncrement = (
      <li onClick={handleNext} style={{ fontFamily: "900",marginLeft:"15px",marginRight:"15px",fontSize:"20px",cursor:"pointer" }}>
        <h5>&hellip;</h5>
      </li>
    );
  }
  let pageDecrement = null;
  if (PageNumbers.length > maxpageNumberLimit) {
    pageDecrement = (
      <li onClick={handlePrevious} style={{ fontFamily: "900",marginLeft:"15px",marginRight:"15px",fontSize:"20px",cursor:"pointer" }}>
        <h5>&hellip;</h5>
      </li>
    );
  }

  return (
    <div>
      <nav>
        <ul className="pagination">
          <li class="page-item disabled" onClick={handlePrevious} style={{width:'100px',cursor:"pointer"}}>
            <a class="page-link" href="#" tabindex="-1">
              Previous
            </a>
          </li>

          {pageDecrement}
          {PageNumbers.map((number,index) => {
   
            if (number <= maxpageNumberLimit && number > minpageNumberLimit) {
              return (
                <>
                  <li  key={uuid()}
                    className={
                      currentPage == number ? "page-item active" : "page-item"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => {
                        paginate(number);
                      }}
                      className="page-link"
                    >
                      {" "}
                      {number}{" "}
                    </a>
                  </li>
                </>
              );
            } else {
              return null;
            }
          })}
          {pageIncrement}
          <li  class="page-item disabled" onClick={handleNext} style={{width:"100px",cursor:'pointer'}}>
            <a class="page-link" href="#" tabindex="-1">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Paginate;
