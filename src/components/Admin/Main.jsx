import Typography from "@mui/material/Typography";
import React from "react";

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <Typography>
        <h1 style={{ fontFamily: "Georgia, serif" }}>
          Welcome to the admin panel
        </h1>
        {/* <div style={{ height: "250px", width: "100%" }}> </div> */}
      </Typography>
    </div>
  );
};

export default Main;
