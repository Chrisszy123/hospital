import { useState } from "react";
import Input from "../../../components/Base/Input";
import Button from "../../../components/Base/Button";
import Loader from "../../../components/Base/Loader";
import Validate from "../../../utils/Validate";
import { addServiceWorker } from "../../../utils/Interact";
import Warning from "../../../components/Base/Warning";

const AddServiceWorker = () => {
  const [worker, setWorker] = useState("");
  const [loader, setLoader] = useState(false);

  const addWorkers = async () => {
    setLoader(true);
    if (Validate(worker).empty()) {
      const response = await addServiceWorker(worker);
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
            <h1>Add Service Worker</h1>
            <p>Fill in the Form to Add New Service Worker</p>
          </div>
        </div>
        <div className="form">
          <Input
            placeholder="Enter Wallet Address of Service Worker"
            type="text"
            action={setWorker}
          />
          <Warning text="Only Smart Contract Owner can Add Worker" />
          <Loader status={loader} />
          <Button
            text="Add Service Worker"
            disabled={true ? !worker : false}
            action={addWorkers}
          />
        </div>
      </div>
    </div>
  );
};

export default AddServiceWorker;
