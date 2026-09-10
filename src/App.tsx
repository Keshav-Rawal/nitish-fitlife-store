import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { products } from "./data";

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

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
      }}
    >
      <Navbar />

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
        <div style={{ fontWeight: "bold", cursor: "pointer" }}>
          ☰ All Categories
        </div>
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
        {/* Amazon-style subtle banner */}
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
