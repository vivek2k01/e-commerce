import React from "react";
import logo from "../assets/LOGO.png";
import { NavLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #4B2D1A, #3A2517)",
        color: "#fff",
        padding: "30px 20px",
        fontFamily: "Georgia, serif",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {/* Top section with logo and contact */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {/* Left: Logo and socials */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              flex: 1,
              minWidth: "250px",
            }}
          >
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              />
            </a>
            <h2 style={{ fontSize: "24px", margin: "15px 0" }}>Shrijii Mart</h2>
            <div
              style={{
                display: "flex",
                gap: "15px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://www.instagram.com/shri.somnath.gujrat?igsh=MWlxZGYyaXBma2h0OA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon sx={{ color: "white", fontSize: "40px" }} />
              </a>
              <a
                href="https://www.facebook.com/share/1AxwmpRmSM/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon sx={{ color: "white", fontSize: "40px" }} />
              </a>
              <a
                href="https://www.threads.com/@shri.somnath.gujrat?igshid=NTc4MTIwNjQ2YQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon sx={{ color: "white", fontSize: "40px" }} />
              </a>
            </div>
          </div>

          {/* Center: Quick links */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              textAlign: "center",
              flex: 1,
              minWidth: "200px",
              lineHeight: "1.5",
            }}
          >
            <p style={{ color: "#ddd" }}>
              <strong>Quick links</strong>
            </p>
            <NavLink
              to="/FeaturedProducts"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              Featured Products
            </NavLink>
            <NavLink
              to="/categories"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              Categories
            </NavLink>
            <NavLink
              to="/about"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/about"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              Help
            </NavLink>
          </div>

          {/* Right: Contact info */}
          <div
            style={{
              fontSize: "16px",
              color: "#ddd",
              lineHeight: "1.6",
              flex: 1,
              minWidth: "250px",
              textAlign: "center",
            }}
          >
            <p>
              <strong>Contact Us</strong>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:shrisomnathgujrat@gmail.com"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                shrisomnathgujrat@gmail.com
              </a>
            </p>
            <p>
              Mobile:{" "}
              <a
                href="tel:+918770289281"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                8770289281
              </a>
            </p>
            <p>Location: Somnath, Veraval, Gujarat</p>
          </div>
        </div>

        {/* Bottom copyright */}
        <p style={{ textAlign: "center", fontSize: "14px", color: "#ccc" }}>
          © {new Date().getFullYear()} Shri Somnath Gujarat. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
