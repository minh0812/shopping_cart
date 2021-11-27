import React, { useState } from "react";
import { Trash } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { addItem, removeItem, subItem } from "../../features/cart/cartSlice";

var formatter = new Intl.NumberFormat("vi-VI", {
  style: "currency",
  currency: "VND",
});

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(cartItem.quantity);
  return (
    <div className="cart-item">
      <img src={cartItem.img} alt={cartItem.name} />
      <p className="cart-item-name">{cartItem.name}</p>
      <span
        className="btn-sub"
        onClick={() => {
          if (quantity > 1) {
            dispatch(subItem({ cartItem, quantity }));
            setQuantity(quantity - 1);
          }
        }}
      >
        –
      </span>
      <p className="cart-item-quantity">{cartItem.quantity}</p>
      <span
        className="btn-add"
        onClick={() => {
          dispatch(addItem({ cartItem, quantity }));
          setQuantity(quantity + 1);
        }}
      >
        +
      </span>
      <p className="cart-item-price">{formatter.format(cartItem.totalPrice)}</p>
      <Trash
        className="trash-icon"
        color="red"
        size="27"
        onClick={() => {
          dispatch(removeItem({ cartItem, quantity }));
        }}
      />
    </div>
  );
};

export default CartItem;
