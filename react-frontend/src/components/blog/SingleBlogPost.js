function SingleBlogPost(props) {
  const { id, title, body, time } = props.data;
  return (
    <div>
      <h4>{title.substring(0, 20)}</h4>
      <p className="post-body">
        {body.substring(0, 80)}...{" "}
        <a
          href="https://jsonplaceholder.typicode.com/posts"
          target="_blank"
          rel="noreferrer"
        >
          Read
        </a>
      </p>
      <span>last updated : {time}</span>
    </div>
  );
}

export default SingleBlogPost;
