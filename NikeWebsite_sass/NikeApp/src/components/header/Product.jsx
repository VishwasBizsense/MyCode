import React from "react";
import "../../Styles/product.css";

export default function Product({ product, discount }) {
  return (
    <div key={product.id} className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        {/* <p className="product-description">{product.description}</p> */}
        {discount ? ( // Check if sale prop is provided
          <p className="product-price">
            <b>Get it for: </b>${product.price - product.price / 10}
            <span> ${product.price} </span>
          </p>
        ) : (
          <p className="product-price">
            <b>Get it for: </b>${product.price}
          </p>
        )}
        <p className="product-rating">Rating: {product.rating.rate}</p>
      </div>
    </div>
  );
}
