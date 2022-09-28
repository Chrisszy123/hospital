import { useContext } from "react";
import Card from "../components/Card/Card";
import { WalletContext } from "../context/WalletContext";
import { DataContext } from "../context/DataContext";

function Dashboard() {
  const { walletAddress }: any = useContext(WalletContext);
  const { carsLength, inspectionsLength, workersLength }: any =
    useContext(DataContext);

  return (
    <div className="main__container">
      {walletAddress !== "" && (
        <div className="main__title">
          <img src="assets/hello.svg" alt="" />
          <div className="main__greeting">
            <h1>
              Hello{" "}
              {String(walletAddress).substring(0, 6) +
                "..." +
                String(walletAddress).substring(38)}
            </h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>
      )}
      <div className="main__cards">
        <Card
          icon="hard-hat"
          figure={workersLength}
          title="Number of Workers"
          color="text-lightblue"
        />
        <Card
          icon="car"
          figure={carsLength}
          title="Number of Cars"
          color="text-red"
        />
        <Card
          icon="wrench"
          figure={inspectionsLength}
          title="Number of Inspection"
          color="text-green"
        />
      </div>
    </div>
  );
}

export default Dashboard;
