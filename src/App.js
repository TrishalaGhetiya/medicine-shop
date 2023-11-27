import React from "react";
import Header from "./components/layout/Header";
import AvailableMedicines from "./components/medicines/AvailableMedicines";
import ShopProvider from "./store/ShopProvider";
import CartProvider from "./store/cartProvider";

function App() {
  return (
    <CartProvider>
    <ShopProvider>
      <Header />
      <main>
        <AvailableMedicines />
      </main>
    </ShopProvider>
    </CartProvider>
  );
}

export default App;
