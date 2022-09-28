import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TBody from "../../components/Base/TBody";
import { getCarDetails } from "../../utils/Interact";

const CarDetails = () => {
  const [car, setCarDetails] = useState([]);

  const Id: string | any = useParams().id;

  useEffect(() => {
    const getDetails = async () => {
      const response = await getCarDetails(Id);
      if (response?.success === true) {
        setCarDetails(response?.response);
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
              <h1>View Vehicle Details</h1>
              <p>The Table Below Show the Details of all Vehicle</p>
            </div>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>VIN</th>
                  <th>Name</th>
                  <th>Color</th>
                </tr>
              </thead>
              {car.length !== 0 && <TBody item={car} />}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
