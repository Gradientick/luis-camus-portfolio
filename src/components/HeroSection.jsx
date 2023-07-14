import React from "react";
import dev from "../images/dev.png";
function HeroSection() {
  return (
    <div className="bg-primary h-96 flex flex-col justify-center items-center gap-3 ">
      <div className="bg-secondary w-56 rounded-full shadow-lg overflow-clip transition-all hover:bg-header">
        <img
          src={dev}
          alt="photo of the developer"
          className="w-56 rounded-full "
        />
      </div>
      <h2 className="text-header font-sans text-4xl font-bold border-bot">
        Luis Camus
      </h2>
      <p className="text-textc font-semibold font-sans">
        "Molding the Web to Your Needs"
      </p>
    </div>
  );
}

export default HeroSection;
