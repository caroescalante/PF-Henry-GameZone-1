import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/index";

const ShopCart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      {cart.map(game => {
        return (
          <div key={game.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <img src={game.image} alt={game.name} style={{ width: "50px", marginRight: "10px" }} />
            <div>
              <h2>{game.name}</h2>
              <p>Precio: {game.price}</p>
              <button onClick={() => handleRemoveFromCart(game.id)}>Eliminar</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopCart;