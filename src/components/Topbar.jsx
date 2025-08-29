import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import GlobalSearch from "./GlobalSearch";

const Topbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  const menuItems = (
    <div
      style={{
        display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        gap: isMobile ? "10px" : "30px",
        padding: isMobile ? "10px 0" : "0",
      }}
    >
      {["/", "/FeaturedProducts", "/categories", "/about", "/contact"].map(
        (path, i) => {
          const names = [
            "Home",
            "Featured Products",
            "Categories",
            "About",
            "Contact",
          ];
          return (
            <NavLink
              key={path}
              to={path}
              onClick={handleLinkClick}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "20px",
                fontFamily: "Georgia, serif",
              }}
            >
              {names[i]}
            </NavLink>
          );
        }
      )}
    </div>
  );

  return (
    <div
      style={{
        background: "linear-gradient(to right, #4B2D1A)",
        padding: "10px 20px",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            height: "70px",
            width: "70px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        />

        <div></div>
        {isMobile ? (
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "24px",
              color: "#fff",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            ☰
          </div>
        ) : (
          menuItems
        )}
      </div>

      {isMobile && menuOpen && (
        <div style={{ marginTop: "10px" }}>{menuItems}</div>
      )}
    </div>
  );
};

export default Topbar;
