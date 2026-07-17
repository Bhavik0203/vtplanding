import Header from "./components/Header";
import Hero from "./components/hero";
import ProjectHighlights from "./components/ProjectHighlights";
import FeaturedProject from "./components/projects";
import WhyInvest from "./components/WhyInvest";
import ProjectAmenities from "./components/ProjectAmenities";
import LocationAdvantages from "./components/LocationAdvantages";
import IdealFor from "./components/IdealFor";
import InvestmentBenefits from "./components/InvestmentBenefits";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import AboutVTP from "./components/AboutVTP";
import FAQ from "./components/FAQ";
import HeroContact from "./components/contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProjectHighlights />
      <FeaturedProject />
      <WhyInvest />
      <ProjectAmenities />
      {/* <LocationAdvantages /> */}
      <IdealFor />
      <InvestmentBenefits />
      {/* <Gallery /> */}
      {/* <Testimonials /> */}
      {/* <AboutVTP />
      <FAQ /> */}
      <HeroContact />
      <Footer />
    </main>
  );
}
