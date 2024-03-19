import React from 'react';
import "../../Styles/product.css";
import AddToCart from './AddToCart';
import AddToFavorite from './AddToFavorite';
import { Link } from 'react-router-dom'

export default function Product({ product, discount, favButton, cartButton }) {
  console.log("Discount is", product.discount);
  function handleButtonClick(event) {
    event.stopPropagation();
  }

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
        <p className="product-rating">Rating: {product.rating?.rate}</p>
        {/* Use optional chaining (?.) to access product.rating.rate */}
        <div className="product-actions">
          {product.isInCart ? <AddToCart id={product.id} title="Added to Cart" /> : <AddToCart id={product.id} title="Add to Cart" />}
          {product.isInFavorite ? <AddToFavorite id={product.id} title="Added to Favorite" /> : <AddToFavorite id={product.id} title="Add to Favorite" />}
          <Link to={{ pathname: "/individual", state: product }}>
            <button className='getinfo' onClick={handleButtonClick}>Get Info</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
