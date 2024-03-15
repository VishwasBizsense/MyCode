import React from "react";
import "../../Styles/SaleProducts.css";
import Product from "./Product";

export default function SaleProducts({ allProducts, discount, title }) {
  const saleProducts = allProducts.filter((product) => product.price > 100);
  console.log("products in sale", saleProducts);
  return (
    <div className="sale-section">
      <p className="title">{title}</p>
      <div className="products-container">
        {saleProducts.map((product, i) => (
          <div key={i}>
            console.log("discount in sales", discount)
            <Product product={saleProducts} discount={discount} />
          </div>
        ))}
      </div>
    </div>
  );
}
