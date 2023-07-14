import SkillSlider from "./SkillSlider";

function Skills() {
  return (
    <div className="bg-primary flex flex-col items-center">
      <h1 className="text-4xl p-4 text-slate-50 font-bold font-sans">
        Tech Skills
      </h1>
      <SkillSlider />
    </div>
  );
}

export default Skills;
