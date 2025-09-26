import './FeedbackStyle.css';
import CONSTANTS from "../../Constants/Constant";
import IconRight from "../../assets/IconRight.png"
import IconLeft from "../../assets/IconLeft.png"
import IconDoubleQuote from '../../assets/IconDoubleQuote.png';
import IconProfile from "../../assets/IconProfile.png";
import { DoubleQuotes } from '../../assets/Logos';
import { useState } from "react";

export const FeedbackSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className='feedbackContainer'>
            <div className="feedbackContent">
                <div className="textContent">
                    <div className="heading">
                        <p className="tagline1">{CONSTANTS.FEEDBACK.TAGLINE_1}</p>
                        <p className="tagline2">{CONSTANTS.FEEDBACK.TAGLINE_2}</p>
                    </div>
                    <div className="buttons">
                        <img src={IconLeft} alt="left button" />
                        <img src={IconRight} alt="right button" />
                    </div>
                </div>
                <div className="reviews">
                    {[1, 2, 3, 4].map((_, id) => {
                        const isHovered = hoveredIndex === id;

                        return (
                            <div
                                className='reviewCard'
                                key={id}
                                onMouseEnter={() => setHoveredIndex(id)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="message">
                                    <DoubleQuotes fill={isHovered ? "#FFFFFF" : undefined} />
                                    <p>Amazing team and amazing treatment from the best doctor in the world</p>
                                </div>
                                <div className="user">
                                    <img src={IconProfile} alt="Patient Image" />
                                    <div className='userDetails'>
                                        <p className='name'>Michael</p>
                                        <p className='type'>Patient</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};