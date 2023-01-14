import { useContext } from "react";
import TBody from "../../components/Base/TBody";
import { DataContext } from "../../context/DataContext";

const Car = () => {
	const { cars, nurses }: any = useContext(DataContext);
	return (
		<div className="main__container">
			<div className="section__card">
				<div className="section__title">
					<div>
						<h1>View All Nurses</h1>
						<p>The Table Below Displays the List of all Nurses</p>
					</div>
				</div>
				<div>
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Address</th>
								<th>Name</th>
								<th>Specialization</th>
								<th>Rank</th>
								<th>Date (DOE)</th>
							</tr>
						</thead>
						<tbody>
							{nurses.length !== 0 ? (
								<>
									{nurses.map((ns: any, key: any) => (
										<tr key={key}>
											<td>{ns.itemId}</td>
											<td>
												<span>
													{String(ns.nurseAddress).substring(0, 6) +
														"..." +
														String(ns.nurseAddress).substring(38)}
												</span>
											</td>
											<td>{ns.name}</td>
											<td>{ns.spzn}</td>
											<td>{ns.rank}</td>
											<td>{ns.date}</td>
										</tr>
									))}
								</>
							) : (
								<> No Record Yet </>
							)}
						</tbody>
						{/* {cars.length !== 0 ? <TBody item={cars} /> : <> No Record Yet</>} */}
					</table>
				</div>
			</div>
		</div>
	);
};

export default Car;
