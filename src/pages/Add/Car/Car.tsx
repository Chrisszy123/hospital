import { useState } from "react";
import Input from "../../../components/Base/Input";
import Loader from "../../../components/Base/Loader";
import Button from "../../../components/Base/Button";
import Validate from "../../../utils/Validate";
import { addPatient } from "../../../utils/Interact";
import Warning from "../../../components/Base/Warning";

const Car = () => {
	const [name, setName] = useState("");
	const [addr, setAddress] = useState("");
	const [hid, setHid] = useState(0);
	// const [pid, setPid] = useState(0);
	const [age, setAge] = useState(0);
	const [date, setDate] = useState("");
	const [history, setHistory] = useState("");
	const [prescription, setPrescription] = useState("");
	const [loader, setLoader] = useState(false);

	const addCar = async () => {
		setLoader(true);
		try {
			if (Validate(name).empty() && Validate(history).empty()) {
				const response = await addPatient(
					hid,
					addr,
					name,
					age,
					history,
					prescription,
					date
				);
				if (response?.success === true) {
					window.location.reload();
				}
			}
		} catch (err) {
			console.log(err);
		}
	};

	const generateVIN = () => {
		const random = Math.round(Math.random() * (1001 - 100000) + 100000);
		return random;
	};

	return (
		<div className="main__container">
			<div className="section__card">
				<div className="section__title">
					<div>
						<h1>Add New Patient</h1>
						<p>Fill in the Form to Add New Patient</p>
					</div>
				</div>
				<div className="form">
					<Input
						placeholder="Enter Patient Hospital Number"
						type="number"
						action={setHid}
					/>
					<Input
						placeholder="Enter Patient Address"
						type="text"
						action={setAddress}
					/>
					<Input
						placeholder="Enter Patient Name"
						type="text"
						action={setName}
					/>
					<Input
						placeholder="Enter Date of Admission"
						type="text"
						action={setDate}
					/>
					<Input
						placeholder="Enter Patient Age"
						type="number"
						action={setAge}
					/>
					{/* <Input
            placeholder="Enter Patient History"
            type="text"
            action={setColor}
          /> */}
					<textarea
						onChange={(e) => setHistory(e.target.value)}
						placeholder="Enter Patient History"
						style={{
							border: "1px solid #eee",
							padding: "1rem",
							borderRadius: "8px",
							width: "90%",
							height: "70px",
							margin: "10px 0 10px 0",
						}}
					></textarea>
					<textarea
						onChange={(e) => setPrescription(e.target.value)}
						placeholder="Enter Patient Prescription"
						style={{
							border: "1px solid #eee",
							padding: "1rem",
							borderRadius: "8px",
							width: "90%",
							height: "70px",
							margin: "10px 0 10px 0",
						}}
					></textarea>
					<br />
					<Warning text="Only Doctor can Add Patient" />

					<Loader status={loader} />

					<Button
						text="Add Patient"
						disabled={
							true ? !name || !age || !history || !prescription || !date : false
						}
						action={addCar}
					/>
				</div>
			</div>
		</div>
	);
};

export default Car;
