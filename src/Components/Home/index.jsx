import home from "../../assets/images/inicio/home.png";
import HomeServices from "./HomeServices/index.jsx";
import HomeAboutUs from "./HomeAboutUs/index.jsx";
import HomeContact from "./HomeContact/index.jsx";
import LogosSlider from "../UI/LogosSlider/LogosSlider.jsx";
import UsInfoBox from "./usInfo.jsx";

const Home = () => {
  return (
    <div className="text-[#181818] bg-[#E2E2E2] font-[roboto] min-h-svh">
      <div className="w-full relative mb-[15em]">
        <img className="w-full h-[600px]" src={home} />
        <div className="flex font-[bebas_neue] text-[62px] justify-center pb-20 absolute top-[85%] w-full">
          <UsInfoBox/>
        </div>
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
