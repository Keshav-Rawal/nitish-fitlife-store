import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 40px",
        backgroundColor: "#111",
        color: "#fff",
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        Nitish Bhati FitLife Store
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <span style={{ cursor: "pointer" }}>Health & Supplements</span>
        <span style={{ cursor: "pointer" }}>Fashion & Decor</span>
      </div>
    </nav>
  );
};

export default Navbar;
