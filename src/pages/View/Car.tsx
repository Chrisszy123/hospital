import { useContext } from "react";
import TBody from "../../components/Base/TBody";
import { DataContext } from "../../context/DataContext";

const Car = () => {
  const { cars }: any = useContext(DataContext);

  return (
    <div className="main__container">
      <div className="section__card">
        <div className="section__title">
          <div>
            <h1>View All Vehicle</h1>
            <p>The Table Below Displays the List of all Vehicle</p>
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
                <th>Action</th>
              </tr>
            </thead>
            {cars.length !== 0 ? <TBody item={cars} /> : <> No Record Yet</>}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Car;
