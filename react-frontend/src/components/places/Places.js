import React, { useState } from "react";
import { locations } from "../../data";
import { Link} from "react-router-dom";
// import "./places.css";

const Menu = ({ spots }) => {
  return (
    <div className="sections1">
      {spots.map((spot) => {
        const { id, title, img, desc, website } = spot;

        return (
          <main key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
              </header>
              <p className="item-text">
                {desc} <a href={website} target="_blank">view site</a>
              </p>
            </div>
          </main>
        );
      })}
    </div>
  );
};

const allCategories = [
  "all",
  ...new Set(locations.map((item) => item.category)),
]; //! dynamically add button categories

const Places = () => {
  const [places, setPlaces] = useState(locations);
  const [categories, setCategories] = useState(allCategories);
  const [activeId, setActiveId] = useState(-1);

  const filterPlaces = (category, index) => {
    if (category === "all") {
      setPlaces(locations);
      setActiveId(index);
      return;
    }
    const newItems = locations.filter((item) => item.category === category);
    setPlaces(newItems);
    setActiveId(index);
  };

  return (
    <main>
      <section className="landing" style={{ textAlign: "left" }}>
        <div className="title">
          <h3 style={{ color: "var(--clr-black)", marginTop: "1rem" }}>
            Places
          </h3>
          <div className="titl-underline"></div>
        </div>
        <div className="btn-container">
          {categories.map((category, index) => {
            return (
              <>
                <button
                  type="button"
                  key={index}
                  onClick={() => {
                    filterPlaces(category, index);
                    // setActiveId(index);
                  }}
                  className={`${
                    activeId === index ? "border-btm filter-btn" : "filter-btn"
                  }`}
                >
                  {category}
                </button>
              </>
            );
          })}
        </div>
        ;
        <Menu spots={places} />
      </section>
    </main>
  );
};

export default Places;

// implement menu design, search bar
