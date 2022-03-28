import { Link } from "react-router-dom";

const Place = ({ spots }) => {
  return (
    <div className="sections1">
      {spots.map((spot) => {
        const { id, title, img, desc, website } = spot

        return (
          <main key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
              </header>
              <p className="item-text">
                {desc}{" "}
                <a href={website} target="_blank" rel="noreferrer">
                  view site
                </a>
              </p>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export default Place;
