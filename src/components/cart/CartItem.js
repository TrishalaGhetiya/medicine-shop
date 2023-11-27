import { Button } from "react-bootstrap";

const CartItem = (props) => {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.price}</td>
      <td>
        <div>
          <span>{props.quantity}</span>
          <Button className="float-end" variant="outline-dark" onClick={props.onRemove}>
            x
          </Button>
          {/* <Button variant="ouentertline-dark" onClick={props.onAdd}>+</Button> */}
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
