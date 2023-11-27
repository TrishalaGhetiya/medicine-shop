import React from "react";

const ShopContext = React.createContext({
    medicines: [],
    addMedicines: (medicine) => {},
});

export default ShopContext;