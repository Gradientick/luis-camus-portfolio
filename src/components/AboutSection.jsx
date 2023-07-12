import React from "react";

function AboutSection() {
  return (
    <div className="bg-primary flex flex-col items-center border-bottom">
      <h1 className="text-4xl p-4 text-slate-50 font-bold font-sans">About</h1>
      <p className="p-1 max-w-xs text-center font-light">
        I am a <span className="border-bot">Full Stack Web Developer</span>,
        passionate about creating innovative and user-friendly websites that
        leave a lasting impression. With keen eye for design and a deep
        understanding of web technologies, I strive to deliver exceptional
        digital preferences
      </p>
    </div>
  );
}

export default AboutSection;
