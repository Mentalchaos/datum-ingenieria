import topografy from "../../assets/images/servicesPage/topography.png";
import Banner from "../UI/Banner/index.jsx";
import ServiceCard from "../UI/ServiceCard/index.jsx";

const Topography = ({ onBack }) => {
  const itemData = [
    {
      title: "Subestaciones Eléctricas",
      description: "Realizamos estudios y levantamientos topográficos precisos para la planificación, construcción y mantenimiento de subestaciones eléctricas, asegurando seguridad y eficiencia en cada etapa del proyecto.",
    },
    {
      title: "Levantamientos costeros y batimetría",
      description: "Ofrecemos mediciones detalladas de la costa y del lecho marino para estudios ambientales, obras portuarias, y control de erosión, utilizando tecnología de vanguardia en batimetría y levantamientos hidrográficos.",
    },
    {
      title: "Topografía Urbana",
      description: "Desarrollamos levantamientos topográficos para proyectos urbanos, como vialidades, edificaciones, y servicios públicos, garantizando datos exactos para la correcta ejecución de las obras.",
    },
    {
      title: "Montaje Mecánico y de Estructuras",
      description: "Proveemos servicios de alineación, instalación y ajuste de componentes mecánicos y estructuras metálicas, asegurando la precisión y seguridad requeridas en proyectos industriales y de infraestructura.",
    },
    {
      title: "Ferrocarriles",
      description: "Brindamos soluciones topográficas y de ingeniería para proyectos ferroviarios, incluyendo trazado de vías, estudios de terreno y monitoreo estructural para garantizar la seguridad y eficiencia operativa.",
    },
    {
      title: "Líneas de Alta Tensión (AT)",
      description: "Realizamos estudios y levantamientos topográficos para la construcción y mantenimiento de líneas de transmisión eléctrica, optimizando rutas y minimizando impactos ambientales.",
    },
    {
      title: "GPS y Geodesia",
      description: "Ofrecemos servicios de georreferenciación y posicionamiento preciso mediante tecnología GPS y técnicas geodésicas para garantizar la máxima exactitud en proyectos de infraestructura y desarrollo territorial.",
    }
  ];

  const itemRender = () => {
    return itemData.map((item) => (
      <ServiceCard key={item.title} title={item.title} description={item.description} image={item.image} />
    ));
  };

  const col1 = itemData.slice(0, 2).map((item) => (
    <ServiceCard key={item.title} title={item.title} description={item.description} image={item.image} />
  ));
  const col2 = itemData.slice(2, 5).map((item) => (
    <ServiceCard key={item.title} title={item.title} description={item.description} image={item.image} />
  ));
  const col3 = itemData.slice(5, 7).map((item) => (
    <ServiceCard key={item.title} title={item.title} description={item.description} image={item.image} />
  ));

	return (
		<div className="w-full bg-[#EDEDED] flex items-center flex-col">
      <Banner image={topografy} />
      <div className="flex justify-start items-center w-[100%] mx-auto pl-2">
        <div className="font-bengali font-medium text-[1.4em] cursor-pointer" onClick={onBack}>Volver</div>
      </div>
			<div className="bg-[#EDEDED] my-[3em]">
				<h2 className="font-[bebas_neue] font-normal text-6xl text-center bg-[#EDEDED]">Topografía</h2>
			</div>
      <div>
        <div className="grid grid-cols-2 gap-10 mb-10 w-[60%] mx-auto">{col1}</div>
        <div className="grid grid-cols-3 gap-10 mb-10 w-[100%] mx-auto">{col2}</div>
        <div className="grid grid-cols-2 gap-10 w-[60%] mx-auto">{col3}</div>
      </div>
		</div>
	);
};

export default Topography;
