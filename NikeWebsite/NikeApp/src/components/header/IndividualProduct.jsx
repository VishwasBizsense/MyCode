import React from 'react';
import styles from '../../Styles/Individual.module.css';
import { useLocation } from 'react-router-dom';

function IndividualProduct(props) {
    const { state } = props.location;
    const { product } = state;
    console.log('individual product info', product);
    return (
        <div className={styles.productContainer}>
            <div className={styles.productImage}>
                <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.productDetails}>
                <h2 className={styles.productTitle}>{product.title}</h2>
                <p className={styles.productCategory}>{product.category}</p>
                <p className={styles.productDescription}>{product.description}</p>
                <p className={styles.productPrice}>${product.price}</p>
                <div className={styles.productRating}>
                    Rating: {product.rating.rate} ({product.rating.count} reviews)
                </div>
                <div className={styles.buttons}>
                    {product.isInCart ? <AddToCart id={product.id} title="Added to Cart" /> : <AddToCart id={product.id} title="Add to Cart" />}
                    {product.isInFavorite ? <AddToFavorite id={product.id} title="Added to Favorite" /> : <AddToFavorite id={product.id} title="Add to Favorite" />}
                </div>
            </div>
        </div>
    );
}

export default IndividualProduct;