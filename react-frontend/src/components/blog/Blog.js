import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProfileContent, ProfileContainer } from "../profiles/ProfilesStyles";
import SingleBlogPost from "./SingleBlogPost";
const url = "https://jsonplaceholder.typicode.com/posts";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("something went wrong while requesting posts");
      })
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <h1>{error}</h1>;

  return (
    <ProfileContainer className="blog-container">
      <h3> Most recent blog posts</h3>

      <ProfileContent className="blog-content">
        {posts.slice(0, 9).map((post) => {
          var options = { year: "numeric", month: "long", day: "numeric" };
          const currentDate = new Date().toLocaleDateString("en-US", options);
          post.time = currentDate;
          return <SingleBlogPost key={post.id} data={post} />;
        })}
      </ProfileContent>
    </ProfileContainer>
  );
};

export default Blog;

// notable / most viewed blog post fetch latest
