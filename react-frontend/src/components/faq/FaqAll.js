import React, { useState } from "react";
import { faqAll as posts } from "../../data";
import { ProfileContainer } from "../profiles/ProfilesStyles";
import SingleFaqPost from "./SingleFaqPost";
import Pagination from "./Pagination";

const FaqAll = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getSearchData = posts.filter((post) => {
    if (searchTerm !== "" && post.title.includes(searchTerm)) {
      return post;
    }
  });

  return (
    <ProfileContainer>
      <div className="faq-all-div">
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
            RenderComponent={SingleFaqPost}
            pageLimit={5}
            dataLimit={12}
          />
        </>
      ) : posts.length > 0 && searchTerm !== "" ? (
        <>
          <Pagination
            data={getSearchData}
            RenderComponent={SingleFaqPost}
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


// css styles are available in the ProfileStyles,js file