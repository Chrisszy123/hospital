import { useState } from "react";
import Input from "../../../components/Base/Input";
import Button from "../../../components/Base/Button";
import Loader from "../../../components/Base/Loader";
import Validate from "../../../utils/Validate";
import { addNurse } from "../../../utils/Interact";
import Warning from "../../../components/Base/Warning";

const AddServiceWorker = () => {
  const [worker, setWorker] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  // const [id, setID] = useState(0);
  const [rank, setRank] = useState(0);
  const [spzn, setSpzn] = useState("");
  const [loader, setLoader] = useState(false);

  
  const addWorkers = async () => {
   
    setLoader(true);
    if (Validate(worker).empty()) {
      const response = await addNurse(worker, date, name, rank, spzn);
      if (response?.success === true) {
        window.location.reload();
      }
      setLoader(false);
    }
  };

  return (
    <div className="main__container">
      <div className="section__card">
        <div className="section__title">
          <div>
            <h1>Add Nurse</h1>
            <p>Fill in the Form to Add Nurse</p>
          </div>
        </div>
        <div className="form">
          <Input
            placeholder="Enter Wallet Address of Nurse"
            type="text"
            action={setWorker}
          />
          <Input
            placeholder="Date of Employment"
            type="date"
            action={setDate}
          />
          <Input
            placeholder="Enter Name of Nurse"
            type="text"
            action={setName}
          />
          {/* <Input
            placeholder="Enter ID"
            type="number"
            action={setID}
          /> */}
          <Input
            placeholder="Enter Rank of Nurse"
            type="number"
            action={setRank}
          />
          <Input
            placeholder="Enter Specialization of Nurse"
            type="text"
            action={setSpzn}
          />
          <Warning text="Only the Doctor can Add Nurse" />
          <Loader status={loader} />
          <Button
            text="Add Nurse"
            disabled={true ? !worker : false}
            action={addWorkers}
          />
        </div>
      </div>
    </div>
  );
};

export default AddServiceWorker;
