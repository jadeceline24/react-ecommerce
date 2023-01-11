import React, {useContext} from 'react';
import {ShopContext} from '../../context/shop-context';

export const CartItem = (props) => {
  const {id, productName, price, productImage} = props.data;
  const {cartItems, addToCart, deleteCart, updateCartCount} = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="desc">
        <p>{productName}</p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => deleteCart(id)}>-</button>
          <input value={cartItems[id]} onChange={(e) => updateCartCount(Number(e.target.value), id)}/>
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
