import "./header.css";
import LOGO from "../../../assets/images/logo/music-logo-1.png";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-logo-section">
          <img src={LOGO} alt="music-player-logo" />
          <h3 className="logo-text">Music Player</h3>
        </div>
      </div>
    </>
  );
};

export default Header;
