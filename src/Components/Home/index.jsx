import home from "../../assets/images/inicio/home.png";
import HomeServices from "./HomeServices/index.jsx";
import HomeAboutUs from "./HomeAboutUs/index.jsx";
import HomeContact from "./HomeContact/index.jsx";
import LogosSlider from "../UI/LogosSlider/LogosSlider.jsx";
import UsInfoBox from "./usInfo.jsx";
import Banner from "../UI/Banner/index.jsx";

const Home = () => {
  return (
    <div className="text-[#181818] bg-[#EBEBEB] font-[roboto] min-h-svh">
      <Banner image={home}>
        <UsInfoBox/>
      </Banner>
      <LogosSlider />
      <HomeServices />
      <HomeAboutUs />
      <HomeContact />
    </div>
  );
};

Home.displayName = "Home";

export default Home;
