import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../../redux/actions/index";

const ShopCart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrementQuantity = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };

  // const getTotalPrice = () => {
  //   return cart.reduce((total, game) => total + game.price * game.quantity, 0);
  // };

  const getTotalPrice = () => {
    const total = cart.reduce((total, game) => total + (game.price * game.quantity), 0);
    return total.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true, groupingSeparator: '.' });
  };

  return (
    <div>
      {cart.length ? (
        <>
          {cart.map(game => {
            return (
              <div key={game.id}>
                <img src={game.image} alt={game.name} style=  {{ width: "50px" }} />
                <div>
                  <h2>{game.name}</h2>
                  {/* <p>Price: {game.price}</p> */}
                  <p>Precio: {game.price.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  <div>
                    <button onClick={() => handleDecrementQuantity(game.id)}>-</button>
                    <p>Quantity: {game.quantity}</p>

                    <button onClick={() => handleIncrementQuantity(game.id)}>+</button>
                  </div>
                  <button onClick={() => handleRemoveFromCart(game.id)}>Eliminar</button>
                </div>
              </div>
            );
          })}
          <p>Total: {getTotalPrice()}</p>
        </>
      ) : (
        <p>No hay ningún juego en el carrito</p>
      )}
    </div>
  );
};

export default ShopCart;
