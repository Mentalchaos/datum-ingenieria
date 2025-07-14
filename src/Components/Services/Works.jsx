import works from "../../assets/images/servicesPage/works.png";
import Banner from "../UI/Banner/index.jsx";
import ServiceSection from "../UI/ServiceSection/index.jsx";

const Works = ({ onBack }) => {
  const data = [
    {
      blocks: [
        {
          title: "Movimientos de tierra",
          description: "Supervisamos y controlamos las actividades de excavación, relleno y nivelación, garantizando que se cumplan los planos, especificaciones y normativas de seguridad del proyecto.",
        },
        {
          title: "Paralelismos y atraviesas (MOP y EFE)",
          description: "Gestionamos y verificamos la ejecución segura y correcta de obras que se desarrollan paralelas o cruzan vías ferroviarias o carreteras, cumpliendo estrictamente con las normas del Ministerio de Obras Públicas (MOP) y de la Empresa de Ferrocarriles del Estado (EFE).",
        }
      ]
    },
    {
      blocks: [
        {
          title: "Planes de señalización",
          description: "Elaboramos, revisamos e inspeccionamos planes de señalización vial y de obras para garantizar la seguridad y fluidez del tránsito, minimizando riesgos para peatones y conductores.",
        }
      ]
    },
    {
      blocks: [
        {
          title: "Construcción de líneas eléctricas MT y BT",
          description: "Realizamos la inspección técnica de la instalación de líneas de media (MT) y baja tensión (BT), asegurando calidad, cumplimiento normativo y prevención de riesgos eléctricos.",
        },
        {
          title: "Proyectos viales",
          description: "Supervisamos y controlamos la correcta ejecución de proyectos de caminos, carreteras y accesos, asegurando el cumplimiento de los estándares técnicos y de seguridad vial.",
        }
      ]
    }
  ];


	return (
		<div className="w-full bg-[#EDEDED] flex items-center flex-col">
			<Banner image={works} />
			<div className="flex justify-start items-center w-[100%] mx-auto pl-2">
				<div className="font-bengali font-medium text-[1.4em] cursor-pointer" onClick={onBack}>Volver</div>
			</div>
			<div className="bg-[#EDEDED] my-[3em]">
				<h2 className="font-[bebas_neue] font-normal text-6xl text-center bg-[#EDEDED]">INSPECCIÓN TÉCNICA DE OBRAS</h2>
				<p className="font-bengali font-light text-[32px] text-justify mt-[3em]">Realizamos Inspecciones de obras en las siguientes áreas</p>
			</div>

      <ServiceSection data={data} />
		</div>
	);
};

export default Works;
