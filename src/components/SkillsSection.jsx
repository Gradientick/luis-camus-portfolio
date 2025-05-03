const skills = [
  "JavaScript",
  "React",
  "Angular",
  "Node.js",
  "Django",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "PostgreSQL",
  "Git & GitHub",
  "REST APIs",
  "Responsive Design",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full bg-white py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        <h3 className="text-3xl font-bold text-header mb-10">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] shadow-md rounded-lg py-4 px-6 text-textc font-medium hover:shadow-xl transition-shadow duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;