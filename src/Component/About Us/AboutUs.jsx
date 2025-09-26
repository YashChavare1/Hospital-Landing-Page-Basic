import './AboutUsStyle.css';
import imageAboutUsDoctor from "../../assets/imageAboutUsDoctor.png"
import CONSTANTS from '../../Constants/Constant';

export const AboutUs = () => {
    return (
        <div className='aboutUsContainer'>
            <div className="aboutUsContent">
                <div className="imageContainer">
                    <img src={imageAboutUsDoctor} alt="Doctor Image" />
                </div>
                <div className="taglineSection">
                    <div className="tagline1">
                        <p id='aboutUsText'>{CONSTANTS.ABOUT.TITLE}</p>
                        <p id='taglineText'>{CONSTANTS.ABOUT.TAGLINE_1}</p>
                    </div>
                    <div className="tagline2">
                        <p>{CONSTANTS.ABOUT.TAGLINE_2}</p>
                    </div>
                    <div className="btnContactUs">
                        <button>{CONSTANTS.CONTACT.TITLE}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};