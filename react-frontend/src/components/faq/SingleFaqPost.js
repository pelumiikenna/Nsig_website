import { Link } from "react-router-dom";

const SingleFaqPost = ({ id, title, info }) => {
  return (
    <Link to={`/faq-all/${id}`}>
      <div className="faq-all-post" key={id}>
        <small>{id}</small>
        <h5>{title}</h5>
        <p>{info.substring(0, 100)}...</p>
      </div>
    </Link>
  );
};

export default SingleFaqPost
