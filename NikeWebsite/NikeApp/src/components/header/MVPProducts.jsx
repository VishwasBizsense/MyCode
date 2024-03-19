import React from "react";
import "../../Styles/mvpProducts.css";
import Product from './Product'

export default function MVPProducts({ allProducts, title }) {
  const mvpProducts = allProducts?.filter(
    (product) => product.rating.rate > 4.5
  );

  return (
    <div className="mvp-section">
      <p className="title">{title}</p>
      <div className="products-container">
        {mvpProducts.map((product, i) => (
          <div key={i}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
} 
