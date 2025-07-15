import { useState, useEffect } from "react";
import services from "../../assets/images/servicesPage/services-banner.png";
import topo from "../../assets/images/inicio/Group1.png";
import electric from "../../assets/images/inicio/electricos.png";
import inspection from "../../assets/images/inicio/inspection.svg";
import renewable from "../../assets/images/inicio/renewable.svg";
import road from "../../assets/images/inicio/road.svg";
import LogosSlider from "../UI/LogosSlider/LogosSlider";
import Topography from "./Topography";
import Works from "./Works";
import Road from "./Road";
import RenewableEnergies from "./RenewableEnergies";
import Electric from "./Electric";
import Banner from "../UI/Banner";
import { isMobile } from "../../utils/viewport";


const servicesInfo = [
  {
    text: "Topografía",
    image: topo,
    description: "Descripción detallada de Topografía.",
    serviceName: "topography"
  },
  {
    text: "Inspección técnica de obras",
    image: inspection,
    description: "Descripción detallada de Inspección técnica de obras.",
    serviceName: "inspection"
  },
  {
    text: "Proyectos Viales",
    image: road,
    description: "Descripción detallada de Proyectos Viales.",
    serviceName: "road"
  },
  {
    text: "Energías Renovables",
    image: renewable,
    description: "Descripción detallada de Energías Renovables.",
    serviceName: "renewable"
  },
  {
    text: "Proyectos Eléctricos",
    image: electric,
    description: "Descripción detallada de Proyectos Eléctricos.",
    serviceName: "electric"
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [componentActive, setComponentActive] = useState(null);

  const renderComponent = () => {
    const CASES = {
      "topography": <Topography onBack={handlerBack}/>,
      "inspection": <Works onBack={handlerBack}/>,
      "road": <Road onBack={handlerBack}/>,
      "renewable": <RenewableEnergies onBack={handlerBack}/>,
      "electric": <Electric onBack={handlerBack}/>,
      "default": null
    }

    return CASES[selectedService] || null;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');

    if (serviceParam) {
      setSelectedService(serviceParam);
    } else {
      setSelectedService(null);
      setComponentActive(renderComponent())
    }

    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const serviceParam = urlParams.get('service');

      if (serviceParam) {
        setSelectedService(serviceParam);
      } else {
        setSelectedService(null);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [window.location.href]);

  const handlerBack = () => {
    setSelectedService(null);
    window.history.back();
  };

  const onSelectService = (serviceName) => {
    setSelectedService(serviceName);
    const url = new URL(window.location);
    url.searchParams.set('service', serviceName);
    window.history.pushState({}, "", url.toString());
  };

  const renderCard = (service, index) => {
    return (
      <div
        key={index}
        className={isMobile ? "w-full h-[452px] overflow-hidden rounded-[5px] shadow-md cursor-pointer transition-all" : "relative w-1/3 h-[452px] overflow-hidden rounded-[5px] shadow-md cursor-pointer transition-all"}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={() => onSelectService(service.serviceName)}
      >
        <div className="bg-[#EDEDED] w-full h-full p-4 z-0">
          <div id="service-card-content" className="flex flex-col justify-around items-center h-full">
            <img src={service.image} alt={service.text} className="object-contain max-h-[60%]" />
            <h2 className="font-[bebas_neue] font-normal text-[40px] text-center text-[#181818]">
              {service.text}
            </h2>
          </div>

          <div className="absolute inset-0 bg-black/70 text-white flex flex-col justify-around items-center p-4 transition-all duration-300 z-10 opacity-0 hover:opacity-100">
            <h2 className="font-[bebas_neue] font-normal text-[40px] text-center text-[#D9D9D9]">
              {service.text}
            </h2>
            <p className="font-bengali font-medium text-[20px] text-center text-[#D9D9D9]">5
              {service.description}
            </p>
            <div className="underline text-white cursor-pointer">
              Ir al servicio
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-col items-center text-[#181818] bg-[#E2E2E2] font-[roboto] min-h-svh mb-10">
        {selectedService == null && <div className="flex flex-col items-center">
          <Banner image={services} />
          <div className={isMobile ? "p-4 w-full" : "flex justify-center gap-15 px-10 py-10 w-full max-w-[1400px]"}>
            {servicesInfo.slice(0, 3).map((service, index) => renderCard(service, index))}
          </div>
          <div className={isMobile ? "p-4 w-full" : "flex justify-center gap-15 px-10 pb-20 w-full max-w-[1400px]"}>
            {servicesInfo.slice(3).map((service, index) => renderCard(service, index + 3))}
          </div>
        </div>}
        {renderComponent()}
      </div>
      <LogosSlider />
    </div>
  );
};

export default Services;
