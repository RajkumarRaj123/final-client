import { Link } from "react-router-dom";
import "./Explore.css";

const Explore = () => {
  const categories = [
    { name: "Graphics & Design", path: "/gigs?cat=design" },
    { name: "Programming & Tech", path: "/gigs?cat=programming" },
    { name: "Digital Marketing", path: "/gigs?cat=marketing" },
    { name: "Writing & Translation", path: "/gigs?cat=writing" },
    { name: "AI Services", path: "/gigs?cat=ai" },
    { name: "Video & Animation", path: "/gigs?cat=video" },
  ];

  return (
    <div className="explore">
      <div className="exploreContainer">
        <h1>Explore Categories</h1>
        <p>Select a category to explore available gigs</p>

        <div className="grid">
          {categories.map((cat, index) => (
            <Link to={cat.path} className="categoryCard" key={index}>
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
