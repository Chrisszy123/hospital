import { useState, useContext } from "react";
import Select from "../../../components/Base/Select";
import Button from "../../../components/Base/Button";
import Loader from "../../../components/Base/Loader";
import { DataContext } from "../../../context/DataContext";
import Validate from "../../../utils/Validate";
import { addInspection } from "../../../utils/Interact";
import Warning from "../../../components/Base/Warning";

const TechnicalInspection = () => {
  const [car, setCar] = useState("");
  const { cars }: any = useContext(DataContext);
  const [loader, setLoader] = useState(false);

  const addInspections = async () => {
    setLoader(true);
    if (Validate(car).empty()) {
      const response = await addInspection(car);
      if (response?.success === true) {
        window.location.reload();
      }
    }
  };

  return (
    <div className="main__container">
      <div className="section__card">
        <div className="section__title">
          <div>
            <h1>Add Technincal Inspection</h1>
            <p>Fill in the Form to Add New Technincal Inspection</p>
          </div>
        </div>
        <div className="form">
          <Select
            text="Select Vehicle for Inspection"
            Options={cars}
            action={setCar}
          />
          <Warning text="Only Service Workers Owner can Add Inspection" />
          <Loader status={loader} />
          <Button
            text="Add Technincal Inspection"
            disabled={true ? !car : false}
            action={addInspections}
          />
        </div>
      </div>
    </div>
  );
};

export default TechnicalInspection;
