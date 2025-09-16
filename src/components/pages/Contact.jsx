import React, { useState } from "react";
import { db } from "../../firebase";
import { ref, push, set, serverTimestamp } from "firebase/database"; // ✅ Realtime DB

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    gender: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit to Realtime Database
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ contacts ke andar ek new unique child create hoga
      const contactRef = push(ref(db, "contacts"));
      await set(contactRef, {
        ...formData,
        createdAt: serverTimestamp(),
      });

      alert("Message Sent Successfully ✅");
      setFormData({
        name: "",
        email: "",
        city: "",
        phone: "",
        gender: "",
        message: "",
      });
    } catch (error) {
      console.error("Error saving contact: ", error);
      alert("❌ Failed to send message");
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "45px auto",
        padding: "20px",
        fontFamily: "Georgia, serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="number"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        {/* Gender Section */}
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
              required
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === "other"}
              onChange={handleChange}
            />{" "}
            Other
          </label>
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          style={{ ...inputStyle, resize: "none" }}
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: "#4B2D1A",
            color: "#fff",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          {loading ? "Sending..." : "Send Message"}
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

export default Contact;
