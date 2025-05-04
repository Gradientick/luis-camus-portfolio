import benjie from '../images/testimonials/benjie.jpg'

const testimonials = [
    {
      name: "Benjie Angeles",
      role: "Junior Software Engineer",
      feedback:
        "Luis was my classmate in Kodego and my colleague in PulsarSD. We did a couple of practice exercises and I can tell that he is very professional when at work and a fun dude outside of work.",
      avatar: benjie, // Optional: your path to image
    },
    {
      name: "Mark Rivera",
      role: "Startup Founder",
      feedback:
        "Luis brought clarity and speed to our web app. His attention to detail and ability to adapt quickly really impressed me.",
      avatar: "../images/testimonials/benjie.jpg",
    },
    {
      name: "Elaine Tan",
      role: "Project Lead, STAM",
      feedback:
        "We needed a fast, secure way to verify documents—and Luis delivered. His smart contract integration made it all work.",
      avatar: "/images/testimonial3.jpg",
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
                  <img
                    src={t.avatar}
                    alt={`Photo of ${t.name}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-header">{t.name}</p>
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