import datumLogo from "../../../assets/images/datum-logo.png";
import NavOption from "./NavOption";

const NavBar = ({ activeComponent, setActiveComponent }) => {
  const navOptions = [
    "Inicio",
    "Servicios",
    "Nosotros",
    "Denuncias",
    "Contáctanos",
  ];

  return (
    <div className="text-[#181818] font-bold bg-[#ECEBEB] h-[106px] py-[33px] px-[36px] fixed top-0 left-0 w-full flex shadow-[0_4px_10px_rgba(0,0,0,0.2)] z-50">
      <div className="relative w-full flex items-center">
        <div className="w-full h-full absolute top-0 flex items-center">
          <img className="w-1/6" src={datumLogo} alt="Logo" />
        </div>
        <div className="w-3/4 h-full flex items-center absolute top-0 right-0 pl-50 justify-evenly gap-8">
          {navOptions.map((option) => (
            <NavOption
              key={option}
              label={option}
              isActive={activeComponent === option} // Highlight active option
              onClick={() => setActiveComponent(option)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
