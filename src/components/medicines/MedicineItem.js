import React, { useContext } from "react";

import CartContext from "../../store/cart-context";
import MedicineItemForm from "./MedicineItemForm";

const MedicineItem = (props) => {

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  };

  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{props.price}</div>
      </div>
      <div>
        <MedicineItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MedicineItem;
