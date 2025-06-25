import topografy from "../../assets/images/servicesPage/topography.png";
import Banner from "../UI/Banner/index.jsx";

const Topography = ({ onBack }) => {
	return (
		<div className="w-full bg-[#EDEDED] flex items-center flex-col">
      <Banner image={topografy} />
      <div className="flex justify-start items-center w-[100%] mx-auto">
        <div className="font-bengali font-medium text-[1.4em] cursor-pointer" onClick={onBack}>Volver</div>
      </div>
			<div className="bg-[#EDEDED] my-[3em]">
				<h2 className="font-[bebas_neue] font-normal text-6xl text-center bg-[#EDEDED]">Topografía</h2>
			</div>
			<div className="flex w-[60%] mx-auto justify-between gap-4 flex-wrap">
				<div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
					<p className="font-bengali font-medium text-[1.2em] text-center">Subestaciones Eléctricas</p>
					<div className="hidden group-hover:block absolute top-[70%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10 border border-gray-300">
						Realizamos estudios y levantamientos topográficos precisos para la planificación,
						construcción y mantenimiento de subestaciones eléctricas, asegurando seguridad y
						eficiencia en cada etapa del proyecto.
					</div>
				</div>
				<div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
					<p className="font-bengali font-medium text-[1.2em] text-center p-[25px]">Levantamientos costeros y batimetría</p>
					<div className="hidden group-hover:block absolute top-[70%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10 border border-gray-300">
						Ofrecemos mediciones detalladas de la costa y del lecho marino para estudios
						ambientales, obras portuarias, y control de erosión, utilizando tecnología de vanguardia
						en batimetría y levantamientos hidrográficos.
					</div>
				</div>
			</div>
			<div className="flex w-[90%] my-[5em] justify-between gap-4 flex-wrap">
				<div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
					<p className="font-bengali font-medium text-[1.2em] text-center">Topografía Urbana</p>
					<div className="hidden group-hover:block absolute top-[70%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10 border border-gray-300">
						Desarrollamos levantamientos topográficos para proyectos urbanos, como vialidades,
						edificaciones, y servicios públicos, garantizando datos exactos para la correcta ejecución
						de las obras.
					</div>
				</div>
				<div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
					<p className="font-bengali font-medium text-[1.2em] text-center p-[35px]">Montaje Mecánico y de Estructuras</p>
					<div className="hidden group-hover:block absolute top-[70%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10 border border-gray-300">
						Proveemos servicios de alineación, instalación y ajuste de componentes mecánicos y
						estructuras metálicas, asegurando la precisión y seguridad requeridas en proyectos
						industriales y de infraestructura.
					</div>
				</div>
				<div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
					<p className="font-bengali font-medium text-[1.2em] text-center">Ferrocarriles</p>
					<div className="hidden group-hover:block absolute top-[70%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10 border border-gray-300">
						Brindamos soluciones topográficas y de ingeniería para proyectos ferroviarios,
						incluyendo trazado de vías, estudios de terreno y monitoreo estructural para garantizar la
						seguridad y eficiencia operativa.
					</div>
				</div>
			</div>
			<div className="flex w-[60%] mx-auto justify-between gap-4 flex-wrap mb-[5em]">
				<div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
					<p className="font-bengali font-medium text-[1.2em] text-center">Líneas de Alta Tensión (AT)</p>
					<div className="hidden group-hover:block absolute top-[70%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10 border border-gray-300">
						Realizamos estudios y levantamientos topográficos para la construcción y mantenimiento
						de líneas de transmisión eléctrica, optimizando rutas y minimizando impactos
						ambientales.
					</div>
				</div>
				<div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
					<p className="font-bengali font-medium text-[1.2em] text-center">GPS y Geodesia</p>
					<div className="hidden group-hover:block absolute top-[70%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10 border border-gray-300">
						Ofrecemos servicios de georreferenciación y posicionamiento preciso mediante
						tecnología GPS y técnicas geodésicas para garantizar la máxima exactitud en proyectos
						de infraestructura y desarrollo territorial.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Topography;
