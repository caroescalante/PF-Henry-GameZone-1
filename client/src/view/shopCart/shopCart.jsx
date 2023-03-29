// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import axios from 'axios';
// import { removeFromCart, incrementQuantity, decrementQuantity } from "../../redux/actions/index";

// const ShopCart = () => {
//   const cart = useSelector(state => state.cart);
//   const dispatch = useDispatch();

//   const handleRemoveFromCart = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   const handleIncrementQuantity = (id) => {
//     dispatch(incrementQuantity(id));
//   };

//   const handleDecrementQuantity = (id) => {
//     dispatch(decrementQuantity(id));
//   };

// const handlePayment = async () => {
//  let arrayItems = cart.map((c)=>{
//      return {
//         title: c.name,
//         description:"ultima version",
//         picture_url: c.image,
//         category_id: c.id,
//         quantity: c.quantity,
//         unit_price: c.price
//       }

// })

// let bodypayment={
//   payer_email: "test_user_36100631@testuser.com",
//   items: arrayItems,
//   back_urls: {
//     failure: "/paymentfailure",
//     pending: "/pending",
//     success: "/paymentsuccess"
//   }
// }
// let data =await axios.post("http://localhost:3001/payment", bodypayment);
// location.href =data.data.init_point;
//   }


//   const getTotalPrice = () => {
//     const total = cart.reduce((total, game) => total + (game.price * game.quantity), 0);
//     return total.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true, groupingSeparator: '.' });
//   };

//   return (
//     <div>
//       {cart.length ? (
//         <>
//           {cart.map(game => {
//             return (
//               <div key={game.id}>
//                 <img src={game.image} alt={game.name} style=  {{ width: "50px" }} />
//                 <div>
//                   <h2>{game.name}</h2>
//                   <p>Precio: {game.price.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
//                   <div>
//                     <button onClick={() => handleDecrementQuantity(game.id)}>-</button>
//                     <p>Quantity: {game.quantity}</p>

//                     <button onClick={() => handleIncrementQuantity(game.id)}>+</button>
//                   </div>
//                   <button onClick={() => handleRemoveFromCart(game.id)}>Eliminar</button>
//                 </div>
//               </div>
//             );
//           })}
//           <p>Total: {getTotalPrice()}</p>
//           <button onClick={() => handlePayment()}>Pagar</button>
//         </>
//       ) : (
//         <p>No hay ningún juego en el carrito</p>
//       )}
//     </div>
//   );
// };

// export default ShopCart;
//

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { removeFromCart } from "../../redux/actions/index";
import style from "./shopCart.module.css"

const ShopCart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };


  const handlePayment = async () => {
    let arrayItems = cart.map((c)=>{
      return {
        title: c.name,
        description:"ultima version",
        picture_url: c.image,
        category_id: c.id,
        quantity: c.quantity,
        unit_price: c.price
      }
    })

    let bodypayment={
      payer_email: "test_user_36100631@testuser.com",
      items: arrayItems,
      back_urls: {
        failure: "/paymentfailure",
        pending: "/pending",
        success: "/paymentsuccess"
      }
    }
    
    let data =await axios.post("http://localhost:3001/payment", bodypayment);
    localStorage.removeItem('cart'); 
    location.href =data.data.init_point;
  }

  const getTotalPrice = () => {
    const total = cart.reduce((total, game) => total + game.price, 0);
    return total.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true, groupingSeparator: '.' });
  };

  return (
    <div className={style.Background}>
      {cart.length ? (
        <>
      <div className={style.containerAllCards}>
          {cart.map(game => {
            return (
              <div className={style.containerCards}>
              <div className={style.card} key={game.id}>
                <div>
                  <img src={game.image} alt={game.name} className={style.image} />
                  <div className={style.name}><h2 >{game.name}</h2></div>
                   <div className={style.priceQuantity}>
                    <p className={style.price}>$ {game.price.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    {/* <button className={style.button}onClick={() => handleRemoveFromCart(game.id)}>Delete</button> */}
                    <button onClick={() => handleRemoveFromCart(game.id)} className={style.trashButton}><i class="fas fa-trash"></i></button>
                    <p className={style.quantity}>{game.quantity}</p>
                  </div>
                  </div>
              </div>
            </div>
            );
          })}
          </div>
          <div className={style.containerPayment} >
          <p className={style.titlePay}>Game summary</p>
          <p>-------------------------------------</p>
          <p className={style.subtotal}>Subtotal: {getTotalPrice()}</p>
          <button className={style.buttonPay} onClick={() => handlePayment()}>Go to purchase screen</button>
          </div>
        </>
      ) : (
        <p className={style.cartEmpty}>The cart is empty, please add some item.</p>
        )}
    </div>
  );
};




export default ShopCart;


