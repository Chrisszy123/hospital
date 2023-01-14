import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
	getAllPatients,
	// getAllInspection,
	getNursesCount,
	getAllNurses
} from "./utils/Interact";
import Login from "./pages/Auth/Login/Login";

function App() {
	const [walletAddress, setWallet] = useState("");
	const [patient, setPatients] = useState([]);
	const [nurses, setNurses] = useState([]);
	const [carsLength, setCarsLength] = useState(0);
	const [inspections, setInspection] = useState([]);
	const [inspectionsLength, setInspectionsLength] = useState(0);
	const [workersLength, setWorkersLength] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const AllPatients = async () => {
			const result = await getAllPatients();
			setPatients(result?.response);
			setCarsLength(result?.response.length);
		};
		// const AllInspection = async () => {
		// 	const result = await getAllInspection();
		// 	setInspection(result?.response);
		// 	setInspectionsLength(result?.response.length);
		// };
		const NursesCount = async () => {
			const result = await getNursesCount();
			setWorkersLength(result?.response);
		};
		const Nurses = async () => {
			const result = await getAllNurses()
			setNurses(result?.response)
		}

		if (walletAddress !== "") {
			AllPatients();
			// AllInspection();
			NursesCount();
			Nurses()
		}
	}, [walletAddress]);

	return (
		<WalletContext.Provider
			value={{ walletAddress, setWallet, isActive, setIsActive }}
		>
			<DataContext.Provider
				value={{
					patient,
					carsLength,
					inspections,
					inspectionsLength,
					workersLength,
					nurses
				}}
			>
				{location.pathname !== "/" ? (
					<>
						<div className="container">
							<Nav />
							<Sidebar />

							<main>
								<Routes>
									<Route path="/dashboard" element={<Dashboard />} />
									<Route path="/add-worker" element={<AddWorker />} />
									<Route path="/add-car" element={<AddCar />} />
									<Route path="/add-inspection" element={<AddInspection />} />
									<Route path="/view-car" element={<ViewCar />} />
									<Route path="/view-inspection" element={<ViewInspection />} />
									<Route path="/car-details/:id" element={<CarDetails />} />
								</Routes>
							</main>
						</div>
					</>
				) : (
					<Routes>
						<Route path="/" element={<Login />} />
					</Routes>
				)}
			</DataContext.Provider>
		</WalletContext.Provider>
	);
}

export default App;
