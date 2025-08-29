import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

const collections = [
  "Poojathali",
  "ramnavami",
  "navdurgapuja",
  "Teej",
  "vasantpanchami",
  "diwali",
  "holi",
  "ganeshchaturthi",
  "Navratri",
  "Karwachauth",
  "RakshaBandhan",
  "krishnajanmashtami",
  "makarshakranti",
  "mahashivratri",
  "Gifts",
  "Homedecor",
  "Jewelry",
  "Hanuman Jayanti",
  "Tech Products",
  "Vastu",
  "chhathpuja",
];

const GlobalSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allData, setAllData] = useState([]);
  const [results, setResults] = useState([]);

  // 🔹 Load data from all collections
  useEffect(() => {
    const promises = collections.map((col) => {
      return new Promise((resolve) => {
        onValue(ref(db, col), (snapshot) => {
          const data = snapshot.val();
          if (data) {
            resolve(
              Object.values(data).map((item) => ({
                ...item,
                category: col, // 🔑 track from which collection data came
              }))
            );
          } else {
            resolve([]);
          }
        });
      });
    });

    Promise.all(promises).then((all) => {
      const merged = [].concat(...all);
      setAllData(merged);
    });
  }, []);

  // 🔹 Search Handler
  const handleSearch = () => {
    if (!searchTerm) {
      setResults([]);
      return;
    }

    const filtered = allData.filter(
      (item) =>
        item.heading?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.subHeading?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Search Bar */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <TextField
          label="Search All"
          variant="outlined"
          size="medium"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ background: "#fff", borderRadius: "4px", width: " 400px" }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          style={{ background: "#3A2517", color: "#fff" }}
        >
          <SearchIcon /> Search
        </Button>
      </div>

      {/* Results */}
      <div style={{ marginTop: "20px" }}>
        {results.length > 0 ? (
          results.map((item, idx) => (
            <div
              key={idx}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            >
              <h3>{item.heading}</h3>
              <p>{item.subHeading}</p>
              <small style={{ color: "gray" }}>From: {item.category}</small>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "gray" }}>No results found</p>
        )}
      </div>
    </div>
  );
};

export default GlobalSearch;
