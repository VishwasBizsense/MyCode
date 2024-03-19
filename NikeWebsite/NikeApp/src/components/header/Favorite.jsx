import React from 'react';
import { useSelector } from 'react-redux';
import '../../Styles/mvpProducts.css'
import Product from './Product'
function Favorite() {
    // Access the state from the Redux store
    const favoriteProducts = useSelector((state) =>
        state.products.allProducts.filter((product) => product.isInFavorite)
    );

    return (
        <div>
            <div className="mvp-section">
                <p className="title">Favorite</p>
                <div className="products-container">
                    {favoriteProducts?.map((product, i) => (
                        <div key={i}>
                            <Product product={product} favButton={true} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Favorite;
