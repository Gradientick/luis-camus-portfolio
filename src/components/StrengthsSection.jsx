const StrengthsSection = () => {
  return (
    <section id="strengths" className="w-full bg-white py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Strengths Column */}
        <div>
          <h3 className="text-3xl font-bold text-header mb-4">Top 5 Strengths</h3>
          <p className="text-textc text-lg mb-6">
            According to the Gallup CliftonStrengths assessment, these are the qualities that define how I work and solve problems:
          </p>
          <ul className="space-y-3 text-left text-textc">
            <li><strong>1. Arranger:</strong> I love organizing, coordinating, and optimizing resources.</li>
            <li><strong>2. Strategic:</strong> I quickly identify patterns and determine the best path forward.</li>
            <li><strong>3. Input:</strong> I’m intellectually curious and constantly learning.</li>
            <li><strong>4. Restorative:</strong> I enjoy identifying problems and finding efficient fixes.</li>
            <li><strong>5. Relator:</strong> I value close relationships and collaborate well in teams.</li>
          </ul>
        </div>

        {/* Skills Column */}
        <div>
          <h3 className="text-3xl font-bold text-header mb-4">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "JavaScript", "React", "Angular", "Node.js",
              "Django", "HTML5", "CSS3", "Tailwind CSS"
            ].map((skill, i) => (
              <div key={i} className="bg-[#f9f9f9] px-4 py-2 rounded-md shadow text-center font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StrengthsSection;