import React, { useState } from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';

const Nav = ({ addToCart, cartItems }) => {
  const [showCartDetails, setShowCartDetails] = useState(false);
  const [qty, setQty] = useState(0);

  const sumQty = cartItems.reduce((arr, acc) => arr + acc.qty, 0);
  const itemsPrice = cartItems.reduce((arr, acc) => arr + acc.price * acc.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice + taxPrice > 35000 ? 'Free' : 200;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <nav>
      <div className="container">
        <div className="navigation-content">
          <div className="logo">Amazona</div>
          <div className="basket" onClick={() => setShowCartDetails(!showCartDetails)}>
            <RiShoppingBagLine />
            <span>{sumQty}</span>
          </div>
        </div>

        <div className={`cart-details ${showCartDetails && 'show'}`}>
          <h1>Shoping Cart</h1>
          <span className="cart-details__closeBtn" onClick={() => setShowCartDetails(!showCartDetails)}>
            X
          </span>
          <div className="cart-details__products">
            <ul>
              {cartItems.map((product) => (
                <li key={product.id}>
                  <img src={product.img} alt={`car-${product.id}-image`} />
                  <h4>{product.name}</h4>
                  <div className="qty">
                    <span data-type="inc" onClick={() => addToCart(product)}>
                      +
                    </span>
                    <div className="quantity">{product.qty}</div>
                    <span data-type="dec" onClick={(e) => addToCart(product, e.target.dataset.type)}>
                      -
                    </span>
                  </div>
                  <p>${product.price}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="summary">
            <div className="summary__details">
              <div>
                <p>Items price:</p>
                <p>{itemsPrice}</p>
              </div>
              <div>
                <p>Tax:</p>
                <p>{taxPrice.toFixed(2)}</p>
              </div>
              <div>
                <p>Shipping:</p>
                <p>{shippingPrice}</p>
              </div>
            </div>
            <div className="summary__total">
              <h2>Total:</h2>
              <p>${shippingPrice !== 'Free' ? totalPrice : totalPrice.slice(0, totalPrice.length - 4)}</p>
            </div>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
