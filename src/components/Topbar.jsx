import React, { useState, useEffect } from "react";
import logo from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";
import CategoryIcon from "@mui/icons-material/Category";

const categories = [
  {
    id: 0,
    heading: <CategoryIcon style={{ fontSize: "24px" }} />,
    link: "/categories",
  },
  { id: 1, heading: "Tech Product", link: "/TechPro" },
  { id: 2, heading: "Pooja Thali", link: "/Poojathali" },
  { id: 3, heading: "Murti / Idol", link: "/Murti" },
  { id: 4, heading: "Agarbatti", link: "/Aagarbatti" },
  { id: 5, heading: "Essential Puja Items", link: "/EssentialPujaItems" },
  { id: 6, heading: "Mandir", link: "/Mandir" },
  { id: 7, heading: "Spritual Books", link: "/Books" },
  { id: 8, heading: "Praye Beads & Malas", link: "/Mala" },
  { id: 9, heading: "Cloth", link: "/Cloth" },
  { id: 10, heading: "Home Decore", link: "/Homedecore" },
  { id: 11, heading: "Religious Jewelry", link: "/ReligiousJewelry" },
  { id: 12, heading: "Vastu Items", link: "/Vastuitems" },
  { id: 13, heading: "Gifts & Festivel items", link: "/Gifts" },
  { id: 14, heading: "Dhoop", link: "/Chandandhup" },
  { id: 15, heading: "Upvash Meal", link: "/Upvashfood" },
];

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
    if (isMobile) setMenuOpen(false);
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

  const categoriesBar = (
    <div
      style={{
        position: "fixed", // Fixed position
        top: "94.5px", // Just below the Topbar
        width: "100%",
        background: "#fff",
        borderBottom: "2px solid #ddd",
        zIndex: 999, // Keep it above content
      }}
    >
      {/* Fixed Category Icon */}
      <div
        style={{
          position: "absolute",
          left: "0",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          paddingLeft: "10px",
          background: "#fff",
        }}
      >
        <NavLink
          to="/categories"
          style={{ textDecoration: "none", color: "#3A2517" }}
        >
          <CategoryIcon style={{ fontSize: "50px", cursor: "pointer" }} />
        </NavLink>
      </div>

      {/* Scrollable Categories */}
      <div
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: "60px", // space for the fixed icon
        }}
      >
        <div
          style={{
            display: "inline-flex",
            gap: "20px",
            padding: "10px",
            width: "max-content",
          }}
        >
          {categories
            .filter((cat) => cat.id !== 0)
            .map((cat) => (
              <NavLink
                key={cat.id}
                to={cat.link}
                style={{
                  flex: "0 0 auto",
                  padding: "10px 20px",
                  background: "#f3f3f3",
                  borderRadius: "20px",
                  fontWeight: "500",
                  cursor: "pointer",
                  color: "#3A2517",
                  textDecoration: "none",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#ddd")}
                onMouseLeave={(e) => (e.target.style.background = "#f3f3f3")}
              >
                {cat.heading}
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Hide scrollbars visually */}
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

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
          <a href="/">
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
          </a>

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

      {/* Push content down so it doesn’t overlap fixed Topbar */}
      <div style={{ paddingTop: "100px", marginBottom: "-90px" }}>
        {categoriesBar}
      </div>
    </>
  );
};

export default Topbar;
