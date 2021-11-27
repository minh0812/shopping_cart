import React from "react";

const QuatityButton = (props) => {

  const addQuantity = () => {
    props.setQuantity(props.quantity+1);
  }

  const subQuantity = () => {
    if (props.quantity > 0) {
      props.setQuantity(props.quantity-1);
    }
  }

  return (
    <div className="product-number">
      <p>Số lượng:</p>
      <p className="sub" onClick={subQuantity}>–</p>
      <p>{props.quantity}</p>
      <p className="sum" onClick={addQuantity}>+</p>
    </div>
  );
};

export default QuatityButton;
