import { useState, useEffect } from "react";
import aboutImage from '../images/about-me.png'
const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const longBio = `I’m a full-stack software engineer driven by the desire to use technology in solving real-world problems and contributing to meaningful innovation. I specialize in building robust, scalable web applications and have a strong grasp of software development patterns that enable me to tackle complex challenges and quickly adapt to emerging technologies. I value clean code, thoughtful design, and continuous learning as the foundation for writing software that lasts. I’ve worked with modern stacks like React, Angular, Django, Node.js, and PostgreSQL—always focused on creating user-first, efficient solutions. My goal is to not only build software, but to build things that matter—to help businesses grow, users thrive, and ideas become reality.`;

  const shortBio = `I’m a full-stack engineer passionate about building scalable, user-focused solutions using tools like React, Angular, and Django. I thrive on turning ideas into impactful digital products.`;

  return (
    <section
      id="about"
      className="w-full bg-[#F9FAFB] py-20 px-6 flex justify-center"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left: Profile Photo */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={aboutImage}
            alt="Luis Camus portrait"
            className="w-48 h-48 md:w-60 md:h-60 rounded-xl object-cover shadow-xl"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h3 className="text-3xl font-bold text-header mb-6">About Me</h3>
          <p className="text-textc text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
            {isMobile ? shortBio : longBio}
          </p>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;