import datumLogo from "../../../assets/images/datum-logo.png";
import NavOption from "./NavOption";
import { useSearchParams } from "react-router-dom";

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
    <div className="text-[#181818] font-bold bg-[#ECEBEB] h-[106px] py-[33px] px-[36px] fixed top-0 left-0 w-full flex shadow-[0_4px_10px_rgba(0,0,0,0.2)] z-50">
      <div className="relative w-full items-center flex justify-between max-w-[1440px] mx-auto">
        <div className="w-full h-full">
          <img className="w-full max-w-[200px] max-h-[100px]" src={datumLogo} alt="Logo" />
        </div>
        <div className="h-full flex items-center justify-evenly gap-8">
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
