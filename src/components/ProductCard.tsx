import React from "react";
import { Product } from "../data";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "300px",
        minWidth: "260px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid #eaeaea",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ height: "220px", width: "100%", marginBottom: "15px" }}>
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      <p
        style={{
          margin: 0,
          fontSize: "13px",
          color: "#7f8c8d",
          fontWeight: "bold",
        }}
      >
        {product.brand}
      </p>
      <h3
        style={{
          margin: "8px 0",
          fontSize: "16px",
          color: "#2c3e50",
          flexGrow: 1,
        }}
      >
        {product.name}
      </h3>
      <span
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#27ae60",
          marginBottom: "15px",
        }}
      >
        ₹{product.price}
      </span>

      <a
        href={product.affiliateLink}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "block",
          padding: "12px 0",
          backgroundColor: "#e67e22",
          color: "#fff",
          textAlign: "center",
          textDecoration: "none",
          borderRadius: "6px",
          fontWeight: "bold",
        }}
      >
        Buy on Amazon
      </a>
    </div>
  );
};

export default ProductCard;
