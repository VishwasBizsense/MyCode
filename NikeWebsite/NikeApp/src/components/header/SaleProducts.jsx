import React from "react";
import "../../Styles/SaleProducts.css";
import Product from "./Product";

export default function SaleProducts({ allProducts, discount, title }) {
  const saleProducts = allProducts.filter((product) => product.price > 100);
  return (
    <div className="sale-section">
      <p className="title">{title}</p>
      <div className="products-container">
        {saleProducts.map((product, i) => (
          <div key={i}>
            <Product product={product} discount={discount} />
          </div>
        ))}
      </div>
    </div>
  );
}
