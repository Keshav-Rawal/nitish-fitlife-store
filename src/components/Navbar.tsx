import React from "react";

interface NavbarProps {
  setSearchQuery: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setSearchQuery }) => {
  return (
    <header>
      {/* Top Main Navbar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          backgroundColor: "#131921",
          color: "#fff",
        }}
      >
        {/* Logo Area */}
        <div
          style={{ fontSize: "22px", fontWeight: "bold", cursor: "pointer" }}
        >
          <span style={{ color: "#fff" }}>Mega</span>
          <span style={{ color: "#f3a847" }}> Store</span>
        </div>

        {/* Search Bar */}
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            maxWidth: "600px",
            margin: "0 20px",
          }}
        >
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products, brands, or categories..."
            style={{
              width: "100%",
              padding: "10px 15px",
              borderRadius: "4px 0 0 4px",
              border: "none",
              outline: "none",
            }}
          />
          <button
            style={{
              backgroundColor: "#febd69",
              border: "none",
              padding: "0 20px",
              borderRadius: "0 4px 4px 0",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            🔍
          </button>
        </div>

        {/* Right Links */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: "12px", fontWeight: "normal" }}>
              Hello, Guest
            </span>
            <span>Sign In</span>
          </div>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: "12px", fontWeight: "normal" }}>
              Returns
            </span>
            <span>& Orders</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
