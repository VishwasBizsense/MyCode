import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoricalProducts } from '../../features/fetchCategoricalProducts';
import React from 'react'
import styles from '../../Styles/addto.module.css'
import { fetchProducts, toggleIsInCart, toggleIsInFavorite } from "../../features/fetchProducts";

function AddToFavorite({ id, title }) {
    const dispatch = useDispatch();
    const handleToggleIsInFavorite = (id) => {
        dispatch(toggleIsInFavorite({ id }));
    };

    return (
        <div className={styles.addTo}>
            <button onClick={() => handleToggleIsInFavorite(id)}>
                {title}
            </button>
        </div>
    )
}

export default AddToFavorite
