import { useState, useEffect, useContext } from "react";
import Select from "../../../components/Base/Select";
import Button from "../../../components/Base/Button";
import Loader from "../../../components/Base/Loader";
import { DataContext } from "../../../context/DataContext";
import Validate from "../../../utils/Validate";
// mport { addInspection } from "../../../utils/Interact";
import Warning from "../../../components/Base/Warning";
import { WalletContext } from "../../../context/WalletContext";

const Profile = () => {
	const [nurz, setNurz] = useState([]);
	const { nurses }: any = useContext(DataContext);
	const { walletAddress }: any = useContext(WalletContext);
	const [loader, setLoader] = useState(false);

	const addInspections = async () => {
		setLoader(true);
		
	};

	useEffect(() => {
		nurses.map((item: any) => {
			if (item[1].toLowerCase() === walletAddress.toLowerCase()) {
				setNurz(item);
			}
		});
	}, [nurses]);

	console.log(nurz);

	return (
		<div className="main__container">
			{nurz.length !== 0 ? (
				<div className="section__card">
					<div className="section__title">
						<div>
							<h1>
								Profile for <span style={{ fontSize: "16px" }}>{nurz[1]}</span>
							</h1>
							<p>Here is your hospital profile</p>
						</div>
					</div>
					<div style={{ marginTop: "2rem" }}>
						<h3>
							Name: <span style={{ fontSize: "16px" }}>{nurz[2]}</span>
						</h3>
						<h3>
							Specialization:{" "}
							<span style={{ fontSize: "16px" }}>{nurz[4]}</span>
						</h3>
						<h3>
							Rank: <span style={{ fontSize: "16px" }}>{nurz[3]}</span>
						</h3>
						<h3>
							Date: <span style={{ fontSize: "16px" }}>{nurz[5]}</span>
						</h3>
					</div>
					<div className="form"></div>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Profile;
