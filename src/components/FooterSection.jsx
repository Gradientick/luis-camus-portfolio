const FooterSection = () => {
    return (
      <footer className="w-full bg-white border-t border-gray-200 py-6 px-6 text-center">
        <p className="text-textc text-sm">
          © {new Date().getFullYear()} Luis Camus. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-2 text-sm text-textc">
          <a
            href="#hero"
            className="hover:underline hover:text-header transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:underline hover:text-header transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:underline hover:text-header transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:underline hover:text-header transition"
          >
            Contact
          </a>
        </div>
      </footer>
    );
  };
  
  export default FooterSection;