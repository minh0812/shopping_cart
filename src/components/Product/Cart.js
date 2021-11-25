import React from "react";
import { useSelector } from "react-redux";
import { getCartItems } from "../../features/cart/cartSlice";
import CartItem from "./CartItem";

var formatter = new Intl.NumberFormat("vi-VI", {
  style: "currency",
  currency: "VND",
});

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  let cost = 0;
  cartItems.map((cartItem) => (cost += cartItem.totalPrice));

  return (
    <div className="list-cart">
      <div className="cart-item-bar">
        <p className="cart-item-name">Tên sản phẩm</p>
        <p className="cart-item-quantity">Số lượng</p>
        <p className="cart-item-price">Tổng tiền</p>
      </div>
      {cartItems.map((cartItem) => (
        <CartItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <p className="cart-item-totalPrice">Tổng: {formatter.format(cost)}</p>
      <button className="btn-checkout">Thanh Toán</button>
    </div>
  );
};

export default Cart;
