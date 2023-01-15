import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from '../../context/DataContext';
import { WalletContext } from '../../context/WalletContext';

const UserProfile = () => {
	const [patientz, setPatient] = useState([])
    const { cars, patient }: any = useContext(DataContext);
	const { walletAddress }: any = useContext(WalletContext);


	useEffect(()=> {
		console.log(walletAddress)

		patient.map((item: any) => {
			console.log(item[2])
			if (item[2].toLowerCase() === walletAddress.toLowerCase()) {
				console.log(item)
				setPatient(item);
			}
		});
	}, [patient])
  return (
    <div className="main__container">
			{patientz.length !== 0 ? (
				<div className="section__card">
					<div className="section__title">
						<div>
							<h1>
								Profile for <span style={{ fontSize: "16px" }}>{patientz[2]}</span>
							</h1>
							<p>Here is your hospital profile</p>
						</div>
					</div>
					<div style={{ marginTop: "2rem" }}>
					<h3>
							Hospital Id: <span style={{ fontSize: "16px" }}>{patientz[1]}</span>
						</h3>
						<h3>
							Name: <span style={{ fontSize: "16px" }}>{patientz[3]}</span>
						</h3>
						<h3>
							Prescription:{" "}
							<span style={{ fontSize: "16px" }}>{patientz[6]}</span>
						</h3>
						<h3>
							Date: <span style={{ fontSize: "16px" }}>{patientz[7]}</span>
						</h3>
						<h3>
							Health History: <span style={{ fontSize: "16px" }}>{patientz[5]}</span>
						</h3>
					</div>
					<div className="form"></div>
				</div>
			  ) : (
				""
			)} 
		</div>
  )
}

export default UserProfile