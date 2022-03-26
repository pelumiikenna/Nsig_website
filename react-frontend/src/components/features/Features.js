import React, { useState, useEffect } from "react";
import { FeatureContainer } from "./FeaturesStyles";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { events } from "../../data";

const Features = () => {
  const [activities, setActivities] = useState(events);
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = activities.length - 1;
      }
      return index;
    });
  };

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > activities.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  return (
    <FeatureContainer>
      <h3 className="title">Features</h3>
      <div className="title-underline"></div>
      <div className="section-center">
        {activities.map((activity, activityIndex) => {
          const { id, image, name, title, quote } = activity;

          let position = "nextSlide";
          if (activityIndex === index) {
            position = "activeSlide";
          }
          if (
            activityIndex === index - 1 ||
            (index === 0 && activityIndex === activities.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="event-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}

        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </FeatureContainer>
  );
};

//     <section className="section">
//     </section>

export default Features;
