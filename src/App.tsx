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
    <div style={{ fontFamily: "sans-serif", width: "100%" }}>
      <Navbar />

      <main
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            padding: "40px 20px",
            backgroundColor: "#2c3e50",
            color: "white",
            borderRadius: "12px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          <h2>Nitish Bhati Premium Mega Store</h2>
          <p>
            Explore our wide range of Health Supplements, Fashion, Toys & Home
            Decor.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "30px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: "25px",
                border: `2px solid ${activeCategory === cat ? "#2980b9" : "#2c3e50"}`,
                backgroundColor:
                  activeCategory === cat ? "#2980b9" : "transparent",
                color: activeCategory === cat ? "white" : "#2c3e50",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "all 0.3s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "25px",
            justifyContent: "center",
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
