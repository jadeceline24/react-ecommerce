import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
  const {id, productName, price, productImage} = props.data;
 const {cartItems, addToCart} = useContext(ShopContext)
 const cartItemAmount = cartItems[id]

  return <div className="product">
    <img src={productImage} />
    <div className="desc">
      <p>{productName}</p>
      <p>$ {price}</p>
    </div>
    <div className="addToCartBttn" onClick={() => addToCart(id)}>Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}</div>
  </div>
};
