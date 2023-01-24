import { useContext } from "react";
import TBody from "../../components/Base/TBody";
import { DataContext } from "../../context/DataContext";

const ViewPatient = () => {
	const { patient }: any = useContext(DataContext);
	console.log(patient);
	return (
		<div className="main__container">
			<div className="section__card">
				<div className="section__title">
					<div>
						<h1>View All Patients</h1>
						<p>The Table Below Displays the List of all Patients</p>
					</div>
				</div>
				<div>
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Address</th>
								<th>Name</th>
								<th>Age</th>
								<th>History</th>
								<th>Prescription</th>
							</tr>
						</thead>
						{patient.length !== 0 ? (
							<>
              {patient.map((ps: any, key: any) => (
										<tr key={key}>
											<td>{ps.patientId}</td>
											<td>
												<span>
													{String(ps.addr).substring(0, 6) +
														"..." +
														String(ps.addr).substring(38)}
												</span>
											</td>
											<td>{ps.name}</td>
											<td>{ps.age}</td>
											<td>{ps.history}</td>
											<td>{ps.prescription}</td>
										</tr>
									))}
              
              </>
						) : (
							<> No Record Yet</>
						)}
					</table>
				</div>
			</div>
		</div>
	);
};

export default ViewPatient;
