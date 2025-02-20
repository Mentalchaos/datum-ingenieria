import team from "../../assets/images/aboutUs/team.png";
import InfoBox from "../UI/InfoBox/InfoBox";
import OurTeam from "./OurTeam";

const AboutUs = () => {
  return (
    <div className="text-[#181818] bg-[#E2E2E2] font-[roboto] min-h-svh">
      <div className="w-full">
        <img className="w-full h-[90vh]" src={team} />
      </div>
      <div className="flex text-[62px] justify-center pb-20">
        <div className="font-[bebas_neue] pt-22 tracking-wider">historia</div>
      </div>

      <div className="flex pt-300 px-8 pb-30">
        <div className="w-1/2 px-1">
          <div className="flex justify-center font-[bebas_neue] text-[40px]">
            MISIÓN
          </div>
          <InfoBox width="w-full" height="h-[508px]" />
        </div>
        <div className="w-1/2 px-1">
          <div className="flex justify-center font-[bebas_neue] text-[40px]">
            Visión
          </div>
          <InfoBox width="w-full" height="h-[508px]" />
        </div>
      </div>
      <OurTeam />
    </div>
  );
};

AboutUs.displayName = "AboutUs";

export default AboutUs;
