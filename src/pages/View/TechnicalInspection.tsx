import { useContext } from "react";
import TBody from "../../components/Base/TBody";
import { DataContext } from "../../context/DataContext";

const TechnicalInspection = () => {
  const { inspections }: any = useContext(DataContext);

  return (
    <div className="main__container">
      <div className="section__card">
        <div className="section__title">
          <div>
            <h1>View All Inspection</h1>
            <p>The Table Below Displays the List of all Inspection</p>
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>VIN</th>
                <th>Date</th>
              </tr>
            </thead>
            {inspections.length !== 0 ? (
              <TBody item={inspections} />
            ) : (
              <> No Record Yet</>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default TechnicalInspection;
