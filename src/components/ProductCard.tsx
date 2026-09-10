import React from "react";
import { Product } from "../data";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "280px",
        backgroundColor: "#fff",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        zIndex: 1,
        position: "relative",
      }}
    >
      <div
        style={{
          height: "200px",
          width: "100%",
          marginBottom: "15px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
        />
      </div>

      <h3
        style={{
          margin: "0 0 5px 0",
          fontSize: "16px",
          color: "#0f1111",
          flexGrow: 1,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {product.name}
      </h3>

      {/* Dummy Stars for UI Trust */}
      <div style={{ color: "#ffa41c", fontSize: "14px", marginBottom: "8px" }}>
        ★★★★☆ <span style={{ color: "#007185", fontSize: "12px" }}>1,432</span>
      </div>

      <div style={{ fontSize: "24px", color: "#0f1111", marginBottom: "15px" }}>
        <span style={{ fontSize: "14px", verticalAlign: "top" }}>₹</span>
        {product.price}
      </div>

      <a
        href={product.affiliateLink}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "block",
          width: "100%",
          padding: "10px 0",
          backgroundColor: "#ffd814",
          color: "#0f1111",
          textAlign: "center",
          textDecoration: "none",
          borderRadius: "100px",
          fontWeight: "bold",
          fontSize: "14px",
          border: "1px solid #fcd200",
        }}
      >
        Buy on Amazon
      </a>
    </div>
  );
};

export default ProductCard;
