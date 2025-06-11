import InfoBox from "../../UI/InfoBox/InfoBox";
import topo from "../../../assets/images/inicio/Group1.png";
import electric from "../../../assets/images/inicio/electricos.png";
import inspection from "../../../assets/images/inicio/inspection.svg";
import renewable from "../../../assets/images/inicio/renewable.svg";
import road from "../../../assets/images/inicio/road.svg";

const services = [
  { 
    text: "Topografía", 
    image: topo, 
    width: "w-2/5", 
    height: "h-[451px]",
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
    width: "w-3/5",
    height: "h-[451px]",
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
    width: "w-3/5",
    height: "h-[451px]",
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
    width: "w-2/5",
    height: "h-[451px]",
    description: [
      "Diseño de planes de señalización",
      "Proyectos de paralelismo y atraviesos (MOP y EFE)",
      "Diseño de accesos",
      "Cálculo para movimiento de tierra"
    ]
  },
  { text: "Energías Renovables",
    image: renewable,
    width: "w-3/4",
    height: "h-[451px]",
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
    <div className="text-[#181818] bg-[#E2E2E2] flex flex-wrap justify-around">
      {services.map(({ text, image, width, height, description }, index) => {
        const isReversed = text === "Proyectos Eléctricos" || text === "Inspección técnica de obras";

        return (
          <InfoBox key={index} width={width} height={height}>
            <div className="flex h-full gap-4">
              {isReversed ? (
                <>
                  <div className="w-[60%] flex flex-col justify-around">
                    {text && <p className="text-[40px] font-[bebas_neue] text-[#000000]">{text}</p>}
                    {description && (
                      <ul className="text-sm text-gray-700 list-disc pl-5 font-inter h-[70%] flex flex-col justify-around">
                        {description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="w-[40%] h-full flex items-center">
                    {image && <img alt={text} className="w-full h-[90%] object-cover rounded-md" src={image} />}
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[40%] h-full flex items-center">
                    {image && <img alt={text} className="w-full h-[90%] object-cover rounded-md" src={image} />}
                  </div>
                  <div className="w-[60%] flex flex-col justify-around">
                    {text && <p className="text-[40px] font-[bebas_neue] text-[#000000]">{text}</p>}
                    {description && (
                      <ul className="text-sm text-gray-700 list-disc pl-5 font-inter h-[70%] flex flex-col justify-around">
                        {description.map((item, i) => (
                          <li key={i}>{item}</li>
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
