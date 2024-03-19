import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoricalProducts } from '../../features/fetchCategoricalProducts';
import React from 'react'
import styles from '../../Styles/addto.module.css';
import { fetchProducts, toggleIsInCart, toggleIsInFavorite } from "../../features/fetchProducts";
function AddToCart({ id, title }) {
    const dispatch = useDispatch();
    const handleToggleIsInCart = (id) => {
        dispatch(toggleIsInCart({ id }));
    };
    function buttonHandler() {
        handleToggleIsInCart(id);
    }
    return (
        <div className={styles.addTo}>
            <button onClick={buttonHandler}>
                {title}
            </button>
        </div>
    )
}

export default AddToCart
