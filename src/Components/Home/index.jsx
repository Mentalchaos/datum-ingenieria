import home from "../../assets/images/inicio/home.png";
import HomeServices from "./HomeServices/index.jsx";
import HomeAboutUs from "./HomeAboutUs/index.jsx";
import HomeContact from "./HomeContact/index.jsx";
import LogosSlider from "../UI/LogosSlider/LogosSlider.jsx";
import UsInfoBox from "./usInfo.jsx";
import Banner from "../UI/Banner/index.jsx";
import { isMobile } from "../../utils/viewport.js";

const Home = () => {
  return (
    <div className="text-[#181818] bg-[#EDEDED] font-[roboto] min-h-svh">
      <Banner image={home} isBlack={true}>
        <UsInfoBox />
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
