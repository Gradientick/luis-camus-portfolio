import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSections";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import TestimonialsSection from "./components/Testimonials";
function App() {
  return (
    <>
      <NavBar />
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <TestimonialsSection/>
      <ContactSection/>
      <FooterSection/>
    </>
  );
}

export default App;
