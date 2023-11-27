import React, { useContext, useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ShopContext from "../../store/shop-context";

const AddMedicineForm = (props) => {
const shopCtx = useContext(ShopContext);

    const nameInputRef = useRef();
    const descriptionInputRef = useRef();
    const priceInputRef = useRef();

    const formSubmitHandler = e => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;

        shopCtx.addMedicines({
            name: enteredName,
            description: enteredDescription,
            price: enteredPrice
        })
    }

  return (
    <>
      <Container>
        <Form onSubmit={formSubmitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Medicine Name</Form.Label>
            <Form.Control type="text" ref={nameInputRef} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" ref={descriptionInputRef} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" ref={priceInputRef} />
          </Form.Group>
          <Button className="float-end">ADD</Button>
        </Form>
      </Container>
    </>
  );
};

export default AddMedicineForm;
