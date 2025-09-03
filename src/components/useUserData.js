// src/hooks/useUserData.js
import { useState } from "react";
import { db } from "../firebase";
import { ref, push, get, child } from "firebase/database";

export const useUserData = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    userID: "",
  });

  // Generate 4-digit UserID
  const generateUserId = async () => {
    try {
      const usersRef = ref(db, "users");
      const snapshot = await get(usersRef);

      let newId = 1;
      if (snapshot.exists()) {
        const users = snapshot.val();
        const allIds = Object.values(users)
          .map((u) => parseInt(u.userID || "0", 10))
          .filter((num) => !isNaN(num));
        if (allIds.length > 0) {
          newId = Math.max(...allIds) + 1;
        }
      }

      // Always return 4 digits (e.g., 0001, 0023, 1234)
      return String(newId).padStart(4, "0");
    } catch (err) {
      console.error("Error generating userID:", err);
      return "0001";
    }
  };

  // User click handle
  const handleProductAnchorClick = (e, link, productId) => {
    const userDetails = localStorage.getItem("userDetails");

    if (!userDetails) {
      e.preventDefault();
      setSelectedLink(link);
      setFormData((prev) => ({
        ...prev,
        createdAt: new Date().getTime(),
      }));
      setShowModal(true);
    } else {
      const parsedUser = JSON.parse(userDetails);
      const activityRef = ref(db, "userActivity");

      push(activityRef, {
        userEmail: parsedUser.email,
        productId: productId || null,
        productLink: link,
        userName: parsedUser.name,
        clickedAt: new Date().getTime(),
        userId: parsedUser.userID || null,
      });
    }
  };

  // Modal submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userID = await generateUserId(); // Generate new 4-digit ID

      const usersRef = ref(db, "users");
      const payload = {
        ...formData,
        userID,
        createdAt: new Date().getTime(),
      };

      // save user info
      await push(usersRef, payload);
      localStorage.setItem("userDetails", JSON.stringify(payload));

      // save first click in activity
      if (selectedLink) {
        const activityRef = ref(db, "userActivity");
        await push(activityRef, {
          userId: payload.userID, // ✅ Add userID
          userName: payload.name,
          userEmail: payload.email,
          productLink: selectedLink,
          clickedAt: new Date().getTime(),
        });

        window.open(selectedLink, "_blank", "noopener,noreferrer");
      }

      setShowModal(false);
      setFormData({ name: "", mobile: "", email: "", city: "", userID: "" });
      setSelectedLink("");
    } catch (err) {
      console.error("Error saving user data:", err);
      alert("Failed to save details. Please try again.");
    }
  };

  return {
    showModal,
    setShowModal,
    formData,
    setFormData,
    handleProductAnchorClick,
    handleSubmit,
  };
};
