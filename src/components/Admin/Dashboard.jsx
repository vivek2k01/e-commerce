import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Dashboard = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        minHeight: "80vh",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          maxWidth: "30%",
        }}
      >
        <Sidebar />
      </div>

      {/* Main */}
      <div
        style={{
          flex: "1", // remaining 75%
          maxWidth: "70%",
          background: "#fff",
        }}
      >
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
