import React from "react";

const ContactUs = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Georgia, serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Contact Us</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone Number"
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          style={{ ...inputStyle, resize: "none" }}
        ></textarea>
        <button
          type="submit"
          style={{
            backgroundColor: "#4B2D1A",
            color: "#fff",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

export default ContactUs;
