import React, { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Vision Card */}
      <div
        style={{
          fontFamily: "Georgia, serif",
          backgroundColor: "#fdf6f0",
          borderRadius: "20px",
          padding: isMobile ? "20px" : "30px",
          margin: "20px auto",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          maxWidth: "900px",
          width: "90%",
          marginTop: "70px",
        }}
      >
        <h1
          style={{
            color: "#3A2517",
            fontWeight: "bold",
            fontSize: isMobile ? "24px" : "36px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Our Vision
        </h1>

        <p
          style={{
            fontSize: isMobile ? "14px" : "18px",
            color: "#4b2d1a",
            lineHeight: "1.7",
            textAlign: "justify",
          }}
        >
          Our vision is to make our platform a one-stop destination for all
          products related to Hindu religion. We aim to bring together a wide
          range of spiritual, cultural, and religious items under one roof. From
          pooja essentials and festival decorations to idols, Rudraksha, and
          sacred books — everything you need will be just a click away. Our goal
          is to make it easier for every devotee to access authentic and
          meaningful products without leaving the comfort of their home. Through
          this platform, we wish to promote and preserve the rich traditions of
          Hinduism and serve the spiritual needs of every household.
        </p>
      </div>

      {/* Mission Card */}
      <div
        style={{
          fontFamily: "Georgia, serif",
          backgroundColor: "#fdf6f0",
          borderRadius: "20px",
          padding: isMobile ? "20px" : "30px",
          margin: "20px auto",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          maxWidth: "900px",
          width: "90%",
        }}
      >
        <h1
          style={{
            color: "#3A2517",
            fontWeight: "bold",
            fontSize: isMobile ? "24px" : "36px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Our Mission
        </h1>

        <p
          style={{
            fontSize: isMobile ? "14px" : "18px",
            color: "#4b2d1a",
            lineHeight: "1.7",
            textAlign: "justify",
          }}
        >
          Our mission is to bridge the gap between tradition and technology by
          offering a trusted online platform for Hindu religious products. We
          are committed to providing authentic, high-quality spiritual items
          that meet the devotional needs of every household. By partnering with
          reliable artisans and sellers, we ensure that every product carries
          cultural significance and spiritual value. We aim to simplify the
          shopping experience for festivals, rituals, and daily puja by offering
          everything in one place. Through this initiative, we seek to nurture
          faith, preserve our heritage, and make spirituality accessible across
          generations.
        </p>
      </div>

      {/* Instagram Card */}
      <div
        style={{
          background: "#F3ECE7",
          border: "1px solid #ccc",
          borderRadius: "20px",
          padding: isMobile ? "20px" : "30px",
          margin: "20px auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          fontFamily: "Georgia, serif",
          color: "#3A2517",
          maxWidth: "900px",
          width: "90%",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "22px" : "28px",
            fontWeight: "bold",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Instagram Account
        </h2>
        <p
          style={{
            fontSize: isMobile ? "14px" : "16px",
            lineHeight: "1.6",
            textAlign: "justify",
          }}
        >
          We share <strong>daily darshan</strong> of Somnath Mahadev on our
          Instagram page, which has a devoted community of
          <span style={{ fontWeight: "bold" }}> 100K+</span> followers.
        </p>
        <p
          style={{
            fontSize: isMobile ? "14px" : "16px",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          We have been sharing darshan on our Instagram page for the past 4
          years.
        </p>
        <p
          style={{
            fontSize: isMobile ? "14px" : "16px",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          You can visit our Instagram account
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <button
            style={{
              background: "#3A2517",
              fontFamily: "Georgia, serif",
              color: "#DDD",
              height: "35px",
              border: "none",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "10px 15px",
              cursor: "pointer",
            }}
            onClick={() =>
              window.open(
                "https://www.instagram.com/shri.somnath.gujrat?igsh=MWlxZGYyaXBma2h0OA==",
                "_blank"
              )
            }
          >
            <InstagramIcon />
            Insta Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
