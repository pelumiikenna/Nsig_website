import { useParams, useNavigate, Routes, Route } from "react-router-dom";

import { faqAll as posts } from "../../data";
import { Content } from "../../styles/globalStyles";
import { FaqContainer } from "./FaqStyles";

export default function SingleFaq() {
  const { id } = useParams();
  const navigate = useNavigate();

  const matchingFaq = posts.find((post) => post.id == id);
  return (
    <div className=" section-content section">
      <div>
        <div className="details">
          <h2>Faq - {id}</h2>
          <p>{matchingFaq.title}</p>
          <p>{matchingFaq.info}</p>
          <button
            className="btn btn-extra"
            style={{ marginLeft: "0px" }}
            onClick={() => navigate("/faq-all")}
          >
            All Faq
          </button>
        </div>
      </div>
    </div>
  );
}
