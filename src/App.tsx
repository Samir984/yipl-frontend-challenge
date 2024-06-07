import AboutUsSection from "./component/AboutUsSection";
import CampaignSection from "./component/CampaignSection";
import CompaniesSection from "./component/CompaniesSection";
import ContactFormSection from "./component/ContactFormSection";
import CopywriteSection from "./component/CopywriteSection";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import NewSection from "./component/NewSection";
import ResourceSection from "./component/ResourceSection";

export default function App() {
  return (
    <>
      <HeroSection />
      <CampaignSection />
      <AboutUsSection />
      <CompaniesSection />
      <NewSection />
      <ResourceSection />
      <ContactFormSection />
      <Footer />
      <CopywriteSection />
    </>
  );
}
