import AboutSection from "./components/AboutSection";

import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Spacer from "./components/Spacer";
import Work from "./components/Work";
function App() {
  return (
    <>
      <NavBar />
      <Spacer />
      <HeroSection />
      <AboutSection />
      <Skills />
      <Work />
      <Footer />
    </>
  );
}

export default App;
