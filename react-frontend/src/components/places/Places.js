import React, { useState } from "react";
import { locations } from "../../data";
import Place from "./Place";
import { PlacesContainer } from "./PlacesStyles";

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
    <PlacesContainer>
      <div className="title">
        <h3 className="places-page-title">Places</h3>
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
      <Place spots={places} />
    </PlacesContainer>
  );
};

export default Places;

// implement menu design, search bar
