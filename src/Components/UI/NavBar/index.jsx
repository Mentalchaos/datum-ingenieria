import { useState, useRef, useEffect } from "react";
import datumLogo from "../../../assets/images/datum-logo.png";
import NavOption from "./NavOption";
import { useSearchParams } from "react-router-dom";

const NAVBAR_CONTAINER =
  "sticky top-0 text-[#181818] font-bold bg-[#ECEBEB] h-[91px] w-full flex justify-center shadow-[0_4px_10px_rgba(0,0,0,0.2)] z-100";
const NAVBAR_INNER =
  "relative w-full items-center flex justify-between max-w-[1440px] h-full mx-auto";
const LOGO_CONTAINER = "max-w-[300px] h-full flex items-center";
const LOGO_IMG = "w-full max-w-[230px] 80px";
const NAV_OPTIONS_CONTAINER = "w-full h-full flex items-center justify-end gap-12 pr-5";

// Mobile dropdown styles - NUEVO diseño
const MOBILE_MENU_OVERLAY =
  "fixed inset-0 z-[200] flex md:hidden bg-gradient-to-br from-[#ec1b1b]/80 via-[#ecebeb]/80 to-[#181818]/80 backdrop-blur-[30px] transition-all duration-400";
const MOBILE_MENU_DRAWER_BASE =
  "relative w-full h-full flex flex-col items-center justify-center px-6 py-10 transition-transform duration-400 ease-in-out";
const MOBILE_MENU_DRAWER_OPEN = "opacity-100 scale-100";
const MOBILE_MENU_DRAWER_CLOSED = "opacity-0 scale-95 pointer-events-none";
const MOBILE_CLOSE_BTN =
  "absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-3xl text-[#ec1b1b] bg-white rounded-full shadow-lg hover:bg-[#ec1b1b] hover:text-white transition-colors duration-200 cursor-pointer border-2 border-[#ec1b1b] z-10";

const MOBILE_LOGO_CONTAINER = "flex flex-col items-center mb-10";
const MOBILE_LOGO_IMG = "h-[60px] w-auto drop-shadow-lg";
const MOBILE_NAV_LIST =
  "flex flex-col gap-7 w-full max-w-xs mx-auto items-center";
const MOBILE_NAV_OPTION =
  "w-full text-center text-2xl font-[bebas_neue] py-3 px-6 rounded-xl transition-all duration-200 shadow-md bg-white/80 hover:bg-[#ec1b1b] hover:text-white active:scale-95 cursor-pointer border border-[#ecebeb]";

const NavBar = ({ activeComponent, setActiveComponent }) => {
  const navOptions = [
    {
      label: "Inicio",
      value: "Home",
    },
    {
      label: "Servicios",
      value: "Services",
    },
    {
      label: "Nosotros",
      value: "About",
    },
    {
      label: "Denuncias",
      value: "Complaints",
    },
    {
      label: "Contáctanos",
      value: "Contact",
    },
  ];

  const [_, setSearchParams] = useSearchParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const drawerRef = useRef(null);

  // Controla el montaje/desmontaje para animación elegante
  useEffect(() => {
    if (mobileMenuOpen) {
      setShowMobileMenu(true);
    } else if (showMobileMenu) {
      // Espera la animación antes de desmontar
      const timeout = setTimeout(() => setShowMobileMenu(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [mobileMenuOpen, showMobileMenu]);

  // Cierra con ESC
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (option) => {
    setActiveComponent(option);
    if (option === "Home") {
      setSearchParams({});
    } else {
      setSearchParams({ page: option });
    }
    setMobileMenuOpen(false); // Cierra el menú en mobile al navegar
  };

  return (
    <div className={NAVBAR_CONTAINER}>
      <div className={NAVBAR_INNER}>
        {/* Mobile: Hamburger menu and centered logo */}
        <div className="flex w-full items-center justify-between md:hidden h-full px-4">
          {/* Hamburger Icon */}
          <button
            className="flex flex-col justify-center items-center w-10 h-10 group"
            aria-label="Abrir menú"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="block w-7 h-1 bg-[#ec1b1b] rounded mb-1 transition-all duration-200 group-hover:scale-x-110"></span>
            <span className="block w-7 h-1 bg-[#181818] rounded mb-1 transition-all duration-200 group-hover:scale-x-110"></span>
            <span className="block w-7 h-1 bg-[#181818] rounded transition-all duration-200 group-hover:scale-x-110"></span>
          </button>
          {/* Logo centrado */}
          <div className="flex-1 flex justify-center">
            <img className="h-[50px] w-auto drop-shadow-md" src={datumLogo} alt="Logo" />
          </div>
          {/* Espacio para balancear el layout */}
          <div className="w-10 h-10"></div>
        </div>
        {/* Desktop: Logo left, nav right */}
        <div className="hidden md:flex w-full items-center justify-between h-full">
          <div className={LOGO_CONTAINER}>
            <img className={LOGO_IMG} src={datumLogo} alt="Logo" />
          </div>
          <div className={NAV_OPTIONS_CONTAINER}>
            {navOptions.map((option) => (
              <NavOption
                key={option.value}
                label={option.label}
                isActive={activeComponent === option.value}
                onClick={() => handleNavClick(option.value)}
                isContactButton={option.value === "Contact"}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Mobile Dropdown Menu con animación elegante y diseño mejorado */}
      {showMobileMenu && (
        <div
          className={MOBILE_MENU_OVERLAY}
          onClick={() => setMobileMenuOpen(false)}
          style={{
            transition: "background 0.4s cubic-bezier(0.4,0,0.2,1)",
            background: "none",
            pointerEvents: mobileMenuOpen ? "auto" : "none",
          }}
        >
          <div
            ref={drawerRef}
            className={[
              MOBILE_MENU_DRAWER_BASE,
              mobileMenuOpen
                ? MOBILE_MENU_DRAWER_OPEN
                : MOBILE_MENU_DRAWER_CLOSED,
            ].join(" ")}
            style={{
              transition:
                "opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1)",
            }}
            onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer click dentro del menú
          >
            <button
              className={MOBILE_CLOSE_BTN}
              aria-label="Cerrar menú"
              onClick={() => setMobileMenuOpen(false)}
            >
              &times;
            </button>
            <div className={MOBILE_LOGO_CONTAINER}>
              <img className={MOBILE_LOGO_IMG} src={datumLogo} alt="Logo" />
              <span className="mt-2 text-[#ec1b1b] font-[bebas_neue] text-2xl tracking-widest drop-shadow-sm">DATUM</span>
            </div>
            <nav className={MOBILE_NAV_LIST}>
              {navOptions.map((option) => (
                <button
                  key={option.value}
                  className={[
                    MOBILE_NAV_OPTION,
                    activeComponent === option.value
                      ? "bg-[#ec1b1b] text-white shadow-lg"
                      : "",
                    option.value === "Contact"
                      ? "bg-gradient-to-r from-[#ec1b1b] to-[#ff5e5e] text-white font-bold border-none"
                      : "",
                  ].join(" ")}
                  onClick={() => handleNavClick(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </nav>
            <div className="mt-10 flex flex-col items-center gap-2 text-xs text-[#181818]/60">
              <span>© {new Date().getFullYear()} Datum Ingeniería</span>
              <span className="italic">Innovación y confianza</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
