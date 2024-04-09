import React from "react";
import Product from "./Product";
export default function AllProducts({ allProducts, title }) {
  return (
    <div>
      <div className="all-section">
        <p className="title">{title}</p>
        <div className="products-container">
          {allProducts?.map((product, i) => (
            <div key={i}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
