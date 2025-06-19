import team from "../../assets/images/aboutUs/team.png";
import ethics from "../../assets/images/aboutUs/ethics.png";
import ethics2 from "../../assets/images/aboutUs/ethics-hover.png";
import innovation from "../../assets/images/aboutUs/innovation.png";
import innovation2 from "../../assets/images/aboutUs/innovation-hover.png";
import integrity from "../../assets/images/aboutUs/integrity.png";
import integrity2 from "../../assets/images/aboutUs/integrity-hover.png";
import responsibility from "../../assets/images/aboutUs/responsibility.png";
import responsibility2 from "../../assets/images/aboutUs/responsibility-hover.png";
import social from "../../assets/images/aboutUs/social.png";
import social2 from "../../assets/images/aboutUs/social-hover.png";
import teamwork from "../../assets/images/aboutUs/teamwork.png";
import teamwork2 from "../../assets/images/aboutUs/teamwork-hover.png";
import OurTeam from "./OurTeam";
import MisionVision from "../Home/MisionVision/misionVision";
import Timeline from "../Home/TimeLine";
import Banner from "../UI/Banner";


const AboutUs = () => {
  return (
    <div className="text-[#181818] bg-[#E2E2E2] font-[roboto] min-h-svh">
      <Banner image={team} />

      <div className="flex text-[24px] justify-center pb-20 w-full items-center">
        <div className="font-bengali pt-22 tracking-wider w-[75%] text-justify">
          En Datum Ingeniería nuestras acciones y metas están impulsadas por una visión clara y una misión sólida.
          Como empresa comprometida con la excelencia en todos nuestros servicios, nuestra orientación estratégica
          se basa en estos pilares funtamentales. A continuación, te presentamos nuestra Misión y Visión, que reflejan
          nuestro compromiso constante con la innovación, la precisión y un futuro sostenible.
        </div>
      </div>

      <MisionVision />

      <div className="font-[bebas_neue] font-normal text-[64px] leading-[100%] text-center flex flex-col items-center justify-between my-[3em] h-auto">
        <p>MARCO VALÓRICO</p>

        <div className="grid grid-cols-3 gap-8 mt-[1.5em]">
          <div className="flex flex-col items-center text-center m-[0.5em]">
            <img
              src={innovation}
              onMouseEnter={e => (e.currentTarget.src = innovation2)}
              onMouseLeave={e => (e.currentTarget.src = innovation)}
              alt="Innovación"
              className="w-full h-auto transition-all duration-300"
            />
            <p className="mt-2 font-bengali font-medium text-[16px]">Innovación</p>
          </div>
          <div className="flex flex-col items-center text-center m-[0.5em]">
            <img
              src={integrity}
              onMouseEnter={e => (e.currentTarget.src = integrity2)}
              onMouseLeave={e => (e.currentTarget.src = integrity)}
              alt="Integridad"
              className="w-full h-auto transition-all duration-300"
            />
            <p className="mt-2 font-bengali font-medium text-[16px]">Integridad</p>
          </div>
          <div className="flex flex-col items-center text-center m-[0.5em]">
            <img
              src={responsibility}
              onMouseEnter={e => (e.currentTarget.src = responsibility2)}
              onMouseLeave={e => (e.currentTarget.src = responsibility)}
              alt="Responsabilidad"
              className="w-full h-auto transition-all duration-300"
            />
            <p className="mt-2 font-bengali font-medium text-[16px]">Responsabilidad</p>
          </div>
          <div className="flex flex-col items-center text-center m-[0.5em]">
            <img
              src={teamwork}
              onMouseEnter={e => (e.currentTarget.src = teamwork2)}
              onMouseLeave={e => (e.currentTarget.src = teamwork)}
              alt="Trabajo en equipo"
              className="w-full h-auto transition-all duration-300"
            />
            <p className="mt-2 font-bengali font-medium text-[16px]">Trabajo en equipo</p>
          </div>
          <div className="flex flex-col items-center text-center m-[0.5em]">
            <img
              src={ethics}
              onMouseEnter={e => (e.currentTarget.src = ethics2)}
              onMouseLeave={e => (e.currentTarget.src = ethics)}
              alt="Ética"
              className="w-full h-auto transition-all duration-300"
            />
            <p className="mt-2 font-bengali font-medium text-[16px]">Ética</p>
          </div>
          <div className="flex flex-col items-center text-center m-[0.5em]">
            <img
              src={social}
              onMouseEnter={e => (e.currentTarget.src = social2)}
              onMouseLeave={e => (e.currentTarget.src = social)}
              alt="Responsabilidad Social"
              className="w-full h-auto transition-all duration-300"
            />
            <p className="mt-2 font-bengali font-medium text-[16px]">Responsabilidad Social</p>
          </div>
        </div>

      </div>

      <Timeline />
      <OurTeam />
    </div>
  );
};

AboutUs.displayName = "AboutUs";

export default AboutUs;
