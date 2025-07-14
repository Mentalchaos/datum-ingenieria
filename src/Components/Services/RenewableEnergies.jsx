import energies from "../../assets/images/servicesPage/energies.png";
import Banner from "../UI/Banner/index.jsx";
import ServiceSection from "../UI/ServiceSection/index.jsx";


const RenewableEnergies = ({ onBack }) => {
  const data = [
    {
      blocks: [
      {
        title: "Diseño accesos viales",
        description: "Diseñamos y proyectamos caminos de acceso hacia plantas de energías renovables, garantizando seguridad, eficiencia y cumplimiento de normativas.",
      },
      {
        title: "Planos de servidumbre",
        description: "Elaboramos los planos que determinan los terrenos necesarios para el paso de infraestructuras, como líneas eléctricas o caminos, minimizando el impacto y asegurando la viabilidad legal del proyecto."
      },
      {
        title: "Cálculo para movimientos de tierra (Cubicación y plataforma)",
        description: "Realizamos estudios y cálculos precisos del volumen de tierra a remover o adicionar para la correcta nivelación y preparación de plataformas para equipos e infraestructuras."
      }
      ]
    },
    {
      blocks: [
      {
        title: "Proyectos de paralelismo y atraviesos (para bienes nacionales de uso público)",
        description: "Desarrollamos y gestionamos proyectos que permiten la instalación segura de infraestructuras junto a (paralelismo) o cruzando (atravieso) caminos, ríos o vías públicas, cumpliendo las exigencias legales."
      }
      ]
    },
    {
      blocks: [
      {
        title: "Proyectos eléctricos de evacuación",
        description: "Diseñamos y verificamos sistemas eléctricos que permiten la conexión y evacuación de la energía generada por plantas renovables hacia las redes de distribución."
      },
      {
        title: "Vialidad interior y obras de saneamiento",
        description: "Proyectamos y supervisamos la construcción de caminos internos y obras de drenaje en plantas de energías renovables, asegurando accesos seguros y manejo adecuado de aguas."
      },
      {
        title: "Replanteo de obras",
        description: "Ofrecemos servicios de marcación y verificación en terreno para la correcta ejecución de las obras, asegurando que se construyan según los planos y especificaciones del proyecto."
      }
      ]
    }
  ]

	return (
		<div className="w-full bg-[#EDEDED] flex items-center flex-col">
      <Banner image={energies} />
			<div className="flex justify-start items-center w-[100%] mx-auto pl-2">
				<div className="font-bengali font-medium text-[1.4em] cursor-pointer" onClick={onBack}>Volver</div>
			</div>
			<div className="bg-[#EDEDED] my-[5em] flex flex-col items-center">
				<h2 className="font-[bebas_neue] font-normal text-6xl text-center bg-[#EDEDED]">Energías renovables</h2>
				<p className="font-bengali font-light text-[32px] text-justify w-[90%] mt-[3em]">
					Prestamos servicios para proyectos de Energías Renovables, aquí se los presentamos
				</p>
			</div>

			<ServiceSection data={data} />
		</div>
	)
};

export default RenewableEnergies;
