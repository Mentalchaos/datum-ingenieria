import datumLogo from "../../../assets/images/datum-logo.png";
import NavOption from "./NavOption";
import { useSearchParams } from "react-router-dom";

const NAVBAR_CONTAINER =
  "sticky top-0 text-[#181818] font-bold bg-[#ECEBEB] h-[106px] py-[33px] px-[36px] w-full flex shadow-[0_4px_10px_rgba(0,0,0,0.2)] z-50";
const NAVBAR_INNER =
  "relative w-full items-center flex justify-between max-w-[1440px] mx-auto";
const LOGO_CONTAINER = "w-full h-full";
const LOGO_IMG = "w-full max-w-[200px] max-h-[100px]";
const NAV_OPTIONS_CONTAINER = "h-full flex items-center justify-evenly gap-8";

const NavBar = ({ activeComponent, setActiveComponent }) => {
  const navOptions = [
    "Inicio",
    "Servicios",
    "Nosotros",
    "Denuncias",
    "Contáctanos",
  ];

  const [_, setSearchParams] = useSearchParams();

  const handleNavClick = (option) => {
    setActiveComponent(option);
    if (option === "Inicio") {
      setSearchParams({});
    } else {
      setSearchParams({ page: option });
    }
  };

  return (
    <div className={NAVBAR_CONTAINER}>
      <div className={NAVBAR_INNER}>
        <div className={LOGO_CONTAINER}>
          <img className={LOGO_IMG} src={datumLogo} alt="Logo" />
        </div>
        <div className={NAV_OPTIONS_CONTAINER}>
          {navOptions.map((option) => (
            <NavOption
              key={option}
              label={option}
              isActive={activeComponent === option}
              onClick={() => handleNavClick(option)}
              isContactButton={option === "Contáctanos"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
