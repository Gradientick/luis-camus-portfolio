import AboutSection from "./components/AboutSection";
import DownloadResume from "./components/DownloadResume";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";
function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <DownloadResume />
      <AboutSection />
      <Skills />
      <Work />
    </>
  );
}

export default App;
