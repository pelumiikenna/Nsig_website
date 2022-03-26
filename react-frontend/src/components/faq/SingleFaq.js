import { useParams, useNavigate, Routes, Route } from "react-router-dom";

import { faqAll as posts } from "../../data";
import { Content } from "../../styles/globalStyles";

export default function SingleFaq() {
  const { id } = useParams();
  const navigate = useNavigate();

  const matchingFaq = posts.find((post) => post.id == id);
  return (
    <Content className="section">
      <div>
        <div className="details">
          <h2>Faq - {id}</h2>
          <p>{matchingFaq.title}</p>
          <p>{matchingFaq.info}</p>
          <button
            style={{ marginLeft: "0" }}
            className="btn btn-extra"
            onClick={() => navigate("/faq-all")}
          >
            All Faq
          </button>
        </div>
      </div>
    </Content>
  );
}
