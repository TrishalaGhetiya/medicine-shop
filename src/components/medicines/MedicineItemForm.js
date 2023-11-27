import React, { useRef, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

const MedicineItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  const amountInputRef = useRef();

  return (
    <Form onSubmit={submitHandler}>
      <FormControl
        ref={amountInputRef}
        label="Amount"
        input={{
          type: "text",
          id: "amount",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button>Add</Button>
      {!amountIsValid && <p>Enter valid amount (1-5)</p>}
    </Form>
  );
};

export default MedicineItemForm;
