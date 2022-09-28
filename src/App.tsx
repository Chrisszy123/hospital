import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddWorker from "./pages/Add/ServiceWorker/ServiceWorker";
import AddCar from "./pages/Add/Car/Car";
import AddInspection from "./pages/Add/Inspection/TechnicalInspection";
import ViewCar from "./pages/View/Car";
import ViewInspection from "./pages/View/TechnicalInspection";
import CarDetails from "./pages/View/CarDetails";
import Nav from "./components/Nav/Nav";
import Sidebar from "./components/Sidebar/Sidebar";
import { WalletContext } from "./context/WalletContext";
import { DataContext } from "./context/DataContext";
import {
  getAllCars,
  getAllInspection,
  getServiceWorkerCount,
} from "./utils/Interact";

function App() {
  const [walletAddress, setWallet] = useState("");
  const [cars, setCars] = useState([]);
  const [carsLength, setCarsLength] = useState(0);
  const [inspections, setInspection] = useState([]);
  const [inspectionsLength, setInspectionsLength] = useState(0);
  const [workersLength, setWorkersLength] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const AllCars = async () => {
      const result = await getAllCars();
      setCars(result?.response);
      setCarsLength(result?.response.length);
    };
    const AllInspection = async () => {
      const result = await getAllInspection();
      setInspection(result?.response);
      setInspectionsLength(result?.response.length);
    };
    const ServiceWorkerCount = async () => {
      const result = await getServiceWorkerCount();
      setWorkersLength(result?.response);
    };

    if (walletAddress !== "") {
      AllCars();
      AllInspection();
      ServiceWorkerCount();
    }
  }, [walletAddress]);

  return (
    <WalletContext.Provider
      value={{ walletAddress, setWallet, isActive, setIsActive }}
    >
      <DataContext.Provider
        value={{
          cars,
          carsLength,
          inspections,
          inspectionsLength,
          workersLength,
        }}
      >
        <div className="container">
          <Nav />
          <Sidebar />
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add-worker" element={<AddWorker />} />
              <Route path="/add-car" element={<AddCar />} />
              <Route path="/add-inspection" element={<AddInspection />} />
              <Route path="/view-car" element={<ViewCar />} />
              <Route path="/view-inspection" element={<ViewInspection />} />
              <Route path="/car-details/:id" element={<CarDetails />} />
            </Routes>
          </main>
        </div>
      </DataContext.Provider>
    </WalletContext.Provider>
  );
}

export default App;
