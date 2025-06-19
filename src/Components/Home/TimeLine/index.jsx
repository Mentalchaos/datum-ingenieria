import React from "react";

const Timeline = () => {
  const events = [
    { year: "1999",
      description: "Inicio de nuestra historia",
      tooltip: "Datum Ingeniería desde su funcionación, en el año 1999 comenzó su exitosa trayectoria, irrumpiendo en el mercado con alternativas, que para la época fueron de vanguardia, formando un equipo altamente calificado y especializado"
    },
    { year: " ",
      description: "",
      tooltip: "En sus primeros años, Datum Ingeniería se dedicó principalmente a trabajos de topografía y geodesia, apoyando al desarrollo de proyectos en las diversas áreas de la Ingeniería, Arquitectura, Levantamientos costeros, Concesiones marítimas, Georreferenciaciones, Catastro de líneas eléctricas, Aplicaciones para sistemas de información geográfica y Redes Geodésicas"
    },
    { year: "2008",
      description: "Un gran avance",
      tooltip: "Datum ingeniería ya en el año 2008, comenzó a destacar, especializándose en proyectos para ser presentados a la Dirección de Vialidad, desarrollando Proyectos de paralelismo y atraviesas para empresas de servicios que requerían autorización para utilizar Bienes nacionales de uso público con sus instalaciones. Esto consolidó, para el año 2014 la posición de la empresa como la más experimentada en esta área. También asociado a esta nueva especialidad se agregaron: Planes de Señalización Vial, Diseño de accesos viales y pavimentos, planos para servidumbre."
    },
    { year: "2019",
      description: "Crecimiento exponencial",
      tooltip: "Ya en el año 2019, Datum Ingeniería amplía su experiencia al adjudicarse importantes contratos a nivel nacional para el desarrollo de Proyectos Eléctricos de Distribución, teniendo hasta el momento un alto volumen de proyectos en esta área, que combinados por la gran experiencia vial, da un servicio integral a los requirentes que necesitan la utilización de Bienes Nacionales de uso Público con sus instalaciones. Asociado a este, se comienza a dar el servicio de Inspección Técnica de Obras (ITO) en apoyo a la Dirección de Vialidad y a nuestros clientes durante la ejecución de obras."
    },
    { year: " ",
      description: "",
      tooltip: "Desde su fundación, Datum Ingeniería de manera paulatina y en función de la diversificación de sus servicios, ha logrado formar un equipo humano y profesional, altamente calificado y especializado, organizado en direcciones técnicas según su especialidad, que siguen una metodología de trabajo establecida, lo que garantiza la entrega de servicios de alta calidad, con costos y en plazos pensados en nuestros clientes."
    },
    { year: "HOY",
      description: "Nuestro presente y futuro",
      tooltip: "Hoy en día, Datum Ingeniería, se destaca por su constante inversión en la capacitación de su personal, adquisición de avanzada tecnología, mejora en sus métodos de trabajo y, principalmente, cumplir con los requisitos y plazos establecidos por sus clientes, además de consolidarse como una de las principales empresas en la prestación de servicios de ingeniería."
    }
  ];

  return (
    <div className="flex flex-col items-center p-8 h-[380px] justify-between pb-[5em]">
      <h2 className="text-[64px] font-[bebas_neue] text-[#000000] mb-6">HISTORIA</h2>
      <p className="text-[40px] font-[bebas_neue] text-[#000000] mb-6">
        UN LARGO CAMINO DE DESAFÍOS Y EXPERIENCIAS ADQUIRIDAS
      </p>

      <div className="relative flex items-center justify-center w-full max-w-4xl">
        {events.map((event, index) => (
          <div key={index} className="flex items-center relative">
            <div className="flex items-center justify-center w-18 h-18 border-2 border-red-500 rounded-full font-bengali text-[20px] text-black relative group">
              <span className="relative z-10">{event.year}</span>
              {event.tooltip && (
                <span className="absolute top-full mt-2 bg-[#D9D9D9] text-black font-bengali font-medium text-[20px] text-justify rounded opacity-0 group-hover:opacity-100 transition-opacity w-[510px] p-8 shadow-lg pointer-events-none">
                  {event.tooltip}
                </span>
              )}
            </div>
            {index < events.length - 1 && <div className="w-35 h-1 bg-red-500"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;