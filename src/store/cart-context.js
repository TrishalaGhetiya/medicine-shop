import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id, _id) => {},
  order: () => {},
});

export default CartContext;
