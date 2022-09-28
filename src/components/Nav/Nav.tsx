import { useContext } from "react";
import { WalletContext } from "../../context/WalletContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  const { walletAddress, setIsActive, isActive }: any =
    useContext(WalletContext);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="nav_icon">
        <FontAwesomeIcon icon="bars" onClick={handleClick} />
      </div>
      <div className="navbar__right">
        {String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)}
      </div>
    </nav>
  );
}

export default Nav;
