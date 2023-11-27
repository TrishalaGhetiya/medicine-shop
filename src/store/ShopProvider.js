import React, { useReducer } from "react";
import { useEffect } from "react";
import { addMedicinesToShop, getMedicines } from "../helper-functions/database-requests";
import ShopContext from "./shop-context";

const defaultShopState = {
  medicines: []
};

const shopReducer = (state = defaultShopState, action) => {
  if (action.type === "ADD") {
    let updatedMedicines = [...state.medicines];
    updatedMedicines = state.medicines.concat(action.medicine);
    return {
      medicines: updatedMedicines,
    };
  }

  if(action.type === 'GET') {
    const updatedMedicines = action.shopItems;
    return {
      medicines: updatedMedicines,
    }
  }

};

const ShopProvider = (props) => {

  const [shopState, dispatchShopAction] = useReducer(
    shopReducer,
    defaultShopState
  );

  useEffect(() => {
      getMedicines()
        .then(({ data }) => {
          data && dispatchShopAction({ type: "GET", shopItems: data });
        })
        .catch((err) => console.log(err.message));

    dispatchShopAction({ type: "GET", shopItems: [] });
  }, []);

  const addMedicineToShopHandler = (medicine) => {
    addMedicinesToShop(medicine)
      .then(({ data }) => {
        dispatchShopAction({ type: "ADD", medicine: data });
      })
      .catch((err) => console.log(err.message));
  };

  const shopContext = {
    medicines: shopState.items,
    addMedicines: addMedicineToShopHandler,
  };

  return (
    <ShopContext.Provider value={shopContext}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
