import React from 'react';
import { useSelector } from 'react-redux';
import '../../Styles/mvpProducts.css'
import { fetchProducts, toggleIsInCart, toggleIsInFavorite } from "../../features/fetchProducts";
import Product from './Product'
function Cart() {
    // Access the state from the Redux store
    const productsInCart = useSelector((state) =>
        state.products.allProducts.filter((product) => product.isInCart)
    );
    console.log("Products in cart", productsInCart);

    return (
        <div>
            <div className="mvp-section">
                <p className="title">Cart</p>
                <div className="products-container">
                    {productsInCart?.map((product, i) => (
                        <div key={i}>
                            <Product product={product} cartButton={true} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cart;