import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import htmllogo from "../images/logos/html5.svg";
import csslogo from "../images/logos/css3-alt.svg";
import jslogo from "../images/logos/square-js.svg";
import reactlogo from "../images/logos/react.svg";
import bootstraplogo from "../images/logos/bootstrap.svg";
import tailwindlogo from "../images/logos/tailwind.png";
function SkillSlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} className="h-full w-full">
      <div className="bg-aboutbg rounded-lg m-2 h-44">
        <h1 className="text-center font-sans text-2xl ">HTML</h1>
        <div className=" flex">
          <img src={htmllogo} alt="" width={90} className="p-2" />
          <p className="p-3 font-light">
            I can use HTML semantically in creating the structure of web pages
          </p>
        </div>
      </div>
      <div className="bg-aboutbg rounded-lg m-2 h-44">
        <h1 className="text-center font-sans text-2xl ">CSS</h1>
        <div className=" flex">
          <img src={csslogo} alt="" width={90} className="p-2" />
          <p className="p-3 font-light">
            I can utilize css well in styling modern functional websites
          </p>
        </div>
      </div>
      <div className="bg-aboutbg rounded-lg m-2 h-44">
        <h1 className="text-center font-sans text-2xl ">JavaScript</h1>
        <div className=" flex">
          <img src={jslogo} alt="" width={90} className="p-2" />
          <p className="p-3 font-light">
            I can critically think when applying logic with JavaScript for
            implementing features
          </p>
        </div>
      </div>
      <div className="bg-aboutbg rounded-lg m-2 h-44">
        <h1 className="text-center font-sans text-2xl ">React</h1>
        <div className=" flex">
          <img src={reactlogo} alt="" width={90} className="p-2" />
          <p className="p-3 font-light">
            I can utilize css well in styling modern functional websites
          </p>
        </div>
      </div>
      <div className="bg-aboutbg rounded-lg m-2 h-44">
        <h1 className="text-center font-sans text-2xl ">Bootstrap</h1>
        <div className=" flex">
          <img src={bootstraplogo} alt="" width={90} className="p-2" />
          <p className="p-3 font-light">
            I can utilize built in components from bootstrap in my web
            development projects
          </p>
        </div>
      </div>
      <div className="bg-aboutbg rounded-lg m-2 h-44">
        <h1 className="text-center font-sans text-2xl ">Tailwind</h1>
        <div className=" flex">
          <img src={tailwindlogo} alt="" width={90} className="p-2" />
          <p className="p-3 font-light">
            I can also make use of utility classes from tailwind for more
            accuracy when it comes to styling with utility classes
          </p>
        </div>
      </div>
    </Carousel>
  );
}

export default SkillSlider;
