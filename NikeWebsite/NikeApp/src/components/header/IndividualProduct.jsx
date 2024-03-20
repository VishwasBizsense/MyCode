import React, { useEffect } from "react";
import styles from "../../Styles/Individual.module.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetails } from "../../features/fetchProductById";
import AddToCart from "./AddToCart";
import AddToFavorite from "./AddToFavorite";

function IndividualProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log("Product id from params", id);

  const { productDetails, loadingProduct, errorProduct } = useSelector(
    (state) => state.productDetailsById
  );

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  if (loadingProduct) {
    return <div>Loading...</div>;
  }

  if (errorProduct) {
    return <div>Error: {errorProduct}</div>; // Fixed error variable name
  }

  // Check if productDetails is undefined
  if (!productDetails) {
    return <div>No product details found.</div>;
  }

  // Ensure productDetails is not undefined before accessing its properties
  return (
    <div className={styles.productContainer}>
      <div className={styles.productImage}>
        <img src={productDetails.image} alt={productDetails.title} />
      </div>
      <div className={styles.productDetails}>
        <h2 className={styles.productTitle}>{productDetails.title}</h2>
        <p className={styles.productCategory}>{productDetails.category}</p>
        <p className={styles.productDescription}>
          {productDetails.description}
        </p>
        <p className={styles.productPrice}>${productDetails.price}</p>
        <div className={styles.productRating}>
          Rating: {productDetails.rating?.rate} ({productDetails.rating?.count}{" "}
          reviews) {/* Use optional chaining (?) to handle undefined */}
        </div>
        <div className={styles.button}>
          {productDetails.isInCart ? (
            <AddToCart id={id} title="Remove from Cart" />
          ) : (
            <AddToCart id={id} title="Add to Cart" />
          )}
          {productDetails.isInFavorite ? (
            <AddToFavorite id={id} title="Remove from Favorite" />
          ) : (
            <AddToFavorite id={id} title="Add to Favorite" />
          )}
        </div>
      </div>
    </div>
  );
}

export default IndividualProduct;
