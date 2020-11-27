import React from 'react';

const Product = ({ product, addToCart } ) => {
  const {id, name, brand, price, img, inStock } = product

  return (
    <div className="product">
      <img src={img} alt={`car-${id}-image`} />
      <div className="head">
        <h4>{name}</h4>
        <p>${price}</p>
      </div>
      <div className="product-info">
        <p>{brand}</p>
        <p>In Stock: {inStock}</p>
      </div>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
};

export default Product;
