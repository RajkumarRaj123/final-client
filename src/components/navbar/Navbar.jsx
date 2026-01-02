import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("auth/logout");
      localStorage.removeItem("currentUser");
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="text">Freelancer</span>
          </Link>

          <span className="dot">.</span>
        </div>
        <div className="links">
          <Link to="/business">Freelance busines</Link>
          <Link to="/explore">Explore</Link>
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/noavatar.jpg"} />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="add">
                        Add New Gigs
                      </Link>
                    </>
                  )}
                  <Link className="link" to="orders">
                    Orders
                  </Link>
                  <Link className="link" to="messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">
                signin
              </Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link" to="/gigs?cat=design">
              Web Design
            </Link>
            <Link className="link" to="/gigs?cat=word">
              Word Press
            </Link>
            <Link className="link" to="/gigs?cat=web">
              Web Development
            </Link>
            <Link className="link" to="/gigs?cat=ai">
              AI Services
            </Link>
            <Link className="link" to="/gigs?cat=digital">
              Digital Marketing
            </Link>
            <Link className="link" to="/gigs?cat=music">
              Music & Audio
            </Link>
            <Link className="link" to="/gigs?cat=business">
              Business
            </Link>
            <Link className="link" to="/gigs?cat=style">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};
export default Navbar;
