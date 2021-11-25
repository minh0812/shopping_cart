import QuatityButton from "./QuatityButton";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addItemsToCart } from "../../features/cart/cartSlice";

var formatter = new Intl.NumberFormat("vi-VI", {
  style: "currency",
  currency: "VND",
});

const Product = ({product}) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className="product">
      <h4 className="product-title">{product.name}</h4>
      <img src={product.img} alt={product.img} />
      <QuatityButton quantity={quantity} setQuantity={setQuantity} />
      <button
        onClick={() => {
          if(quantity > 0) {
            dispatch(addItemsToCart({product, quantity}));
          }
          setQuantity(0);
        }}
      >
        Add to cart
      </button>
      <p className="product-price">
        Giá: {formatter.format(product.price)}
      </p>
    </div>
  );
};

export default Product;
