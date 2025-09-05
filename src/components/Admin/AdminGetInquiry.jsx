import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import { FaDownload } from "react-icons/fa";

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const contactsRef = ref(db, "contacts");

    // ✅ Firebase Realtime Database se data fetch
    onValue(contactsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Object ko array me convert karna
        const contactList = Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
        }));
        setContacts(contactList);
      } else {
        setContacts([]);
      }
    });
  }, []);

  // ✅ CSV Export Function
  const downloadCSV = () => {
    if (contacts.length === 0) {
      alert("No data to download");
      return;
    }

    // CSV Header
    const headers = [
      "Name",
      "Email",
      "City",
      "Phone",
      "Gender",
      "Message",
      "Date",
    ];
    const rows = contacts.map((c) => [
      c.name,
      c.email,
      c.city,
      c.phone,
      c.gender,
      c.message,
      c.createdAt ? new Date(c.createdAt).toLocaleString() : "N/A",
    ]);

    // Combine headers + rows
    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((r) => r.map(escapeCSV).join(","))].join(
        "\n"
      );

    // Download
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "contacts.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ Escape CSV special characters
  const escapeCSV = (value) => {
    if (
      typeof value === "string" &&
      (value.includes(",") || value.includes('"'))
    ) {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
  };

  return (
    <div
      style={{
        maxWidth: "90%",
        margin: "40px auto",
        paddingLeft: "20%",
        paddingRight: "2%",
        paddingTop: "15px",
        paddingBottom: "15px",
        fontFamily: "Georgia, serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        📩 All Contact Messages
      </h2>

      <div style={{ textAlign: "right", marginBottom: "15px" }}>
        <button
          onClick={downloadCSV}
          style={{
            backgroundColor: "#10B981",
            color: "#fff",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
            fontSize: "14px",
            borderRadius: "5px",
            gap: "8px",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <FaDownload /> Download CSV
        </button>
      </div>

      {contacts.length === 0 ? (
        <p style={{ textAlign: "center" }}>No messages found.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr style={{ background: "#4B2D1A", color: "white" }}>
              <th style={thTd}>Name</th>
              <th style={thTd}>Email</th>
              <th style={thTd}>City</th>
              <th style={thTd}>Phone</th>
              <th style={thTd}>Gender</th>
              <th style={thTd}>Message</th>
              <th style={thTd}>Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td style={thTd}>{contact.name}</td>
                <td style={thTd}>{contact.email}</td>
                <td style={thTd}>{contact.city}</td>
                <td style={thTd}>{contact.phone}</td>
                <td style={thTd}>{contact.gender}</td>
                <td style={thTd}>{contact.message}</td>
                <td style={thTd}>
                  {contact.createdAt
                    ? new Date(contact.createdAt).toLocaleString()
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const thTd = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "center",
};

export default AdminContacts;
