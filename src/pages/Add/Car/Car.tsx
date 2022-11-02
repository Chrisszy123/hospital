import { useState } from "react";
import Input from "../../../components/Base/Input";
import Loader from "../../../components/Base/Loader";
import Button from "../../../components/Base/Button";
import Validate from "../../../utils/Validate";
import { addVehicle } from "../../../utils/Interact";
import Warning from "../../../components/Base/Warning";

const Car = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [loader, setLoader] = useState(false);

  const addCar = async () => {
    setLoader(true);
    const vin: Number = generateVIN();
    if (Validate(name).empty() && Validate(color).empty()) {
      const response = await addVehicle(vin, name, color);
      if (response?.success === true) {
        window.location.reload();
      }
      // setLoader(false);
    }
  };

  const generateVIN = () => {
    const random = Math.round(Math.random() * (1001 - 100000) + 100000);
    return random;
  };

  return (
    <div className="main__container">
      <div className="section__card">
        <div className="section__title">
          <div>
            <h1>Add New Vehicle</h1>
            <p>Fill in the Form to Add New Vehicle</p>
          </div>
        </div>
        <div className="form">
          <Input
            placeholder="Enter Vehicle Name"
            type="text"
            action={setName}
          />
          <Input
            placeholder="Enter Vehicle Color"
            type="text"
            action={setColor}
          />
          <Warning text="Only Service Workers Owner can Add Car" />

          <Loader status={loader} />

          <Button
            text="Add Vehicle"
            disabled={true ? !name || !color : false}
            action={addCar}
          />
        </div>
      </div>
    </div>
  );
};

export default Car;
