import React from "react";
import "../../Styles/mvpProducts.scss";

export default function MVPProducts({ allProducts, title }) {
  const mvpProducts = allProducts.filter(
    (product) => product.rating.rate > 4.5
  );

  return (
    <div className="mvp-section">
      <p className="title">{title}</p>
      <div className="products-container">
        {mvpProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-details">
              <h2 className="product-title">{product.title}</h2>
              {/* <p className="product-description">{product.description}</p> */}
              <p className="product-price">
                <b>Get for: </b>${product.price}
              </p>
              <p className="product-rating">Rating: {product.rating.rate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
