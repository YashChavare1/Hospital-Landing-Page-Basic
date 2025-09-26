import './HeroSectionStyle.css';
import { IconLocation } from '../../assets/IconLocation.jsx';
import { IconSearch } from '../../assets/IconSearch.jsx';
import ImageFemaleDoctor from '../../assets/ImageFemaleDoctor.png';
import CONSTANTS from '../../Constants/Constant';

export const HeroSection = () => {
    return (
        <div className='heroSectionContainer'>
            <div className="heroContent">
                <div className='heroInfo'>
                    <div className='heroTaglines'>
                        <div id='heroTagline1'>
                            <p>
                                <span id='part1'>{CONSTANTS.HERO_TAGLINE.PART_1} </span>
                                <span id='part2'>{CONSTANTS.HERO_TAGLINE.PART_2}</span>
                            </p>
                        </div>
                        <div id="heroTagline2">
                            <p>{CONSTANTS.ABOUT.WHAT_DOCTOR_DO}</p>
                        </div>
                    </div>
                    <div className="doctorSearch">
                        <div className='searchField'>
                            <div className='IconLocation'>
                                <IconLocation />
                            </div>

                            <div>
                                <input type="text" placeholder={CONSTANTS.SEARCH_FIELD_TEXT} />
                            </div>
                        </div>

                        <div className='btnDoctorSearch'>
                            <button><IconSearch /></button>
                        </div>
                    </div>
                </div>
                <div className='heroImage'>
                    <img src={ImageFemaleDoctor} alt="Doctor Image" />
                </div>
            </div>
        </div>
    );
}