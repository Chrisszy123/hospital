import ABI from "../ABI.json";
import Web3 from "web3";
const { ethereum }: any = window;
const web3 = new Web3(ethereum);
const contractAddress = "0x229A88D9804532c7eA8B3bB817379b404737bED7";
const ABI_VALUE: any = ABI;
const contract = new web3.eth.Contract(ABI_VALUE, contractAddress);

export const connectWallet = async () => {
	if ((window as any).ethereum) {
		try {
			const addressArray = await (window as any).ethereum.request({
				method: "eth_requestAccounts",
			});
			const status = await checkChainID();
			if (status === true) {
				const obj = {
					res: addressArray[0],
					status: true,
				};
				return obj;
			} else {
				const obj = {
					res: "Please Connect to Georli",
					status: false,
				};
				return obj;
			}
		} catch (err: any) {
			return {
				res: "User Rejected Request",
				false: false,
			};
		}
	}
};

const checkChainID = async () => {
	const chainid = await web3.eth.net.getId();
	if (chainid === 5) {
		return true;
	} else {
		return false;
	}
};

export const getCurrentWalletConnected = async () => {
	if ((window as any).ethereum) {
		try {
			const addressArray = await (window as any).ethereum.request({
				method: "eth_accounts",
			});
			const status = await checkChainID();
			if (status === true) {
				const obj = {
					res: addressArray[0],
					status: true,
				};
				return obj;
			} else {
				const obj = {
					res: "Please Connect to Goerli",
					status: false,
				};
				return obj;
			}
		} catch (err: any) {
			return {
				res: "",
				status: true,
			};
		}
	}
};
// get owner(doctor)
export const getDoctor = async () => {
	try {
		const response = await contract.methods.owner().call();
		console.log(response);
		return {
			success: true,
			response,
		};
	} catch (e: any) {
		return {
			success: true,
			response: "OOP Error occured while getting doctor",
		};
	}
};

export const getAllPatients = async () => {
	if ((window as any).ethereum) {
		const status = await checkChainID();
		if (status === true) {
			try {
				const response = await contract.methods.getAllPatients().call();
				return {
					success: true,
					response,
				};
			} catch (error: any) {
				return {
					success: false,
					response: "😥 Something went wrong: " + error.message,
				};
			}
		}
	}
};

export const getAllNurses = async () => {
	if ((window as any).ethereum) {
		const status = await checkChainID();
		if (status === true) {
			try {
				const response = await contract.methods.getAllNurse().call();
				return {
					success: true,
					response,
				};
			} catch (error: any) {
				return {
					success: false,
					response: "😥 Something went wrong: " + error.message,
				};
			}
		}
	}
};

// export const getAllInspection = async () => {
//   if ((window as any).ethereum) {
//     const status = await checkChainID();
//     if (status === true) {
//       try {
//         const response = await contract.methods.getAllInspection().call();
//         return {
//           success: true,
//           response,
//         };
//       } catch (error: any) {
//         return {
//           success: false,
//           response: "😥 Something went wrong: " + error.message,
//         };
//       }
//     }
//   }
// };

export const getNursesCount = async () => {
	if ((window as any).ethereum) {
		const status = await checkChainID();
		if (status === true) {
			try {
				const response = await contract.methods.getNurseCount().call();
				return {
					success: true,
					response,
				};
			} catch (error: any) {
				return {
					success: false,
					response: "😥 Something went wrong: " + error.message,
				};
			}
		}
	}
};

export const addNurse = async (
	worker: string,
	date: string,
	name: string,
	rank: Number,
	spzn: string
) => {
	if ((window as any).ethereum) {
		const status = await checkChainID();
		if (status === true) {
			try {
				console.log(worker, date, name, rank, spzn);
				const accounts = await web3.eth.getAccounts();
				const response = await contract.methods
					.addNurse(worker, date, name, rank, spzn)
					.send({
						from: accounts[0],
					});
				return {
					success: true,
					response,
				};
			} catch (error: any) {
				console.log(error);
				return {
					success: false,
					response: "😥 Something went wrong: " + error.message,
				};
			}
		}
	}
};

export const addPatient = async (
	pid: Number,
	hid: Number,
	addr: string,
	name: string,
	age: Number,
	history: string,
	prescription: string,
	date: string
) => {
	if ((window as any).ethereum) {
		try {
			const accounts = await web3.eth.getAccounts();

			const response = await contract.methods
				.addPatient(hid, addr, name, age, history, prescription, date)
				.send({
					from: accounts[0],
				});
			return {
				success: true,
				response,
			};
		} catch (error: any) {
			return {
				success: false,
				response: "😥 Something went wrong: " + error.message,
			};
		}
	}
};

// export const addInspection = async (vin: string) => {
//   if ((window as any).ethereum) {
//     try {
//       const accounts = await web3.eth.getAccounts();
//       var today = new Date().toISOString().slice(0, 10);
//       const response = await contract.methods.addInspection(vin, today).send({
//         from: accounts[0],
//       });
//       return {
//         success: true,
//         response,
//       };
//     } catch (error: any) {
//       return {
//         success: false,
//         response: "😥 Something went wrong: " + error.message,
//       };
//     }
//   }
// };

export const getPatient = async (hid: Number) => {
	if ((window as any).ethereum) {
		try {
			const response = await contract.methods.getPatient(hid).call();
			return {
				success: true,
				response,
			};
		} catch (error: any) {
			return {
				success: false,
				response: "😥 Something went wrong: " + error.message,
			};
		}
	}
};
