import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import ShopContext from "../../store/shop-context";
import MedicineItem from "./MedicineItem";

const MedicineList = (props) => {
  const shopCtx = useContext(ShopContext);

  const medicinesList = shopCtx.medicines.map((medicine) => (
    <MedicineItem
      key={medicine._id}
      name={medicine.name}
      description={medicine.description}
      price={medicine.price}
    />
  ));

  return (
    <>
      <Container>
        <ul>
            {medicinesList}
        </ul>
      </Container>
    </>
  );
};

export default MedicineList;
