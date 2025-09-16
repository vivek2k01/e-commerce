import React, { useRef, useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { db } from "../../firebase";
import { ref, push, onValue, remove } from "firebase/database";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dzvvvglon/image/upload";
const UPLOAD_PRESET = "e-commerce";

const Admincoverphoto = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);

  // New states for delete confirmation modal
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(null);

  useEffect(() => {
    const imgRef = ref(db, "coverPhotos");
    onValue(imgRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const imgArray = Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
        }));
        setImages(imgArray.sort((a, b) => b.createdAt - a.createdAt));
      } else {
        setImages([]);
      }
    });
  }, []);

  const handleSubmit = async () => {
    if (!file || !link) {
      alert("Please upload an image and enter a link!");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);

      const response = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.secure_url) {
        await push(ref(db, "coverPhotos"), {
          url: data.secure_url,
          link,
          createdAt: Date.now(),
        });
        setLoading(false);
        setOpen(false);
        setFile(null);
        setLink("");
      } else {
        setLoading(false);
        alert("Upload failed!");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setLoading(false);
      alert("Something went wrong!");
    }
  };

  // Function to actually delete image
  const handleDelete = async () => {
    if (!selectedImageId) return;
    try {
      await remove(ref(db, `coverPhotos/${selectedImageId}`));
      setDeleteOpen(false);
      setSelectedImageId(null);
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  // Open confirmation modal
  const confirmDelete = (id) => {
    setSelectedImageId(id);
    setDeleteOpen(true);
  };

  return (
    <div
      style={{
        paddingLeft: "20%",
        paddingRight: "2%",
        paddingTop: "35px",
        paddingBottom: "15px",
      }}
    >
      <Typography>
        <h1 style={{ fontFamily: "Georgia, serif" }}>Cover Photo</h1>
      </Typography>

      {/* Add Button */}
      <div
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "end",
        }}
      >
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
            justifyContent: "center",
          }}
          onClick={() => setOpen(true)}
        >
          <AddIcon />
          <Typography>ADD</Typography>
        </Button>
      </div>

      {/* Show Uploaded Images */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
          marginTop: "20px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {images.map((img) => (
          <div
            key={img.id}
            style={{ display: "flex", alignItems: "center", gap: "30px" }}
          >
            <img
              src={img.url}
              alt="cover"
              style={{
                width: "400px",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
              }}
            />
            <Button
              variant="outlined"
              color="error"
              onClick={() => confirmDelete(img.id)}
              startIcon={<DeleteIcon />}
              sx={{
                borderColor: "red",
                color: "red",
                height: "60px",
                width: "120px",
              }}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>

      {/* Modal for Upload */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "10px",
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6">Add New Cover Photo</Typography>
          <TextField
            label="Enter Link"
            variant="outlined"
            fullWidth
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button variant="contained" onClick={handleSubmit} disabled={loading}>
            {loading ? "Uploading..." : "Submit"}
          </Button>
        </Box>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal open={deleteOpen} onClose={() => setDeleteOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "10px",
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Are you sure you want to delete?</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Yes, Delete
            </Button>
            <Button variant="outlined" onClick={() => setDeleteOpen(false)}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Admincoverphoto;
