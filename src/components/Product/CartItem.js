import React, { useState } from "react";
import { Trash } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { removeItem } from "../../features/cart/cartSlice";

var formatter = new Intl.NumberFormat("vi-VI", {
  style: "currency",
  currency: "VND",
});

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [quantity, setQuantity] = useState(cartItem.quantity);
  return (
    <div className="cart-item">
      <img src={cartItem.img} alt={cartItem.name} />
      <p>{cartItem.name}</p>
      <p>{cartItem.quantity}</p>
      <p>{formatter.format(cartItem.totalPrice)}</p>
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
