import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../index.css";
import myasensoimg from "../images/works/myasenso.png";
import mykwenta from "../images/works/Calculator.png";
import shopsmart from "../images/works/ShopSmart.png";
function WorksSlider() {
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

  const goToMyAsenso = () => {
    window.open("https://myasenso-app.onrender.com", "_blank");
  };
  const goToMyKwenta = () => {
    window.open("https://gradientick.github.io/calculator-app/", "_blank");
  };
  const goToMyShopSmart = () => {
    window.open("https://gradientick.github.io/mp2-project/", "_blank");
  };
  return (
    <Carousel responsive={responsive} className="h-full w-full ">
      <div
        className="p-5 flex flex-col items-center -z-10 bg-aboutbg rounded-lg m-2 cursor-pointer transition-all hover:bg-hover"
        onClick={goToMyAsenso}
      >
        <h1>MyAsenso</h1>
        <h2 className="font-light">Full-Stack Sales Tracker Application</h2>
        <img src={myasensoimg} alt="myasenso" className="w-5/6 h-40" />
      </div>
      <div
        className="p-5 flex flex-col items-center -z-10 bg-aboutbg rounded-lg m-2 cursor-pointer transition-all hover:bg-hover"
        onClick={goToMyKwenta}
      >
        <h1>MyKwenta</h1>
        <h2 className="font-light">Full-Stack Sales Tracker Application</h2>
        <img src={mykwenta} alt="myasenso" className="w-5/6 h-40 " />
      </div>
      <div
        className="p-5 flex flex-col items-center -z-10 bg-aboutbg rounded-lg m-2 cursor-pointer transition-all hover:bg-hover"
        onClick={goToMyShopSmart}
      >
        <h1>Shop Smart</h1>
        <h2 className="font-light">Ecommerce Application</h2>
        <img src={shopsmart} alt="myasenso" className="w-5/6 h-40" />
      </div>
    </Carousel>
  );
}

export default WorksSlider;
