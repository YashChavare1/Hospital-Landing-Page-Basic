import CONSTANTS from "../../Constants/Constant";
import "./FooterStyle.css";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "../../assets/Logos";
import { useState } from "react";

export const Footer = () => {
    const [hoveredLogo, setHoveredLogo] = useState(null);

    return (
        <div className="footerContainer">
            <div className="contentContainer">
                <div className="content">
                    <div className="doctorDetails">
                        <div>
                            <p className="heading">{CONSTANTS.DOCTOR.FIRST_NAME + " " + CONSTANTS.DOCTOR.TITLE}</p>
                            <p className="tagline">The Ultimate destination for all of your medical needs</p>
                        </div>

                        <div className="logos">
                            {CONSTANTS.SOCIALLOGO.map(({ name, Component }) => (
                                <span
                                    key={name}
                                    onMouseEnter={() => setHoveredLogo(name)}
                                    onMouseLeave={() => setHoveredLogo(null)}
                                    style={{ cursor: "pointer", marginRight: 12 }}
                                >
                                    <Component stroke={hoveredLogo === name ? "#FFFFFF" : undefined} />
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="content2">
                        <div className="explore">
                            <div className="heading">Explore</div>
                            <div className="list">
                                <p>Home</p>
                                <p>Surgery</p>
                                <p>OPD</p>
                                <p>Speciality</p>
                                <p>Consultation</p>
                            </div>
                        </div>
                        <div className="aboutUs">
                            <div className="heading">About Us</div>
                            <div className="list">
                                <p>Who we are</p>
                                <p>Our Vision</p>
                                <p>Our Team</p>
                                <p>Terms & Conditions</p>
                                <p>FAQs</p>
                            </div>
                        </div>
                        <div className="contact">
                            <div className="heading">Contact</div>
                            <div className="list">
                                <p>+91 88997 99887</p>
                                <p>hospital@doctor.com</p>
                                <p>Glassplace, Near Apex Avenue, Mumbai</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <p>Copyright 2024 Favorite Doctor, All Rights Reserved</p>
            </div>
        </div>
    );
};