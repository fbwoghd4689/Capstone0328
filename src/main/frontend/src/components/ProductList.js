import React from "react";
import "../assets/styles.css";

function ProductList({ products }) {
    return (
        <ul className="product-list">
            {products.map((product) => (
                <li key={product.id} className="product-item">
                    <img src="https://via.placeholder.com/80" alt={product.name} />
                    <div className="product-details">
                        <div className="product-name">{product.name}</div>
                        <div className="product-price">{product.price.toLocaleString()}원</div>
                        <div className="product-location">{product.location}</div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ProductList;
