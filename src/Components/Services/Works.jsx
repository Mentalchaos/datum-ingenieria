import works from "../../assets/images/servicesPage/works.png";
import Banner from "../UI/Banner/index.jsx";

const Works = ({ onBack }) => {
	return (
		<div className="w-full bg-[#EDEDED] flex items-center flex-col">
			<Banner image={works} />
			<div className="flex justify-start items-center w-[100%] mx-auto">
				<div className="font-bengali font-medium text-[1.4em] cursor-pointer" onClick={onBack}>Volver</div>
			</div>
			<div className="bg-[#EDEDED] my-[3em]">
				<h2 className="font-[bebas_neue] font-normal text-6xl text-center bg-[#EDEDED]">INSPECCIÓN TÉCNICA DE OBRAS</h2>
				<p className="font-bengali font-light text-[32px] text-justify mt-[3em]">Realizamos Inspecciones de obras en las siguientes áreas</p>
			</div>

			<div className="flex w-[60%] mx-auto justify-between mt-[2em] gap-4 flex-wrap">
				<div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
					<p className="font-bengali font-medium text-[20px] text-center">Movimientos de tierra</p>
					<div className="hidden group-hover:block absolute top-[70%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10 border border-gray-300">
						Supervisamos y controlamos las actividades de excavación, relleno y nivelación,
						garantizando que se cumplan los planos, especificaciones y normativas de seguridad del
						proyecto.
					</div>
				</div>
				<div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
					<p className="font-bengali font-medium text-[20px] text-center p-[25px]">Paralelismos y atraviesas (MOP y EFE)</p>
					<div className="hidden group-hover:block absolute top-[70%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10 border border-gray-300">
						Gestionamos y verificamos la ejecución segura y correcta de obras que se desarrollan
						paralelas o cruzan vías ferroviarias o carreteras, cumpliendo estrictamente con las normas
						del Ministerio de Obras Públicas (MOP) y de la Empresa de Ferrocarriles del Estado
						(EFE).
					</div>
				</div>
			</div>

			<div className="flex w-[90%] my-[5em] justify-center flex-wrap">
				<div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
					<p className="font-bengali font-medium text-[20px] text-center">Planes de señalización</p>
					<div className="hidden group-hover:block absolute top-[70%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10 border border-gray-300">
						Elaboramos, revisamos e inspeccionamos planes de señalización vial y de obras para
						garantizar la seguridad y fluidez del tránsito, minimizando riesgos para peatones y
						conductores.
					</div>
				</div>
			</div>

			<div className="flex w-[60%] mx-auto justify-between mb-[5em] gap-4 flex-wrap">
				<div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
					<p className="font-bengali font-medium text-[20px] text-center p-[30px]">Construcción de líneas eléctricas MT y BT</p>
					<div className="hidden group-hover:block absolute top-[70%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10 border border-gray-300">
						Realizamos la inspección técnica de la instalación de líneas de media (MT) y baja tensión
						(BT), asegurando calidad, cumplimiento normativo y prevención de riesgos eléctricos.
					</div>
				</div>
				<div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
					<p className="font-bengali font-medium text-[20px] text-center">Proyectos viales</p>
					<div className="hidden group-hover:block absolute top-[70%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10 border border-gray-300">
						Supervisamos y controlamos la correcta ejecución de proyectos de caminos, carreteras y
						accesos, asegurando el cumplimiento de los estándares técnicos y de seguridad vial.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Works;
