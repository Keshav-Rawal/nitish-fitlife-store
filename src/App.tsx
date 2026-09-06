import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { products } from "./data";

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = ["All", "Wellness", "Vitamins", "Food", "Strength"];

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
        {/* Banner Section */}
        <div
          style={{
            padding: "40px 20px",
            backgroundColor: "#27ae60",
            color: "white",
            borderRadius: "12px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          <h2>Premium Health & Fitness Essentials</h2>
          <p>Handpicked supplements for your daily routine.</p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: "flex",
            gap: "15px",
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
                padding: "10px 24px",
                borderRadius: "25px",
                border: `2px solid ${activeCategory === cat ? "#27ae60" : "#2c3e50"}`,
                backgroundColor:
                  activeCategory === cat ? "#27ae60" : "transparent",
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

        {/* Products Grid */}
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
