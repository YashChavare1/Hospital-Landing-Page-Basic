import IconDentistry from "../assets/Speciality Icons/IconDentistry.png"
import IconGeneralDiagnosis from "../assets/Speciality Icons/IconGeneralDiagnosis.png";
import IconNeuroSurgery from "../assets/Speciality Icons/IconNeuroSurgery.png";
import IconCardiology from "../assets/Speciality Icons/IconCardiology.png";
import IconPharmacy from "../assets/Speciality Icons/IconPharmacy.png";
import IconTrainedStaff from "../assets/Speciality Icons/IconTrainedStaff.png";
import IconDnaMapping from "../assets/Speciality Icons/IconDnaMapping.png";
import IconOphthalmology from "../assets/Speciality Icons/IconOphthalmology.png";
import IconMedicalAid from "../assets/Speciality Icons/IconMedicalAid.png";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "../assets/Logos";


const CONSTANTS = {
  DOCTOR: {
    FIRST_NAME: "Purelife",
    TITLE: "Hospital",
  },
  NAVBAR: {
    TABS: ["Home", "Specialties", "Doctors", "OPD", "Login"],
    BOOK_NOW: "Book Now",
  },
  HERO_TAGLINE: {
    PART_1: "Get Expert",
    PART_2: "Medical Consultation!",
  },
  SEARCH_FIELD_TEXT: "Search Doctors in your location",
  ABOUT: {
    WHAT_DOCTOR_DO:
      "Our doctors provide expert medical advice and consultation. Get in touch with our team to discuss.",
    TITLE: "About Us",
    TAGLINE_1: "World-Class Preventive, Prescriptive & Curative Medical Practices",
    TAGLINE_2:
      "Being in the healthcare sector, we consider it our paramount duty to ensure the safety of our patients, the effectiveness of our treatments, transparency in our practices, and absolute timely care.",
  },
  CONTACT: {
    TITLE: "Contact Us",
  },
  SPECIALITY: {
    TITLE: "Our Speciality",
    TAGLINE: "We provide the world class services with the best medical team!",
    LIST: [
      { icon: IconDentistry, title: "Dentistry", tagline: "Get consultation from our Dentistry team" },
      { icon: IconGeneralDiagnosis, title: "General Diagnosis", tagline: "Get consultation from our General Diagnosis team" },
      { icon: IconNeuroSurgery, title: "Neurosurgery", tagline: "Get consultation from our Neurosurgery team" },
      { icon: IconCardiology, title: "Cardiology", tagline: "Get consultation from our Cardiology team" },
      { icon: IconPharmacy, title: "Pharmacy", tagline: "Get consultation from our Pharmacy team" },
      { icon: IconTrainedStaff, title: "Trained Staff", tagline: "Get consultation from our Trained Staff team" },
      { icon: IconDnaMapping, title: "DNA Mapping", tagline: "Get consultation from our DNA Mapping team" },
      { icon: IconOphthalmology, title: "Ophthalmology", tagline: "Get consultation from our Ophthalmology team" },
      { icon: IconMedicalAid, title: "Medical Aid", tagline: "Get consultation from our Emergency Medical Aid team" },
    ],
  },
  INTEGRITY: {
    TITLE: "Integrity",
    TAGLINE_1: "Our Stellar Values",
    TAGLINE_2:
      "The cornerstone of our establishment is to ensure that the benefits of exceptional medical services reach people without discrimination. We uphold this philosophy through our stellar values, which form the pillars of every service we provide under the banner of our prestigious hospital.",
  },
  FEEDBACK: {
    TAGLINE_1: "Read Feedback About Our Services and Wonderful Team!",
    TAGLINE_2: "We care for our patients as if they were family. Hear directly from them by reading their testimonials.",
  },
  SOCIALLOGO: [
    { name: "facebook", Component: FacebookLogo },
    { name: "twitter", Component: TwitterLogo },
    { name: "instagram", Component: InstagramLogo }
  ],
};

export default CONSTANTS;
