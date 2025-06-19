import datumLogo from "../../../assets/images/datum-logo.png";
import NavOption from "./NavOption";
import { useSearchParams } from "react-router-dom";

const NAVBAR_CONTAINER =
  "sticky top-0 text-[#181818] font-bold bg-[#ECEBEB] h-[91px] w-full flex justify-center shadow-[0_4px_10px_rgba(0,0,0,0.2)] z-10";
const NAVBAR_INNER =
  "relative w-full items-center flex justify-between max-w-[1440px] h-full mx-auto";
const LOGO_CONTAINER = "max-w-[300px] h-full flex items-center";
const LOGO_IMG = "w-full max-w-[300px] h-full";
const NAV_OPTIONS_CONTAINER = "w-full h-full flex items-center justify-end gap-12 pr-5";

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
