import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WalletType, _Wallet } from "../../../types/Wallet";
import {
	connectWallet,
	getCurrentWalletConnected,
} from "../../../utils/Interact";
import { WalletContext } from "../../../context/WalletContext";

const Login = () => {
	const [connectionSatatus, setConnectionStatus] = useState(true);
	const [errorMsg, setErrorMssg] = useState("");
	const { walletAddress, setWallet, setIsActive, isActive }: any =
		useContext(WalletContext);

	const navigate = useNavigate()

	const wallets: _Wallet = [
		{
			name: "Metamask",
			link: "https://app.uniswap.org/static/media/metamask.02e3ec27.png",
		},
		{
			name: "Trust Wallet",
			link: "https://trustwallet.com/assets/images/media/assets/trust_platform.svg",
		},
		{
			name: "Coinbase",
			link: "https://app.uniswap.org/static/media/coinbaseWalletIcon.a3a7d7fd.svg",
		},
	];

	const connectWalletPressed = async () => {
		const response: WalletType = await connectWallet();
		if (response?.status === true) {
			navigate("/dashboard")
		} else {
			setConnectionStatus(false);
			setErrorMssg(response?.res);
		}
		console.log(connectionSatatus)
	};
	
	return (
		<div className="login_container">
			<div className="login_wrapper">
				<div className="">
					<div className=""></div>
					<div className=""></div>
				</div>

				<div className="login_wrap">
					<div className="login_">
						<h2 className="login_title">Connect Wallet to Access Hospital</h2>
						<div className="wallet_wrapper">
							{walletAddress === "" || undefined || null ? (
								<>
									{wallets.map((wal: _Wallet, key: any) => (
										<a key={key}>
											<div
												className="wallet"
												onClick={() => connectWalletPressed()}
											>
												<img src={wal.link} width={30} />
												<h4 className="wallet_title">{wal.name}</h4>
											</div>
										</a>
									))}
									<span>{errorMsg}</span>
								</>
							) : (
								<div className="sidebar__login">
									Connected
									{/* <span>
										{String(walletAddress).substring(0, 6) +
											"..." +
											String(walletAddress).substring(38)}
									</span> */}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
