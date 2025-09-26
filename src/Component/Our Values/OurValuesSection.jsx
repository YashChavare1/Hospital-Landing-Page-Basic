import "./OurValuesStyle.css";
import CONSTANTS from "../../Constants/Constant";
import doctor1 from "../../assets/Integrity Images/Doctor1.png";
import Doctor2 from "../../assets/Integrity Images/Doctor2.png";
import Doctor3 from "../../assets/Integrity Images/Doctor3.png";
import Doctor4 from "../../assets/Integrity Images/Doctor4.png";


export const OurValuesSection = () => {
    return (
        <div className="valuesContainer">
            <div className="valuesContent">
                <div className="images">
                    <div className="container1">
                        <img src={doctor1} alt="Doctor Image" />
                        <img src={Doctor2} alt="Doctor Image" />
                    </div>
                    <div className="container2">
                        <img src={Doctor3} alt="Doctor Image" />
                        <img src={Doctor4} alt="Doctor Image" />
                    </div>
                </div>
                <div className="text">
                    <div className="heading">
                        <p className="title">{CONSTANTS.INTEGRITY.TITLE}</p>
                        <p className="tagline">{CONSTANTS.INTEGRITY.TAGLINE_1}</p>
                    </div>
                    <div className="tagline">
                        <p>{CONSTANTS.INTEGRITY.TAGLINE_2}</p>
                    </div>
                    <button className="btnContactUs">Contact Us</button>
                </div>
            </div>
        </div>
    );
};