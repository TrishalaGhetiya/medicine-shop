import React from "react";
import AddMedicineForm from "./AddMedicineForm";
import MedicineList from "./MedicineList";

const AvailableMedicines = props => {
    return (
        <>
            <AddMedicineForm />
            <MedicineList />
        </>
    );
};

export default AvailableMedicines;