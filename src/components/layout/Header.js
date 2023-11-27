import React, { useContext, useState } from "react";
import { Badge, Button, Container, Navbar } from "react-bootstrap";
import Cart from "../cart/Cart";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <h1 style={{ color: "white" }}>Medicine Shop</h1>
        </Container>
        <Button onClick={showCartHandler}>
          Cart{" "}
          <Badge pill bg="light" text="dark" position="top-right">
            {numberOfCartItems}
          </Badge>
        </Button>
      </Navbar>
      <Cart show={cartIsShown} onHide={hideCartHandler} />
    </>
  );
};

export default Header;
