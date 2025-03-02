import Navbar from "../components/Navbar"; 
import HomeSection from "../components/Home";
import ExperienceSection from "../components/Experience";
import AboutSection from "../components/About";
import SkillsSection from "../components/Skills";
import ContactSection from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />      
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
