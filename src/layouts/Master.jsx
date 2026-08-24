import HeroSection from "../components/HeroSection";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import PortfolioSection from "../sections/PortfolioSection";
import ServicesSection from "../sections/ServicesSection";
import Footer from "./Footer";
import Navbar from "./Navbar";
function Master (){
   return(<>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <PortfolioSection/>
    <ServicesSection/>
    <ContactSection/>
    <Footer/>
   
   </>);
}
export default Master;