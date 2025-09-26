import { Navbar } from "../src/Component/Navbar/Navbar.jsx";
import { HeroSection } from "../src/Component/HeroSection/HeroSection.jsx";
import { AboutUs } from "./Component/About Us/AboutUs.jsx";
import { OurSpeciality } from "./Component/OurSpeciality/OurSpeciality.jsx";
import { OurValuesSection } from "./Component/Our Values/OurValuesSection.jsx";
import { FeedbackSection } from "./Component/FeedbackSection/FeedbackSection.jsx";
import { Footer } from "./Component/Footer/Footer.jsx";

export const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <OurSpeciality />
      <OurValuesSection />
      <FeedbackSection />
      <Footer />
    </>
  )
}