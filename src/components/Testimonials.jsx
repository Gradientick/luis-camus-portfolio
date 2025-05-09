import benjie from '../images/testimonials/benjie.jpg'

const testimonials = [
    {
      name: "Benjie Angeles",
      role: "Junior Software Engineer",
      feedback:
        "Luis was my classmate in Kodego and my colleague in PulsarSD. We did a couple of practice exercises and I can tell that he is very professional when at work and a fun dude outside of work.",
      avatar: benjie, // Optional: your path to image
      link: "",
    },
    {
      name: "Michael Andrew Paz",
      role: "Software Engineer, Career TEAM",
      feedback:
        "I worked with him during my early days training for web development. There was this paired project making where we were tasked to create a simple ststic website that has some typical e-commerce services we see from typical shopping sites we see nowadays",
      avatar: "",
      link: "https://www.linkedin.com/in/michael-andrew-paz-012651245/",
    },
    {
      name: "Jason Ralf B. Merjilla",
      role: "Graduate, University of the Philippines - Los Baños",
      feedback:
        "Luis helped me with my university thesis, creating an application to disseminate information and collect social experiment results from respondents. His provided value was recognized even by my adviser who was a veteran in terms of socio-economic experimentations.",
      avatar: "",
      link: "https://www.linkedin.com/in/jason-ralf-merjilla-a94900282/",
    },
  ];

  const TestimonialsSection = () => {
    return (
      <section id="testimonials" className="w-full bg-white py-20 px-6 flex justify-center">
        <div className="max-w-6xl w-full flex flex-col items-center">
          <h3 className="text-3xl font-bold text-header mb-10">Testimonials</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-[#F9FAFB] p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  {t.avatar && t.avatar.trim() !== "" ? (
                    <img
                      src={t.avatar}
                      alt={`Photo of ${t.name}`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 aspect-square rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600">
                      {t.name.trim()
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>
                  )}
                  <div>
                    <a href={t.link} target="_blank" className="font-semibold text-header" rel="noreferrer">{t.name}</a>
                    <p className="text-sm text-textc">{t.role}</p>
                  </div>
                </div>
                <p className="text-textc text-base leading-relaxed">“{t.feedback}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialsSection;