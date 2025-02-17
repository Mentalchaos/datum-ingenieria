import home from "../../assets/images/inicio/inicio.svg";
import HomeServices from "./HomeServices/index.jsx";
import HomeAboutUs from "./HomeAboutUs/index.jsx";
import HomeContact from "./HomeContact/index.jsx";
import LogosSlider from "../UI/LogosSlider/LogosSlider.jsx";

const Home = () => {
  return (
    <div className="text-[#181818] bg-[#E2E2E2] font-[roboto] min-h-svh">
      <div className="w-full">
        <img className="w-full h-[90vh]" src={home} /> {/* remover h-[90vh] */}
      </div>
      <div className="flex text-[62px] justify-center pb-20">
        <div className="font-[bebas_neue] mr-6">Lorem ipsum:</div>
        <div>Dolor sit amet.</div>
      </div>
      <LogosSlider />
      <HomeServices />
      <HomeAboutUs />
      <HomeContact />
    </div>
  );
};

Home.displayName = "Home";

export default Home;
