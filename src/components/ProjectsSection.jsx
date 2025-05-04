const projects = [
    {
      title: "CafeCollect",
      description:
        "A digital loyalty card and promotions platform for cafes and restaurants. Built to help local businesses engage repeat customers with ease.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      link: "https://your-live-demo-link.com", // replace with actual link
      github: "https://github.com/yourusername/cafecollect",
    },
    {
      title: "Econ Stat Integrity Experiment",
      description:
        "A lightweight React-based web app designed as a behavioral research tool to evaluate participant integrity in a controlled experimental setting. Users interact with randomized visual stimuli (colored balls), then self-report outcomes via a Google Form. Originally built for online use in academic environments where in-person experiments were not possible, this tool helps measure statistical honesty under minimal supervision.",
      tech: ["React", "Tailwind CSS", "Google Forms"],
      link: "https://econ-stat-experiment.web.app",
      github: "https://github.com/Gradientick/econ-stat-experiment",
    },
    {
      title: "NFC Portfolio Card",
      description:
        "A tap-enabled NFC business card that directs users to a personal portfolio, built for networking and fast sharing.",
      tech: ["React", "Netlify", "NFC Tools"],
      link: "https://econ-stat-experiment.web.app",
      github: "https://github.com/yourusername/nfc-portfolio",
    },
  ];

  const ProjectsSection = () => {
    return (
      <section id="projects" className="w-full bg-[#F9FAFB] py-20 px-6 flex justify-center">
        <div className="max-w-6xl w-full flex flex-col items-center">
          <h3 className="text-3xl font-bold text-header mb-10">Projects</h3>
          <div className="w-full grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
                <h4 className="text-xl font-semibold text-header mb-2">{project.title}</h4>
                <p className="text-textc mb-4">{project.description}</p>
                <p className="text-sm text-textc font-medium mb-2">
                  <span className="font-semibold">Tech Used:</span> {project.tech.join(", ")}
                </p>
                <div className="flex gap-4 mt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProjectsSection;