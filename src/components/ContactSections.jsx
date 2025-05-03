const ContactSection = () => {
    return (
      <section
        id="contact"
        className="w-full bg-[#F9FAFB] py-20 px-6 flex justify-center"
      >
        <div className="max-w-xl w-full text-center">
          <h3 className="text-3xl font-bold text-header mb-6">Contact Me</h3>
          <p className="text-textc text-lg mb-8">
            Have a project in mind or just want to say hi? Let’s connect!
          </p>
  
          <a
            href="mailto:your-email@example.com"
            className="inline-block bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-white hover:text-[#2563EB] border border-[#2563EB] transition"
          >
            Send Me an Email
          </a>
  
          <div className="flex justify-center gap-6 mt-8">
            {/* Replace these with your actual links */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-header hover:text-blue-600 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-header hover:text-blue-600 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-header hover:text-blue-600 transition"
            >
              Twitter
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;