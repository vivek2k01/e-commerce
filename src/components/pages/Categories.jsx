import React, { useState, useEffect } from "react";
import HANUMANJI_IDOL from "../../assets/HANUMANJI_IDOL.jpg";
import chandan_dhup from "../../assets/chandan_dhup.jpg";
import mandir_1 from "../../assets/mandir_3.jpg";
import amazon_logo from "../../assets/amazon_logo.jpg";
import book from "../../assets/gita_book.jpg";
import agarbati from "../../assets/agrbati_sand.jpg";
import rudrakh_mala from "../../assets/Rudraksha_mala.jpg";
import Ritual from "../../assets/Ritual.jpg";
import hours from "../../assets/7hourse.jpg";
import hanumanj from "../../assets/hanumanj.jpg";
import gift from "../../assets/gift.jpg";
import pooja_thali from "../../assets/pooja_thali.jpg";
import rui from "../../assets/rui_ki_batti.jpg";
import upvash from "../../assets/rakshabandhan/sweets.jpg";

const Categories = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Category = [
    {
      id: 1,
      image: gift,
      heading: "Tech Product",
      subtitel:
        "Item suitable for gifting during Festivals, Wedding, Birthday & more",
      icon: amazon_logo,
      Link: "/TechPro",
    },
    {
      id: 2,
      image: pooja_thali,
      heading: "Pooja Thali",
      subtitel: "Pooja ke liye Thali & Kalash ",
      icon: amazon_logo,
      Link: "/Poojathali",
    },
    {
      id: 3,
      image: HANUMANJI_IDOL,
      heading: "Murti / Idol",
      subtitel: "Hindu Devi aur Devtao ki murtiya",
      icon: amazon_logo,
      Link: "/Murti",
    },
    {
      id: 4,
      image: agarbati,
      heading: "Agarbatti",
      subtitel: "A wide variety of Icense sticks, Cones & more",
      icon: amazon_logo,
      Link: "/Aagarbatti",
    },
    {
      id: 5,
      image: rui,
      heading: "Essential Puja Items",
      subtitel:
        "Item suitable for puja like Kumkum, Akshat, Cotton wicks & more",
      icon: amazon_logo,
      Link: "/EssentialPujaItems",
    },
    {
      id: 6,
      image: mandir_1,
      heading: "Mandir For Home",
      subtitel: "Lakdi ke bane Mandir",
      icon: amazon_logo,
      Link: "/Mandir",
    },
    {
      id: 7,
      image: book,
      heading: "Spritual Books",
      subtitel: "Include religious books",
      icon: amazon_logo,
      Link: "/Books",
    },

    {
      id: 8,
      image: rudrakh_mala,
      heading: "Praye Beads & Malas ",
      subtitel: "Rudraksha malas, Tulsi malas & more",
      icon: amazon_logo,
      Link: "/Mala",
    },
    {
      id: 9,
      image: mandir_1,
      heading: "Cloth",
      subtitel: "Indian traditional Sarees, Dhotis & Kurta",
      icon: amazon_logo,
      Link: "/cloth",
    },
    {
      id: 10,
      image: hours,
      heading: "Home Decore",
      subtitel: "Items like wall hangings with Hindu symbols",
      icon: amazon_logo,
      Link: "/Homedecore",
    },
    {
      id: 11,
      image: hanumanj,
      heading: "Religious Jewelry",
      subtitel:
        "Necklace, Bracelets, and Pendants featuring symbols like Om & more",
      icon: amazon_logo,
      Link: "/ReligiousJewelry",
    },
    {
      id: 12,
      image: Ritual,
      heading: "Vastu Items",
      subtitel:
        "items used in specitic hindu rituals like Yantras, Havan kunds and more",
      icon: amazon_logo,
      Link: "/Vastuitems",
    },
    {
      id: 13,
      image: gift,
      heading: "Gifts & Festivel items",
      subtitel:
        "Item suitable for gifting during Festivals, Wedding, Birthday & more",
      icon: amazon_logo,
      Link: "/Gifts",
    },
    {
      id: 14,
      image: chandan_dhup,
      heading: "Dhoop",
      subtitel: "Chandan ki lakdi ki dhoop",
      icon: amazon_logo,
      Link: "/Chandandhup",
    },
    {
      id: 15,
      image: upvash,
      heading: "Upvash Meal",
      subtitel: "Upvas me khane ka Product",
      icon: amazon_logo,
      Link: "/Upvashfood",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {Category.map((item) => (
          <a
            href={item.Link}
            rel="noopener noreferrer"
            key={item.id}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                width: isMobile ? "90%" : "250px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                margin: "0 auto",
                transition: "transform 0.2s ease",
                cursor: "pointer",
                height: "100%",
              }}
            >
              <img
                src={item.image}
                alt={item.heading}
                style={{
                  width: "100%",
                  height: isMobile ? "260px" : "300px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "10px" }}>
                <h3
                  style={{
                    color: "#6B3A1D",
                    marginBottom: "8px",
                    fontSize: isMobile ? "18px" : "20px",
                    textAlign: "center",
                  }}
                >
                  {item.heading}
                </h3>
                <p
                  style={{
                    color: "#333",
                    fontSize: isMobile ? "14px" : "15px",
                    textAlign: "center",
                  }}
                >
                  {item.subtitel}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                >
                  <button
                    style={{
                      fontWeight: "bold",
                      fontSize: isMobile ? "14px" : "16px",
                      color: "#ffff",
                      height: "30px",
                      width: "150px",
                      border: "none",
                      borderRadius: "10px",
                      background: "#3A2517",
                    }}
                  >
                    View products
                  </button>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Categories;
