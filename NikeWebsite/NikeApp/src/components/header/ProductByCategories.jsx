import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoricalProducts } from '../../features/fetchCategoricalProducts';
import Product from "./Product";
import Error from './Error';
import load from '../../assets/1486.gif'
function ProductByCategories({ category, title }) {
    const dispatch = useDispatch();
    const { loadingPc, categoricalProducts, errorPc } = useSelector(
        (state) => state.categoricalProducts
    );

    useEffect(() => {
        dispatch(fetchCategoricalProducts(category));
    }, [dispatch, category]);

    if (loadingPc) {
        return <div style={{ textAlign: "center", marginTop: "20px" }}>
            <img
                src={load}
                alt="Loading..."
                style={{ width: "50px", height: "50px" }} // Adjust width and height as needed
            />
        </div>;
    }
    errorPc ? <Error message={errorPc.message} /> : "";
    return (
        <div className="section">
            <p className="title">{title}</p>
            <div className="products-container">
                {categoricalProducts.map((product, i) => (
                    <div key={i}>
                        <Product product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductByCategories;
