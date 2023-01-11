import React from 'react';
import {products} from '../../products';
import {Product} from './product';
import './shop.css'
export const Shop = () => {
  return (
    <div className="shop">
      <div className="shop-title">Digibox Shop</div>
      <div className="products">
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
