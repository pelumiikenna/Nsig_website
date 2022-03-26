import React, { useState, useEffect } from "react";
import { faqAll as posts } from "../../data";
import { ProfileContainer, ProfileContent } from "../profiles/ProfilesStyles";
import { CgChevronDoubleLeft, CgChevronDoubleRight } from "react-icons/cg";
import { Link } from "react-router-dom";

const Post = ({ id, title, info }) => {
  return (
    <Link to = {`/faq-all/${id}`}>
    <div key={id} style={{ height: "230px", border: "1px solid var(--gold)" }}>
      <small>{id}</small>
      <h5 style={{ marginBottom: "20px" }}>{title}</h5>
      <p>{info.substring(0, 100)}...</p>
    </div>
    </Link>
  );
};

function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {
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

const FaqAll = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getSearchData = posts.filter((post) => {
    if (searchTerm !== "" && post.title.includes(searchTerm)) {
      return post;
    }
  });

  return (
    <ProfileContainer style={{ margin: "30px auto 50px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 20px",
          alignItems: "center",
          height: "40px",
        }}
      >
        <h3>All Faq's</h3>
        <div>
          <input
            className="input"
            type="text"
            name="search"
            placeholder="🔍  search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {posts.length > 0 && searchTerm === "" ? (
        <>
          <Pagination
            data={posts}
            RenderComponent={Post}
            pageLimit={5}
            dataLimit={12}
          />
        </>
      ) : posts.length > 0 && searchTerm !== "" ? (
        <>
          <Pagination
            data={getSearchData}
            RenderComponent={Post}
            pageLimit={5}
            dataLimit={12}
          />
        </>
      ) : (
        <h1>No Posts to display</h1>
      )}
    </ProfileContainer>
  );
};

export default FaqAll;
