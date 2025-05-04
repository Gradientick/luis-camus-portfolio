const ProjectCard = ({ title, description, tech, github, video }) => {
    return (
      <div className="relative group w-full bg-white rounded-xl shadow-md overflow-hidden">
        {/* Hover video preview */}
        <video
          src={video}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        />
  
        {/* Card Content */}
        <div className="relative z-10 bg-white/80 backdrop-blur-sm p-6 group-hover:bg-white/60 transition-colors duration-300">
          <h4 className="text-xl font-semibold text-header mb-2">{title}</h4>
          <p className="text-textc mb-4">{description}</p>
          <p className="text-sm text-textc font-medium mb-2">
            <span className="font-semibold">Tech Used:</span> {tech.join(", ")}
          </p>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    );
  };

  export default ProjectCard