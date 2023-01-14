import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TBody from "../../components/Base/TBody";
import { getPatient } from "../../utils/Interact";

const CarDetails = () => {
  const [patient, setPatientDetails] = useState([]);

  const Id: string | any = useParams().id;

  useEffect(() => {
    const getDetails = async () => {
      const response = await getPatient(Id);
      console.log(response);
      if (response?.success === true) {
        setPatientDetails(response?.response);
      }
    };
    getDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="main__container">
        <div className="section__card">
          <div className="section__title">
            <div>
              <h1>View Patient Details</h1>
              <p>The Table Below Show the Details of all Patient</p>
            </div>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>AGE</th>
                  <th>Name</th>
                  <th>Date of Admission</th>
                </tr>
              </thead>
              {patient.length !== 0 && <TBody item={patient} />}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
