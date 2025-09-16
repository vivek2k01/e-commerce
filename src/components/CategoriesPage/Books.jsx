import React, { useState, useEffect } from "react";
import amazon_logo from "../../assets/amazon_logo.jpg";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useUserData } from "../../components/useUserData";
import UserDetailsModal from "../UserDetailsModal";

const Books = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [getProduct, setGetProduct] = useState([]);
  const [loading, setLoading] = useState(true); // <-- loading state

  // 🔽 ADD: hook state/actions
  const {
    showModal,
    setShowModal,
    formData,
    setFormData,
    handleProductAnchorClick,
    handleSubmit,
  } = useUserData();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const itemsRef = ref(db, "Books");
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const arr = Object.values(data);
        const formatted = arr.map((item) => ({
          id: item.id,
          image: item.image,
          heading1: item.heading,
          heading2: item.subHeading,
          text: item.text,
          link: item.link,
          icon: amazon_logo,
          Categories: item.Categories,
        }));

        const sorted = formatted.sort((a, b) => b.id - a.id);

        setGetProduct(sorted);
      } else {
        setGetProduct([]);
      }
      setLoading(false); // <-- data load hone ke baad
    });
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  return (
    <div style={{ padding: "20px" }}>
      {/* Section Heading */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "45px 0",
          textAlign: "center",
          gap: "20px",
        }}
      >
        <hr
          style={{
            width: isMobile ? "20%" : "35%",
            height: "2px",
            background: "#6B3A1D",
            border: "none",
          }}
        />
        <span
          style={{
            fontSize: isMobile ? "24px" : "36px",
            color: "#6B3A1D",
            fontFamily: "Georgia, serif",
            fontWeight: "bold",
          }}
        >
          All Religious Book
        </span>
        <hr
          style={{
            width: isMobile ? "20%" : "35%",
            height: "2px",
            background: "#6B3A1D",
            border: "none",
          }}
        />
      </div>

      {/* Buffering / Loading Indicator */}
      {loading ? (
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            color: "#6B3A1D",
            padding: "40px",
          }}
        >
          Loading...
        </div>
      ) : getProduct.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            color: "red",
            padding: "40px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          Product Not Found <RemoveShoppingCartIcon />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: isTablet ? "30px" : "40px",
            cursor: "pointer",
            position: "relative",
          }}
        >
          {getProduct.map((item) => (
            <div
              key={item.id}
              style={{
                width: isMobile ? "90%" : isTablet ? "45%" : "300px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                textAlign: "center",
                transition: "all 0.3s ease-in-out",
                position: "relative",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
                onClick={(e) => handleProductAnchorClick(e, item.link)}
              >
                <img
                  src={item.image}
                  alt={item.heading1}
                  style={{
                    width: "100%",
                    height: isMobile ? "250px" : "300px",
                    objectFit: "cover",
                    position: "relative",
                  }}
                />
                {item.Categories && (
                  <div
                    style={{
                      background: "#3A2517",
                      color: "#fff",
                      width: "auto",
                      padding: "0px 15px",
                      height: "40px",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "20px",
                      fontWeight: 600,
                      position: "absolute",
                      top: 0,
                      right: 0,
                    }}
                  >
                    {item.Categories}
                  </div>
                )}
                <div style={{ padding: "15px" }}>
                  <h3
                    style={{
                      fontSize: isMobile ? "18px" : "20px",
                      color: "#6B3A1D",
                      marginBottom: "5px",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {item.heading1}
                  </h3>
                  <h4
                    style={{
                      fontSize: isMobile ? "15px" : "17px",
                      color: "black",
                      marginBottom: "10px",
                      fontWeight: "bold",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {item.heading2}
                  </h4>
                  <p
                    style={{
                      fontSize: isMobile ? "14px" : "15px",
                      color: "#555",
                      marginBottom: "10px",
                    }}
                  >
                    {item.text}
                  </p>

                  {/* Buy Link */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        color: "#444",
                        fontWeight: "bold",
                        fontSize: isMobile ? "14px" : "16px",
                        gap: "8px",
                        justifyContent: "center",
                      }}
                      onClick={(e) => handleProductAnchorClick(e, item.link)}
                    >
                      <span>Buy</span>
                      <img
                        src={item.icon}
                        alt="amazon"
                        style={{
                          width: isMobile ? "50px" : "70px",
                          objectFit: "contain",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
      <UserDetailsModal
        showModal={showModal}
        setShowModal={setShowModal}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Books;
