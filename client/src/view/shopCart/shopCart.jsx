import React from "react";
import { useSelector } from "react-redux";

const shopCart = () => {
    const cartShop = useSelector(state => state.cart);

    return (
        <div>
        <h1>Soy elka rrito</h1>
        </div>
    );
};

export default shopCart;