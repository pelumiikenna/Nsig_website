import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { questions } from "../../data";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { FaqContainer } from "./FaqStyles";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <main className="question">
      {" "}
      <header>
        {" "}
        <h4>{title}</h4>{" "}
        <button className="btn-icon" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </main>
  );
};

const Faq = () => {
  const [faqs, setFaqs] = useState(questions);
  const navigate = useNavigate();
  return (
    <FaqContainer>
      <h3 className="title">Faq</h3>
      <div className="title-underline" style={{ width: "2rem" }}></div>
      <div className="container">
        <section>
          {faqs.map((faq) => {
            return <Question key={faq.id} {...faq} />;
          })}
        </section>
        <button
          className="btn btn-extra"
          onClick={() => navigate("/faq-all")}
        >
          See More
        </button>
      </div>
    </FaqContainer>
  );
};

export default Faq;
