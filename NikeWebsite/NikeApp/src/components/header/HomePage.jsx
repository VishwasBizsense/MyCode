import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, toggleIsInCart, toggleIsInFavorite } from "../../features/fetchProducts";
import Product from "./Product";
import "../../Styles/homepage.css";
import MVPProducts from "./MVPProducts";
import SaleProducts from "./SaleProducts";
import AllProducts from "./AllProducts";
import Banner from './Banner';
import Error from './Error';
import load from '../../assets/1486.gif';

export default function HomePage() {
  const dispatch = useDispatch();
  const { loading, allProducts, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleToggleIsInCart = (id) => {
    dispatch(toggleIsInCart({ id }));
  };

  const handleToggleIsInFavorite = (id) => {
    dispatch(toggleIsInFavorite({ id }));
  };

  if (loading) {
    return <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img
        src={load}
        alt="Loading..."
        style={{ width: "50px", height: "50px" }} // Adjust width and height as needed
      />
    </div>;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <div>
      <Banner />
      {allProducts && allProducts.length > 0 && (
        <>
          <MVPProducts allProducts={allProducts} title="Our MVP Products" />
          <SaleProducts
            allProducts={allProducts}
            discount={10}
            title="Flat 10% Off"
          />
        </>
      )}
      <AllProducts allProducts={allProducts} title="All Products" />
      <div className="products-container">
        {allProducts.map((product, i) => (
          <div key={i}>
            <Product
              product={product}
              onToggleIsInCart={handleToggleIsInCart}
              onToggleIsInFavorite={handleToggleIsInFavorite}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
