import ABI from "../ABI.json";
import Web3 from "web3";
const { ethereum }: any = window;
const web3 = new Web3(ethereum);
const contractAddress = "0xEba51A0091A8FE7ba3400b65f3B12Dba8b12d2f5";
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
          res: "Please Connect to Rinkeby",
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
  if (chainid === 4) {
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
          res: "Please Connect to Rinkeby",
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

export const getAllCars = async () => {
  if ((window as any).ethereum) {
    const status = await checkChainID();
    if (status === true) {
      try {
        const response = await contract.methods.getAllCars().call();
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

export const getAllInspection = async () => {
  if ((window as any).ethereum) {
    const status = await checkChainID();
    if (status === true) {
      try {
        const response = await contract.methods.getAllInspection().call();
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

export const getServiceWorkerCount = async () => {
  if ((window as any).ethereum) {
    const status = await checkChainID();
    if (status === true) {
      try {
        const response = await contract.methods.getServiceWorkerCount().call();
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

export const addServiceWorker = async (worker: string) => {
  if ((window as any).ethereum) {
    const status = await checkChainID();
    if (status === true) {
      try {
        const accounts = await web3.eth.getAccounts();
        const response = await contract.methods.addWorker(worker).send({
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
  }
};

export const addVehicle = async (vin: Number, name: string, color: string) => {
  if ((window as any).ethereum) {
    try {
      const accounts = await web3.eth.getAccounts();

      const response = await contract.methods.addCar(vin, name, color).send({
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

export const addInspection = async (vin: string) => {
  if ((window as any).ethereum) {
    try {
      const accounts = await web3.eth.getAccounts();
      var today = new Date().toISOString().slice(0, 10);
      const response = await contract.methods.addInspection(vin, today).send({
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

export const getCarDetails = async (vin: string) => {
  if ((window as any).ethereum) {
    try {
      const response = await contract.methods.getCar(vin).call();
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
