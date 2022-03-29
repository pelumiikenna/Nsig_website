import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { questions } from "../../data";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { FaqContainer } from "./FaqStyles";

const Question = ({ id, title, info, handleClick, showInfo }) => {
  return (
    <main className="question">
      {" "}
      <header>
        {" "}
        <h4>{title}</h4>{" "}
        <button className="btn-icon" onClick={() => handleClick(id)}>
          {showInfo === id ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo === id && <p>{info}</p>}
    </main>
  );
};

const Faq = () => {
  const [faqs, setFaqs] = useState(questions);
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

  const handleClick = (index) => {
    if (showInfo === index) {
      //if clicked question is already active, then close it
      setShowInfo(null);
    } else {
      setShowInfo(index);
    }
  };
  return (
    <FaqContainer>
      <h3 className="title">Faq</h3>
      <div className="title-underline"></div>
      <div className="container">
        <section>
          {faqs.map((faq) => {
            return (
              <Question
                key={faq.id}
                {...faq}
                handleClick={handleClick}
                showInfo={showInfo}
              />
            );
          })}
        </section>
        <button className="btn btn-extra" onClick={() => navigate("/faq-all")}>
          See More
        </button>
      </div>
    </FaqContainer>
  );
};

export default Faq;
