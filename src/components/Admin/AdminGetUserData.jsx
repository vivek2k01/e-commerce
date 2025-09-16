import React, { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";
import * as XLSX from "xlsx";

const AdminGetUserData = () => {
  const [userss, setUserss] = useState([]);
  const [activities, setActivities] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchUserId, setSearchUserId] = useState(""); // 🔹 User ID search state

  // ✅ Users fetch
  useEffect(() => {
    const usersRef = ref(db, "users");
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const userList = Object.keys(data).map((key, index) => ({
          id: index + 1, // UI ID
          userID: key, // 🔹 use `userID` (consistent)
          ...data[key],
        }));
        userList.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        setUserss(userList);
      } else {
        setUserss([]);
      }
    });
  }, []);

  // ✅ Activities fetch
  useEffect(() => {
    const actRef = ref(db, "userActivity");
    onValue(actRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const actList = Object.keys(data).map((key, index) => ({
          id: index + 1,
          ...data[key],
        }));
        actList.sort((a, b) => (b.clickedAt || 0) - (a.clickedAt || 0));
        setActivities(actList);
      } else {
        setActivities([]);
      }
    });
  }, []);

  // ✅ Date filter function
  const filterByDate = (list, key) => {
    return list.filter((item) => {
      const date = item[key];
      if (!date) return false;

      const itemDate = new Date(date).getTime();
      const from = fromDate ? new Date(fromDate).getTime() : null;
      const to = toDate ? new Date(toDate).getTime() : null;

      if (from && itemDate < from) return false;
      if (to && itemDate > to) return false;
      return true;
    });
  };

  // ✅ Apply filters (date + search)
  const filteredUsers = filterByDate(userss, "createdAt").filter((u) =>
    searchUserId ? u.userID?.toLowerCase() === searchUserId.toLowerCase() : true
  );

  const filteredActivities = filterByDate(activities, "clickedAt").filter((a) =>
    searchUserId ? a.userId?.toLowerCase() === searchUserId.toLowerCase() : true
  );

  // ✅ Excel Download (filtered data)
  const handleExcelDownload = () => {
    const wb = XLSX.utils.book_new();

    const userSheet = XLSX.utils.json_to_sheet(
      filteredUsers.map((u) => ({
        ID: u.id,
        UserID: u.userID,
        Name: u.name,
        Mobile: u.mobile,
        Email: u.email,
        City: u.city,
        Date: u.createdAt ? new Date(u.createdAt).toLocaleString() : "N/A",
      }))
    );
    XLSX.utils.book_append_sheet(wb, userSheet, "All Users");

    const activitySheet = XLSX.utils.json_to_sheet(
      filteredActivities.map((a) => ({
        ID: a.id,
        UserID: a.userId,
        User: a.userName,
        Email: a.userEmail,
        Product: a.productName,
        Link: a.productLink,
        ClickedAt: a.clickedAt ? new Date(a.clickedAt).toLocaleString() : "N/A",
      }))
    );
    XLSX.utils.book_append_sheet(wb, activitySheet, "User Activities");

    XLSX.writeFile(wb, "UserData.xlsx");
  };

  // ✅ CSV Download (filtered data)
  const handleCSVDownload = () => {
    let csvContent = "All Users\n";
    csvContent += XLSX.utils.sheet_to_csv(
      XLSX.utils.json_to_sheet(
        filteredUsers.map((u) => ({
          ID: u.id,
          UserID: u.userID,
          Name: u.name,
          Mobile: u.mobile,
          Email: u.email,
          City: u.city,
          Date: u.createdAt ? new Date(u.createdAt).toLocaleString() : "N/A",
        }))
      )
    );

    csvContent += "\n\nUser Activities\n";
    csvContent += XLSX.utils.sheet_to_csv(
      XLSX.utils.json_to_sheet(
        filteredActivities.map((a) => ({
          ID: a.id,
          UserID: a.userId,
          User: a.userName,
          Email: a.userEmail,
          Product: a.productName,
          Link: a.productLink,
          ClickedAt: a.clickedAt
            ? new Date(a.clickedAt).toLocaleString()
            : "N/A",
        }))
      )
    );

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "UserData_ActivityData.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        paddingLeft: "20%",
        paddingRight: "2%",
        paddingTop: "35px",
        paddingBottom: "15px",
      }}
    >
      {/* 🔹 Header with Download Buttons + Date Filter + Search */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          gap: "10px",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#333" }}>
          All User Data
        </h2>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <label>From:</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <label>To:</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />

          {/* 🔹 Search Input for User ID */}
          <input
            type="text"
            placeholder="Search by User ID"
            value={searchUserId}
            onChange={(e) => setSearchUserId(e.target.value)}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              minWidth: "180px",
            }}
          />

          <button onClick={handleExcelDownload} style={downloadBtnStyle}>
            <FaDownload /> Excel
          </button>
          <button
            onClick={handleCSVDownload}
            style={{ ...downloadBtnStyle, background: "#10B981" }}
          >
            <FaDownload /> CSV
          </button>
        </div>
      </div>

      {/* 🔹 Users Table */}
      <div>
        <table style={{ ...tableStyle }}>
          <thead>
            <tr style={{ background: "#4F46E5", color: "#fff" }}>
              <th style={{ ...thStyle, width: "40px" }}>SNo</th>
              <th style={{ ...thStyle, width: "80px" }}>User ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Contact</th>
              <th style={{ ...thStyle, minWidth: "200px" }}>Email</th>
              <th style={{ ...thStyle, minWidth: "120px" }}>City</th>
              <th style={thStyle}>Date</th>
            </tr>
          </thead>
        </table>

        <div style={{ maxHeight: "350px", overflowY: "auto" }}>
          <table style={{ ...tableStyle }}>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <tr key={index}>
                    <td style={{ ...tdStyle, width: "40px" }}>{user.id}</td>
                    <td style={{ ...tdStyle, width: "80px" }}>{user.userID}</td>
                    <td style={tdStyle}>{user.name}</td>
                    <td style={tdStyle}>{user.mobile}</td>
                    <td
                      style={{
                        ...tdStyle,
                        minWidth: "200px",
                        wordBreak: "break-word",
                      }}
                    >
                      {user.email}
                    </td>
                    <td
                      style={{
                        ...tdStyle,
                        minWidth: "120px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {user.city}
                    </td>
                    <td style={tdStyle}>
                      {user.createdAt
                        ? new Date(user.createdAt).toLocaleString()
                        : "N/A"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td style={tdStyle} colSpan="7">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 🔹 Activities Table */}
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "600",
          color: "#333",
          marginTop: "40px",
        }}
      >
        User Activities
      </h2>
      <div style={{ maxHeight: "400px", overflowY: "hidden" }}>
        <table style={{ ...tableStyle, width: "100%" }}>
          <thead style={{ background: "#4F46E5", color: "#fff" }}>
            <tr>
              <th style={{ ...thStyle, width: "40px" }}>SNo.</th>
              <th style={{ ...thStyle, width: "80px" }}>User ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Product</th>
              <th style={thStyle}>Link</th>
              <th style={thStyle}>Date</th>
            </tr>
          </thead>
        </table>

        <div style={{ maxHeight: "350px", overflowY: "auto" }}>
          <table style={{ ...tableStyle, width: "100%" }}>
            <tbody>
              {filteredActivities.length > 0 ? (
                filteredActivities.map((act, index) => (
                  <tr key={index}>
                    <td style={{ ...tdStyle, width: "40px" }}>{act.id}</td>
                    <td style={{ ...tdStyle, width: "80px" }}>{act.userId}</td>
                    <td style={tdStyle}>{act.userName}</td>
                    <td
                      style={{
                        ...tdStyle,
                        minWidth: "200px",
                        wordBreak: "break-word",
                      }}
                    >
                      {act.userEmail}
                    </td>
                    <td style={tdStyle}>{act.productName}</td>
                    <td style={tdStyle}>
                      <a
                        href={act.productLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    </td>
                    <td style={tdStyle}>
                      {act.clickedAt
                        ? new Date(act.clickedAt).toLocaleString()
                        : "N/A"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td style={tdStyle} colSpan="7">
                    No activity found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  tableLayout: "fixed",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
  marginTop: "15px",
};

const thStyle = {
  textAlign: "left",
  padding: "12px 16px",
  fontSize: "15px",
};

const tdStyle = {
  padding: "12px 16px",
  fontSize: "14px",
  borderBottom: "1px solid #eee",
};

const downloadBtnStyle = {
  background: "#4F46E5",
  color: "#fff",
  padding: "10px 18px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

export default AdminGetUserData;
