import React, { useState } from "react";
import { Badge, Button, Container, Navbar } from "react-bootstrap";
import Cart from "../cart/Cart";

const Header = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <h1 style={{'color':"white"}}>Medicine Shop</h1>
        </Container>
        <Button onClick={showCartHandler}>
          Cart{" "}
          <Badge pill bg="light" text="dark" position="top-right">
            {/* {numberOfCartItems} */}3
          </Badge>
        </Button>
      </Navbar>
      <Cart show={cartIsShown} onHide={hideCartHandler} />
      </>
  );
};

export default Header;
