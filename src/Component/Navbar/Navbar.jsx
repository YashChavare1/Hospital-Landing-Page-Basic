import CONSTANTS from "../../Constants/Constant";
import './NavbarStyle.css';

export const Navbar = () => {
  return (
    <div id="navbarComponent">
      <div id="navbar">
        <div className="title">
          <p id="titleText">
            <span id="doctorName">{CONSTANTS.DOCTOR.FIRST_NAME}</span> {CONSTANTS.DOCTOR.TITLE}
          </p>
        </div>
        <div className="menu">
            {CONSTANTS.NAVBAR.TABS.map((tab, index) => (
              <li key={index}>{tab}</li>
            ))}
        </div>
        <div className="btnBookNow">
          <button>{CONSTANTS.NAVBAR.BOOK_NOW}</button>
        </div>
      </div>
    </div>
  );
};
