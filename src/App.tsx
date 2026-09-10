import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { products } from "./data";

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 16;

  const categories = [
    "All",
    "Health & Supplements",
    "Learning Toys",
    "Soft Toys",
    "Home Decor",
    "Sports Shoes",
    "T-Shirts",
  ];

  // Reset to page 1 whenever category or search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Scroll to top when page changes
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#eaeded",
        minHeight: "100vh",
        overflowX: "hidden",
        paddingBottom: "40px",
      }}
    >
      <Navbar setSearchQuery={setSearchQuery} />

      {/* Sidebar Overlay */}
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

      {/* Sidebar Drawer */}
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
                setIsSidebarOpen(false);
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

      {/* Sub-Navbar */}
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

        {/* Dynamic Products Grid */}
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
          {currentProducts.length === 0 ? (
            <div
              style={{
                backgroundColor: "#fff",
                padding: "40px",
                width: "100%",
                textAlign: "center",
                borderRadius: "8px",
                fontSize: "18px",
                color: "#0f1111",
              }}
            >
              No products found matching "<strong>{searchQuery}</strong>".
              Please try a different search term.
            </div>
          ) : (
            currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "40px",
              gap: "20px",
            }}
          >
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                border: "1px solid #d5d9d9",
                backgroundColor: currentPage === 1 ? "#f8f8f8" : "#fff",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                color: currentPage === 1 ? "#a6a6a6" : "#0f1111",
                fontWeight: "bold",
                boxShadow:
                  currentPage === 1 ? "none" : "0 2px 5px rgba(0,0,0,0.05)",
              }}
            >
              ← Previous
            </button>

            <span style={{ fontSize: "16px", color: "#0f1111" }}>
              Page <strong>{currentPage}</strong> of{" "}
              <strong>{totalPages}</strong>
            </span>

            <button
              onClick={() =>
                handlePageChange(Math.min(currentPage + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                border: "1px solid #d5d9d9",
                backgroundColor:
                  currentPage === totalPages ? "#f8f8f8" : "#fff",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                color: currentPage === totalPages ? "#a6a6a6" : "#0f1111",
                fontWeight: "bold",
                boxShadow:
                  currentPage === totalPages
                    ? "none"
                    : "0 2px 5px rgba(0,0,0,0.05)",
              }}
            >
              Next →
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
