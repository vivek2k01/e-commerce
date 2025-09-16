import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import LogoutIcon from "@mui/icons-material/Logout";
import CategoryIcon from "@mui/icons-material/Category";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import FestivalIcon from "@mui/icons-material/Festival";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import ImageIcon from "@mui/icons-material/Image";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const drawerWidth = 280;

export default function Sidebar() {
  const navigate = useNavigate();

  const [festivalOpen, setFestivalOpen] = React.useState(false);
  const [categoryOpen, setCategoryOpen] = React.useState(false);
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/adminlogin"); // redirect back to login
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  // Cancel → close modal
  const handleClose = () => {
    setOpen(false);
  };

  // Confirm logout
  const confirmLogout = () => {
    setOpen(false);
    handleLogout(); // call your logout function
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          background: "#4B2D1A",
          color: "#fff",
          marginTop: "157.5px",
          height: `calc(100vh - 164px)`, // <-- Important
          overflowY: "auto",
        },
      }}
    >
      <Box sx={{ overflow: "auto", paddingTop: "10px" }}>
        <List>
          {/* Hindu Festival's */}

          <ListItem disablePadding>
            <ListItemButton onClick={() => setFestivalOpen(!festivalOpen)}>
              <ListItemIcon>
                <FestivalIcon style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Hindu Festival's" />
              {festivalOpen ? (
                <KeyboardArrowUpIcon style={{ color: "#fff" }} />
              ) : (
                <KeyboardArrowDownIcon style={{ color: "#fff" }} />
              )}
            </ListItemButton>
          </ListItem>
          <Collapse in={festivalOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {[
                "Maha Shivratri",
                "Ganesh Chaturthi",
                "Nav Durga Puja",
                "Diwali",
                "Holi",
                "Ram Navami",
                "Krishna Janamashtami",
                "Rakshabandhan",
                "Teej",
                "Karwa Chauth",
                "Chhath Puja",
                "Hanuman Jayanti",
                "Vasant Panchami",
                "Maker Sankranti / Pongal /Gudi Padwa",
                "Home Decore",
              ].map((item) => {
                // URL-friendly slug banane ke liye
                const slug = item
                  .toLowerCase()
                  .replace(/\s+/g, "-") // space ko - se replace
                  .replace(/[^\w-]+/g, ""); // special characters hatao

                return (
                  <ListItemButton
                    key={item}
                    sx={{ pl: 2, marginLeft: 8, marginRight: 2 }}
                    onClick={() => navigate(`/admin-${slug}`)}
                  >
                    <ListItemText primary={item} />
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>

          {/* Featured Products */}
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigate(`/admin-Featured-Products`)}
            >
              <ListItemIcon>
                <ProductionQuantityLimitsIcon style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Featured Products" />
            </ListItemButton>
          </ListItem>

          {/* Categories */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => setCategoryOpen(!categoryOpen)}>
              <ListItemIcon>
                <CategoryIcon style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Categories" />
              {categoryOpen ? (
                <KeyboardArrowUpIcon style={{ color: "#fff" }} />
              ) : (
                <KeyboardArrowDownIcon style={{ color: "#fff" }} />
              )}
            </ListItemButton>
          </ListItem>
          <Collapse in={categoryOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {[
                "Murti/Idol",
                "Pooja Thali",
                "Dhoop",
                "Agarbatti",
                "Essentail Pooja Items",
                "Mandir For Home",
                "Spritual Books",
                "Praye Beads & Malas",
                "Cloth",
                "Home Decore",
                "Religious Jewellery",
                "Vastu Items",
                "Gifts & Festival Items",
                "Tech Products",
                "Upvash Food",
              ].map((item) => {
                // URL-friendly slug banane ke liye
                const slug = item
                  .toLowerCase()
                  .replace(/\s+/g, "-") // space ko - se replace
                  .replace(/[^\w-]+/g, ""); // special characters hatao

                return (
                  <ListItemButton
                    key={item}
                    sx={{ pl: 2, marginLeft: 8, marginRight: 2 }}
                    onClick={() => navigate(`/admin-${slug}`)}
                  >
                    <ListItemText primary={item} />
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>

          {/* Cover Photo */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate(`/admin-cover-photo`)}>
              <ListItemIcon>
                <ImageIcon style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Cover Photo" />
            </ListItemButton>
          </ListItem>

          {/* user data */}

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate(`/admin-GetUserData`)}>
              <ListItemIcon>
                <FolderSharedIcon style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="User Data" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate(`/admin-Get-Inquiry`)}>
              <ListItemIcon>
                <MailOutlineIcon style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Inquiry" />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider style={{ background: "#fff" }} />

        {/* Logout */}
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleClickOpen}>
              <ListItemIcon>
                <LogoutIcon style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{"Confirm Logout"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to logout?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              color="primary"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              Cancel <ClearRoundedIcon />
            </Button>
            <Button
              onClick={confirmLogout}
              color="error"
              autoFocus
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              OUT <LogoutRoundedIcon />
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Drawer>
  );
}
