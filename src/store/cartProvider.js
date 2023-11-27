import React, { useReducer } from "react";

import CartContext from "./cart-context";
import { useEffect } from "react";
import {
  addDataToCart,
  deleteDataFromCart,
  getCartData,
} from "../helper-functions/database-requests";


const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = defaultCartState, action) => {
  if (action.type === "ADD") {
    let updatedItems = [...state.items];
    updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // const existingCartItemIndex = state.items.findIndex(
    //   (item) => item.id === action.item.id
    // );
    // const existingCartItem = state.items[existingCartItemIndex];
    // let updatedItems;

    // if (existingCartItem) {
    //   const updatedItem = {
    //     ...existingCartItem,
    //     quantity: existingCartItem.quantity + action.item.quantity,
    //   };
    //   updatedItems = [...state.items];
    //   updatedItems[existingCartItemIndex] = updatedItem;
    // } else {
    //   updatedItems = state.items.concat(action.item);
    // }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if(action.type === 'ORDER') {
    return defaultCartState;
  }

  if(action.type === 'GET') {
    const updatedItems = action.cartItems;
    let updatedTotalAmount = 0;
    for(let i=0;i<updatedItems.length;i++){
      updatedTotalAmount = updatedTotalAmount + (updatedItems[i].price * updatedItems[i].amount);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

};

const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  useEffect(() => {
      getCartData()
        .then(({ data }) => {
          data && dispatchCartAction({ type: "GET", cartItems: data });
        })
        .catch((err) => console.log(err.message));

    dispatchCartAction({ type: "GET", cartItems: [] });
  }, []);

  const addItemToCartHandler = (item) => {
    console.log(item);
    addDataToCart(item)
      .then(({ data }) => {
        dispatchCartAction({ type: "ADD", item: data });
      })
      .catch((err) => console.log(err.message));
  };

  const removeItemFromCartHandler = (id, _id) => {
    deleteDataFromCart( _id)
      .then(({ data }) => {
        dispatchCartAction({ type: "REMOVE", id: id });
      })
      .catch((err) => console.log(err.message));
  };

  const order = (items) => {
    try {
      items.forEach(async (item) => {
        await deleteDataFromCart( item._id);
      });

      dispatchCartAction({ type: "ORDER" });
    } catch (err) {
      console.log(err);
    }
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    order: order,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
