import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { __NavType } from "../../types/Nav";
import { WalletType } from "../../types/Wallet";
import SidebarItem from "../SidebarItem/SidebarItem";
import {
	connectWallet,
	getCurrentWalletConnected,
	getDoctor,
} from "../../utils/Interact";
import { WalletContext } from "../../context/WalletContext";

function Sidebar() {
	const [item, setItem] = useState<__NavType>([]);
	const [doctor, setDoctor] = useState("");
	const [nurzes, setNurses] = useState([]);
	const [nurseitem, setNurseItem] = useState<__NavType>([]);
	const [patientItem, setPatientItem] = useState<__NavType>([]);
	const { walletAddress, setWallet, setIsActive, isActive }: any =
		useContext(WalletContext);
	const [connectionSatatus, setConnectionStatus] = useState(true);
	const [errorMsg, setErrorMssg] = useState("");

	const getDoc = async () => {
		const doctor = await getDoctor();
		if (doctor?.success === true) {
			const doc = doctor?.response.toLowerCase();
			setDoctor(doc);
		}
	};
	// const getAllNurs = async () => {
	// 	const allNurses = await getAllNurses()
	// 	if (allNurses?.success === true) {
	// 		const nurs = allNurses?.response;
	// 		console.log(nurs)
	// 		setNurses(nurs);
	// 	}
	// }
	const wal = walletAddress.toLowerCase();

	const nurse1 = "0xc50fA013Ac854fE6cB297Fff0917361722A90f1c";
	const n1 = nurse1.toLowerCase();
	const nurse2 = "0x9DFc87276e0abcea0BF09ED88d7aE6AB9C42a7F8";
	const n2 = nurse2.toLowerCase();

	const nurses = [n1, n2];

	const connectWalletPressed = async () => {
		const response: WalletType = await connectWallet();
		if (response?.status) {
			window.location.reload();
		} else {
			setConnectionStatus(false);
			setErrorMssg(response?.res);
		}
	};

	const handleClick = () => {
		setIsActive(!isActive);
	};

	useEffect(() => {
		const addSection: __NavType = {
			"ADD SECTIONS": [
				{
					route: "/add-nurse",
					icon: "hard-hat",
					text: "Add New Nurse",
				},
				{
					route: "/add-patient",
					icon: "car",
					text: "Add New Patient",
				},
				// {
				// 	route: "/add-inspection",
				// 	icon: "wrench",
				// 	text: "Add Technical Inspection",
				// },
			],
		};

		const viewSection: __NavType = {
			"VIEW SECTIONS": [
				{
					route: "/view-nurse",
					icon: "car",
					text: "View Nurse",
				},
				{
					route: "/view-patient",
					icon: "wrench",
					text: "View Patients",
				},
			],
		};

		const List: __NavType = [
			{
				route: "/",
				icon: "home",
				text: "Dashboard",
			},
			[addSection],
			[viewSection],
		];
		const nurse: __NavType = [
			{
				route: "/profile",
				icon: "car",
				text: "My Profile",
			},
			{
				text: "Add Patient",
				route: "/add-patient",
				icon: "wrench",
			},
			{
				icon: "wrench",
				text: "View Patients",
				route: "/view-patient",
			},
		];
		const patient: __NavType = [
			{
				route: "/user-profile",
				icon: "car",
				text: "My Profile",
			},
			
		];
		const getWallet = async () => {
			const response: WalletType = await getCurrentWalletConnected();
			if (response?.status && response?.res !== undefined) {
				setWallet(response?.res);
			} else {
				setConnectionStatus(false);
				setErrorMssg(response?.res);
			}
		};
		setNurseItem(nurse);
		setPatientItem(patient)
		getDoc();
		getWallet();
		setItem(List);
		// eslint-disable-next-line
	}, []);

	return (
		<div id="sidebar" className={isActive ? "sidebar_responsive" : ""}>
			<div className="sidebar__title">
				<div className="sidebar__img">
					<img src="assets/hospital-logo.png" alt="logo" />
				</div>
				<FontAwesomeIcon icon="times" onClick={handleClick} />
			</div>

			<div className="sidebar__menu">
				{item.map((x: __NavType, i: any) => {
					if (wal === doctor) {
						if (!Array.isArray(x)) {
							return (
								<SidebarItem
									class="sidebar__link active_menu_link"
									icon={x.icon}
									text={x.text}
									route={x.route}
									key={i}
								/>
							);
						} else {
							const sections = x[0];
							const sectionKey = Object.keys(sections)[0];
							return (
								<div key={i}>
									<h2>{sectionKey}</h2>
									{sections[sectionKey].map((y: __NavType, _i: any) => {
										return (
											<SidebarItem
												class="sidebar__link"
												icon={y.icon}
												text={y.text}
												route={y.route}
												key={_i}
											/>
										);
									})}
								</div>
							);
						}
					}
				})}

				{nurses.includes(wal) ? (
					<>
						<SidebarItem
							class="sidebar__link active_menu_link"
							icon="home"
							text="Dashboard"
							route="/dashboard"
						/>
						{nurseitem.map((c: __NavType, k: any) => (
							<SidebarItem
								class="sidebar__link"
								icon={c.icon}
								text={c.text}
								route={c.route}
								key={k}
							/>
						))}
					</>
				) : (
					"Youre not a nurse"
				)}

				{!nurses.includes(wal) && wal !== doctor ? (
					<>
					<SidebarItem
							class="sidebar__link active_menu_link"
							icon="home"
							text="Dashboard"
							route="/dashboard"
						/>
					{patientItem.map((p: __NavType, k: any) => (
						<SidebarItem
						class="sidebar__link"
						icon={p.icon}
						text={p.text}
						route={p.route}
						key={k}
					/>
					))}
					</>
				) : ""}

				{/* {connectionSatatus === false ? (
					<div
						className="sidebar__login error"
						onClick={() => connectWalletPressed()}
					>
						<span>{errorMsg}</span>
					</div>
				) : (
					<>
						{walletAddress === "" ? (
							<div
								className="sidebar__login"
								onClick={() => connectWalletPressed()}
							>
								<span>CLICK TO CONNECT WALLET</span>
							</div>
						) : (
							<div
								className="sidebar__login"
								onClick={() => connectWalletPressed()}
							>
								<span>
									{String(walletAddress).substring(0, 6) +
										"..." +
										String(walletAddress).substring(38)}
								</span>
							</div>
						)}
					</>
				)} */}
			</div>
		</div>
	);
}

export default Sidebar;
