import { db, storage } from "../../../firebase";
import { ref, set, remove, onValue } from "firebase/database";

import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";

const Categories = [
  {
    value: "New Arrivals",
    label: "New Arrivals",
  },
  {
    value: "Our Choice",
    label: "Our Choice",
  },
  {
    value: "Best Deal",
    label: "Best Deal",
  },
  {
    value: "Value for Money",
    label: "Value for Money",
  },
  {
    value: "",
    label: "None",
  },
];

const Adminhanumanjayanti = () => {
  const [showForm, setShowForm] = useState(false);
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    image: "",
    heading: "",
    subHeading: "",
    text: "",
    link: "",
    Categories: "",
  });
  const [counter, setCounter] = useState(1); // ID counter
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered items based on search
  const filteredItems = items.filter(
    (item) =>
      item.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subHeading.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Load data from Firebase on mount
  useEffect(() => {
    const itemsRef = ref(db, "Hanuman Jayanti");
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const arr = Object.values(data);
        setItems(arr);

        // Set counter to max existing ID + 1
        const maxId = Math.max(...arr.map((item) => Number(item.id)));
        setCounter(maxId + 1);
      } else {
        setItems([]);
        setCounter(1);
      }
    });
  }, []);

  // Handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload (local preview)
  // Handle image upload (to Cloudinary)
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // ✅ Cloudinary upload
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "e-commerce"); // apna preset
    formData.append("cloud_name", "dzvvvglon"); // apna cloud name

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/dzvvvglon/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      console.log("Uploaded to Cloudinary:", data.secure_url);

      // ✅ Cloudinary URL set in formData
      setFormData((prev) => ({ ...prev, image: data.secure_url }));
    } catch (err) {
      console.error("Cloudinary upload error:", err);
    }
  };

  // Save or update to Firebase
  const handleSave = () => {
    if (!formData.id) {
      alert("Please enter ID (unique)");
      return;
    }

    set(ref(db, `Hanuman Jayanti/${formData.id}`), formData)
      .then(() => {
        console.log("Data saved in Firebase with Cloudinary image");
        setFormData({
          id: "",
          image: "",
          heading: "",
          subHeading: "",
          text: "",
          link: "",
          Categories: "",
        });
        setShowForm(false);
        setEditIndex(null);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  // Delete from Firebase
  const handleDelete = (id) => {
    remove(ref(db, `Hanuman Jayanti/${id}`))
      .then(() => console.log("Deleted"))
      .catch((error) => console.error("Error deleting:", error));
  };

  // Edit existing item
  const handleEdit = (index) => {
    setFormData(items[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  // Add button click
  const handleAddClick = () => {
    const newId = counter;
    setFormData({
      id: newId,
      image: "",
      heading: "",
      subHeading: "",
      link: "",
      Categories: "",
    });
    setCounter((prev) => prev + 1);
    setEditIndex(null);
    setShowForm(true);
  };

  return (
    <div
      style={{
        paddingLeft: "18%",
        paddingRight: "25px",
        paddingTop: "15px",
        paddingBottom: "15px",
      }}
    >
      <Typography>
        <h1 style={{ fontFamily: "Georgia, serif" }}>Hanuman Jayanti</h1>
      </Typography>

      {/* Add Button */}
      {/* Search + Add Button Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        {/* Search Box */}
        <div style={{ display: "flex", gap: "10px", position: "relative" }}>
          <TextField
            label="Search"
            variant="outlined"
            size="medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: window.innerWidth <= 700 ? "100%" : "400px" }}
          />
          <div style={{ position: "absolute", right: 10, top: 17 }}>
            <SearchIcon />
          </div>
        </div>

        {/* Add Button */}
        <Button
          variant="contained"
          style={{
            background: "#3A2517",
            color: "#fff",
            width: "151px",
            height: "50px",
            display: "flex",
            gap: "5px",
            alignItems: "center",
          }}
          onClick={handleAddClick}
        >
          <AddIcon />
          <Typography>ADD</Typography>
        </Button>
      </div>

      {/* Form */}
      {showForm && (
        <Card
          style={{ marginTop: "20px", padding: "15px", background: "#f5f5f5" }}
        >
          <CardContent
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <TextField
              label="ID"
              name="id"
              value={formData.id}
              disabled
              fullWidth
            />
            <TextField
              label="Heading"
              name="heading"
              value={formData.heading}
              onChange={handleChange}
            />
            <TextField
              label="Sub Heading"
              name="subHeading"
              value={formData.subHeading}
              onChange={handleChange}
            />
            <TextField
              id="outlined-select-currency"
              select
              name="Categories"
              label="Select"
              onChange={handleChange}
              value={formData.Categories}
              // defaultValue=""
              helperText="This Field is Not Required"
            >
              {Categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Description"
              name="text"
              value={formData.text}
              onChange={handleChange}
            />
            <TextField
              label="Link"
              name="link"
              value={formData.link}
              onChange={handleChange}
            />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {formData.image && (
              <img
                src={formData.image}
                alt="Preview"
                style={{ height: "400px", width: "350px", marginTop: "5px" }}
              />
            )}
            <Button variant="contained" onClick={handleSave}>
              {editIndex !== null ? "Update" : "Save"}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Items List */}
      <div style={{ paddingTop: "15px" }}>
        {filteredItems.map((item, index) => (
          <Box
            key={item.id}
            sx={{
              background: "#3A2517",
              height: "100px",
              width: "100%",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "100%",
                alignItems: "center",
                gap: "20px",
                paddingLeft: "30px",
              }}
            >
              {item.image && (
                <img src={item.image} alt="" style={{ height: "80%" }} />
              )}
              <div>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "20px",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {item.heading}
                </Typography>
                <Typography sx={{ color: "#ccc", fontSize: "14px" }}>
                  {item.subHeading}
                </Typography>
              </div>
            </div>
            <div style={{ display: "flex", gap: "20px", paddingRight: "30px" }}>
              <Button
                variant="contained"
                style={{
                  background: "green",
                  color: "#fff",
                  width: "100px",
                  height: "40px",
                }}
                onClick={() => handleEdit(index)}
              >
                <EditIcon />
              </Button>
              <Button
                variant="contained"
                style={{
                  background: "red",
                  color: "#fff",
                  width: "100px",
                  height: "40px",
                }}
                onClick={() => handleDelete(item.id)}
              >
                <DeleteIcon />
              </Button>
            </div>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Adminhanumanjayanti;
