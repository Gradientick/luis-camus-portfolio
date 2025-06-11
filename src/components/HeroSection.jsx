import dev from "../images/dev1.webp";
function HeroSection() {
  return (
    <div className="bg-primary hero-section flex flex-col justify-center items-center gap-4 py-12">
  <div className="bg-secondary w-56 rounded-full shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
    <img
      src={dev}
      alt="Photo of Luis Camus"
      className="w-full h-full object-cover"
    />
  </div>
  <h2 className="text-header font-sans text-4xl font-bold tracking-tight">
    Luis Camus
  </h2>
  <p className="text-textc font-medium font-sans text-center max-w-lg text-lg px-4">
    Building Purpose-Driven Websites That Work for You
  </p>
</div>
  );
}

export default HeroSection;
