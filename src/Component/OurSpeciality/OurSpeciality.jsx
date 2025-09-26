import './OurSpecialityStyle.css';
import CONSTANTS from "../../Constants/Constant";

export const OurSpeciality = () => {
    return (
        <div className='specialityContainer'>
            <div className="specialityContent">
                <div className="heading">
                    <p className='headingText'>{CONSTANTS.SPECIALITY.TITLE}</p>
                    <p className='tagline'>{CONSTANTS.SPECIALITY.TAGLINE}</p>
                </div>
                <div className="speciality">
                    {CONSTANTS.SPECIALITY.LIST.map((service, index) => (
                        <div className="serviceCard" key={index}>
                            <div className="icon"><img src={service.icon} alt={service.title} /></div>
                            <div className="text">
                                <p className='title'>{service.title}</p>
                                <p className='tagline'>{service.tagline}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};