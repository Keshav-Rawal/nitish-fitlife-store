import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { products } from "./data";

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Sidebar ko open/close karne ka state
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const categories = [
    "All",
    "Health & Supplements",
    "Learning Toys",
    "Soft Toys",
    "Home Decor",
    "Sports Shoes",
    "T-Shirts",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#eaeded",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      {/* 1. Sidebar ka Kala Overlay (Background) */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 999,
            cursor: "pointer",
          }}
        ></div>
      )}

      {/* 2. Asli Sidebar (Slide hokar aayega) */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: isSidebarOpen ? "0" : "-300px",
          width: "280px",
          height: "100vh",
          backgroundColor: "#fff",
          zIndex: 1000,
          transition: "left 0.3s ease-in-out",
          boxShadow: "2px 0 5px rgba(0,0,0,0.5)",
          overflowY: "auto",
        }}
      >
        {/* Sidebar Header */}
        <div
          style={{
            backgroundColor: "#232f3e",
            color: "#fff",
            padding: "20px",
            fontSize: "18px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Hello, Guest</span>
          <span
            style={{ cursor: "pointer", fontSize: "24px" }}
            onClick={() => setIsSidebarOpen(false)}
          >
            ✕
          </span>
        </div>

        {/* Sidebar Categories List */}
        <div style={{ padding: "20px" }}>
          <h3
            style={{ margin: "0 0 15px 0", color: "#0f1111", fontSize: "18px" }}
          >
            Shop By Category
          </h3>
          {categories.map((cat) => (
            <div
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setIsSidebarOpen(false); // Click karne ke baad menu band ho jayega
              }}
              style={{
                padding: "12px 0",
                borderBottom: "1px solid #eee",
                cursor: "pointer",
                color: activeCategory === cat ? "#007185" : "#0f1111",
                fontWeight: activeCategory === cat ? "bold" : "normal",
                fontSize: "15px",
              }}
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* Sub-Navbar (Category Menu) */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          padding: "8px 20px",
          backgroundColor: "#232f3e",
          color: "#fff",
          fontSize: "14px",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        {/* "All Categories" Button (Is par click karne se Sidebar khulega) */}
        <div
          onClick={() => setIsSidebarOpen(true)}
          style={{
            fontWeight: "bold",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <span style={{ fontSize: "18px", lineHeight: "14px" }}>☰</span> All
        </div>

        {/* Top bar wali baaki categories */}
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              cursor: "pointer",
              borderBottom:
                activeCategory === cat
                  ? "2px solid #fff"
                  : "2px solid transparent",
              paddingBottom: "2px",
            }}
          >
            {cat}
          </div>
        ))}
      </div>

      <main
        style={{
          width: "100%",
          maxWidth: "1500px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {/* Amazon-style banner */}
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "#007185",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "-50px",
            zIndex: 0,
            position: "relative",
          }}
        >
          <h1 style={{ margin: "0 0 10px 0" }}>
            Welcome to Our Premium Selection
          </h1>
          <p style={{ margin: 0, fontSize: "18px" }}>
            Top deals on health, toys, and fashion.
          </p>
        </div>

        {/* Products Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
