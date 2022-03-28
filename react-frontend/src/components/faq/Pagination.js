import React, { useState, useEffect } from "react";
import { ProfileContent } from "../profiles/ProfilesStyles";
import { CgChevronDoubleLeft, CgChevronDoubleRight } from "react-icons/cg";

export default function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {
  const [pages, setPages] = useState(Math.ceil(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setPages(Math.ceil(data.length / dataLimit));
  }, [data]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;

    if (pageLimit > pages) {
      return new Array(pages).fill().map((_, idx) => start + idx + 1);
    } else {
      return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    }
  };

  return (
    <div>
      <ProfileContent>
        {/* show the posts, 20 posts at a time */}

        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} {...d} />
        ))}
      </ProfileContent>

      {/* show the pagination
          it consists of next and previous buttons
          along with page numbers, in our case, 5 page
          numbers at a time
      */}
      <div className="pagination">
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`prev-page ${currentPage === 1 ? "disabled" : ""}`}
        >
          <CgChevronDoubleLeft />
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next-page ${currentPage === pages ? "disabled" : ""}`}
        >
          <CgChevronDoubleRight />
        </button>
      </div>
    </div>
  );
}