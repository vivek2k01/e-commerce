import React from "react";

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "8px 0",
  border: "1px solid #ccc",
  borderRadius: "6px",
};

const UserDetailsModal = ({
  showModal,
  setShowModal,
  formData,
  setFormData,
  handleSubmit,
}) => {
  if (!showModal) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          width: "90%",
          maxWidth: "400px",
          textAlign: "center",
          position: "relative", // 🔹 cross button position ke liye
        }}
      >
        {/* Close Button (X) */}
        <button
          onClick={() => setShowModal(false)}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            border: "none",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#333",
          }}
        >
          ✕
        </button>

        <h2 style={{ marginBottom: "20px", color: "#6B3A1D" }}>
          Enter Your Details
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={inputStyle}
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            required
            value={formData.mobile}
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="City"
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            style={inputStyle}
          />
          <button
            type="submit"
            style={{
              background: "#6B3A1D",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
              marginTop: "15px",
              cursor: "pointer",
              fontWeight: "bold",
              width: "50%",
              fontSize: "16px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsModal;
