import InfoBox from "../../UI/InfoBox/InfoBox";
import topo from "../../../assets/images/inicio/Group1.png";
import electric from "../../../assets/images/inicio/electricos.png";
import inspection from "../../../assets/images/inicio/inspection.svg";
import renewable from "../../../assets/images/inicio/renewable.svg";
import road from "../../../assets/images/inicio/road.svg";
import { isMobile } from "../../../utils/viewport.js";

const services = [
  {
    text: "Topografía",
    image: topo,
    width: "w-[47%]",
    height: "h-[451px]",
    listClass: "text-sm text-gray-700 list-disc pl-10 font-inter flex flex-col justify-around",
    mobileListClass: "text-sm text-gray-700 list-disc pl-10 font-inter flex flex-col justify-around",
    itemClass: "text-[1em] max-w-[300px] mb-[.5em]",
    itemClassMobile: "text-[1em] max-w-[300px] mb-[.5em]",
    description: [
      "Ferrocarriles",
      "GPS y Geodesia",
      "Topografía urbana",
      "Levantamientos costeros y batimetría",
      "Líneas de AT",
      "Montaje mecánico y estructuras",
      "Subestaciones eléctricas"
    ]
  },
  { text: "Proyectos Eléctricos",
    image: electric,
    width: "w-[53%]",
    height: "h-[451px]",
    listClass: "text-sm text-gray-700 list-disc pl-10 font-inter flex flex-col justify-around",
    mobileListClass: "text-sm text-gray-700 list-disc pl-10 font-inter flex flex-col justify-around",
    itemClass: "text-[1em] max-w-[300px] mb-[.5em]",
    itemClassMobile: "text-[1em] max-w-[300px] mb-[.5em]",
    description: [
      "Mallas a tierra",
      "Proyectos de distribución para redes de MT y BT",
      "Proyectos lumínicos",
      "Planos de instalaciones de terceros",
      "Proyectos cruces con líneas AT y MT de terceros",
      "Planos de servidumbre"
    ]
  },
  { text: "Inspección técnica de obras",
    image: inspection,
    width: "w-[55%]",
    height: "h-[451px]",
    listClass: "text-sm text-gray-700 list-disc pl-10 font-inter flex flex-col justify-around",
    mobileListClass: "text-sm text-gray-700 list-disc pl-10 font-inter flex flex-col justify-around",
    itemClass: "text-[1em] max-w-[300px] mb-[.5em]",
    itemClassMobile: "text-[1em] max-w-[300px] mb-[.5em]",
    description: [
      "Construcción de líneas eléctricas MT y BT",
      "Paralelismo y atraviesos (MOP y EFE)",
      "Movimiento de tierra",
      "Proyectos viales",
      "Planes de señalización"
    ]
  },
  { text: "Proyectos Viales",
    image: road,
    width: "w-[45%]",
    height: "h-[451px]",
    listClass: "text-sm text-gray-700 list-disc pl-10 font-inter flex flex-col justify-around",
    mobileListClass: "text-sm text-gray-700 list-disc pl-10 font-inter flex flex-col justify-around",
    itemClass: "text-[1em] max-w-[300px] mb-[.5em]",
    itemClassMobile: "text-[1em] w-full mb-[.5em]",
    description: [
      "Diseño de planes de señalización",
      "Proyectos de paralelismo y atraviesos (MOP y EFE)",
      "Diseño de accesos",
      "Cálculo para movimiento de tierra"
    ]
  },
  { text: "Energías Renovables",
    image: renewable,
    width: "w-[85%]",
    height: "h-[451px]",
    listClass: "text-sm text-gray-700 list-disc pl-10 font-inter flex flex-col justify-around",
    mobileListClass: "text-sm text-gray-700 list-disc font-inter flex flex-col justify-around",
    itemClass: "text-[1em] w-[400px] mb-[.5em]",
    itemClassMobile: "text-[1em] w-full mb-[.5em]",
    description: [
      "Planos de servidumbre",
      "Cálculo para movimiento de tierra (Cubicación y plataforma)",
      "Proyectos de paralelismo y atraviesos (para uso en bienes nacionales de uso público)",
      "Diseño accesos viales",
      "Vialidad interior y obras de saneamiento",
      "Replanteo de obras",
      "Proyectos eléctricos de evacuación"
    ]
  }
];



const ServicesBoxes = () => {
  return (
    <div className="text-[#181818] bg-[#EDEDED] flex-wrap justify-around md:flex">
      {services.map(({ text, image, width, height, description, listClass, itemClass, mobileListClass, itemClassMobile }, index) => {
        const isReversed = text === "Proyectos Eléctricos" || text === "Inspección técnica de obras";

        return (
          <InfoBox key={index} width={isMobile ? "w-full" : width} height={isMobile ? "h-full" : height}>
            <div className="gap-4 flex-col md:flex md:flex-row h-full">
              {isReversed ? (
                <>
                  <div className="w-full md:w-[70%] flex flex-col justify-around">
                    {text && <p className="text-[2.1em] font-[bebas_neue] text-[#000000]">{text}</p>}
                    {description && (
                      <ul className={isMobile ? mobileListClass : listClass}>
                        {description.map((item, i) => (
                          <li key={i} className={isMobile ? itemClassMobile : itemClass}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="w-full md:w-[70%] h-full flex items-center">
                    {image && <img alt={text} className="w-full h-[100%] object-cover rounded-md" src={image} />}
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full md:w-[50%] flex items-center">
                    {image && <img alt={text} className="w-full h-[100%] p-[2em]" src={image} />}
                  </div>
                  <div className="w-full md:w-[260px] flex flex-col justify-around">
                    {text && <p className="text-[2.1em] font-[bebas_neue] text-[#000000]">{text}</p>}
                    {description && (
                      <ul className={isMobile ? mobileListClass : listClass}>
                        {description.map((item, i) => (
                          <li key={i} className={isMobile ? itemClassMobile : itemClass}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </>
              )}
            </div>
          </InfoBox>
        );
      })}
    </div>
  );
};

export default ServicesBoxes;
