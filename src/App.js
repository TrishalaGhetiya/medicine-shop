import React from "react";
import Header from "./components/layout/Header";
import AvailableMedicines from "./components/medicines/AvailableMedicines";
import ShopProvider from "./store/ShopProvider";

function App() {
  return (
    <ShopProvider>
      <Header />
      <main>
        <AvailableMedicines />
      </main>
    </ShopProvider>
  );
}

export default App;
