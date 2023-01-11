import React, {useContext} from 'react';
import {ShopContext} from '../../context/shop-context';
import {products} from '../../products';
import {CartItem} from './cartItem';
import './cart.css';
import {useNavigate} from 'react-router-dom';

export const Cart = () => {
  const {cartItems, gettotalAmount, checkout} = useContext(ShopContext);
  const totalAmount = gettotalAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button
            onClick={() => {
              checkout();
              navigate('/checkout');
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1>Cart is Empty</h1>
      )}
    </div>
  );
};
