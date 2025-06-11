import { useState } from "react";
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

const servicesInfo = [
  {
    text: "Topografía",
    image: topo,
    description: "Descripción detallada de Topografía."
  },
  {
    text: "Inspección técnica de obras",
    image: inspection,
    description: "Descripción detallada de Inspección técnica de obras."
  },
  {
    text: "Proyectos Viales",
    image: road,
    description: "Descripción detallada de Proyectos Viales."
  },
  {
    text: "Energías Renovables",
    image: renewable,
    description: "Descripción detallada de Energías Renovables."
  },
  {
    text: "Proyectos Eléctricos",
    image: electric,
    description: "Descripción detallada de Proyectos Eléctricos."
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const renderComponent = () => {
    switch (selectedService) {
      case "Topografía":
        return <Topography />
      case "Inspección técnica de obras":
        return <Works />;
      case "Proyectos Viales":
        return <Road />;
      case "Energías Renovables":
        return <RenewableEnergies />;
      case "Proyectos Eléctricos":
        return <Electric />;
      default:
        return null;
    }
  };

  const renderCard = (service, index) => {
    return (
      <div
        key={index}
        className="relative w-1/3 h-[452px] overflow-hidden rounded-[5px] shadow-md"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div className="flex flex-col justify-around items-center bg-[#EDEDED] w-full h-full p-4 z-0">
          <img src={service.image} alt={service.text} className="object-contain max-h-[60%]" />
          <h2 className="font-[bebas_neue] font-normal text-[40px] text-center text-[#181818]">
            {service.text}
          </h2>
        </div>

        {hoveredIndex === index && (
          <div className="absolute inset-0 bg-black/60 text-white flex flex-col justify-around items-center p-4 transition-all duration-300 z-10">
            <h2 className="font-[bebas_neue] font-normal text-[40px] text-center text-[#D9D9D9]">
              {service.text}
            </h2>
            <p className="font-bengali font-medium text-[20px] text-center text-[#D9D9D9]">
              {service.description}
            </p>
            <a href={service.link} className="underline text-white" onClick={() => setSelectedService(service.text)}>
              Ir al servicio
            </a>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center text-[#181818] bg-[#E2E2E2] font-[roboto] min-h-svh">
      {selectedService == null && <div className="flex flex-col items-center">
        <div className="flex justify-center mt-[8em]">
          <img src={services} alt="servicios" className="h-[90vh] w-full" />
        </div>
        <div className="flex justify-center gap-15 px-10 py-10 w-full max-w-[1400px]">
          {servicesInfo.slice(0, 3).map((service, index) => renderCard(service, index))}
        </div>
        <div className="flex justify-center gap-15 px-10 pb-20 w-full max-w-[1400px]">
          {servicesInfo.slice(3).map((service, index) => renderCard(service, index + 3))}
        </div>
      </div>}
      {renderComponent()}
      <LogosSlider />
    </div>
  );
};

export default Services;
