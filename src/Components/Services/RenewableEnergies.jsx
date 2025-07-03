import energies from "../../assets/images/servicesPage/energies.png";
import Banner from "../UI/Banner/index.jsx";

const RenewableEnergies = ({ onBack }) => {
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
			<div className="flex w-[90%] justify-between gap-4 flex-wrap">
				{[
					"Diseño accesos viales",
					"Planos de servidumbre",
					"Cálculo para movimientos de tierra (Cubicación y plataforma)"
				].map((text, index) => (
					<div key={index} className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
						<p className="font-bengali font-medium text-[20px] text-center">{text}</p>
						<span className="hidden group-hover:flex absolute top-[70%] border-1 left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
							Lorem ipsum dolor sit amet consectetur. Quam vitae at risus nibh. Nulla ultrices eget fermentum duis. Aliquam maecenas faucibus eget sagittis eget morbi.. Vulputate at sed pretium ac. Lacus ridiculus eros id cursus volutpat tincidunt.. Metus dignissim felis dignissim dui fermentum dignissim enim eros vulputate.. Ipsum pretium dictum amet cursus cursus quam diam morbi.. Amet enim purus auctor turpis. Purus ipsum tempor semper consectetur dui interdum felis aliquet.. Quisque risus nunc ac enim. Viverra enim suspendisse ac sed porttitor tellus donec eu.. Eu tincidunt suspendisse porttitor at id phasellus sit nibh..
							Todos nuestros proyectos son realizados con la última tecnología en Fotogrametría y LiDAR.
						</span>
					</div>
				))}
			</div>
			<div className="flex w-[60%] mx-auto justify-center mt-[5em] my-[5em]">
				<div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
					<p className="font-bengali font-medium text-[20px] text-center">
						Proyectos de paralelismo y atraviesos (para bienes nacionales de uso público)
					</p>
					<span className="hidden group-hover:flex absolute top-[70%] border-1 left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
						Lorem ipsum dolor sit amet consectetur. Quam vitae at risus nibh. Nulla ultrices eget fermentum duis. Aliquam maecenas faucibus eget sagittis eget morbi.. Vulputate at sed pretium ac. Lacus ridiculus eros id cursus volutpat tincidunt.. Metus dignissim felis dignissim dui fermentum dignissim enim eros vulputate.. Ipsum pretium dictum amet cursus cursus quam diam morbi.. Amet enim purus auctor turpis. Purus ipsum tempor semper consectetur dui interdum felis aliquet.. Quisque risus nunc ac enim. Viverra enim suspendisse ac sed porttitor tellus donec eu.. Eu tincidunt suspendisse porttitor at id phasellus sit nibh..
						Todos nuestros proyectos son realizados con la última tecnología en Fotogrametría y LiDAR.
					</span>
				</div>
			</div>
			<div className="flex w-[90%] mb-[5em] justify-between gap-4 flex-wrap">
				{[
					"Proyectos eléctricos de evacuación",
					"Vialidad interior y obras de saneamiento",
					"Replanteo de obras"
				].map((text, index) => (
					<div key={index} className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
						<p className="font-bengali font-medium text-[20px] text-center">{text}</p>
						<span className="hidden group-hover:flex absolute top-[70%] border-1 left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
							Lorem ipsum dolor sit amet consectetur. Quam vitae at risus nibh. Nulla ultrices eget fermentum duis. Aliquam maecenas faucibus eget sagittis eget morbi.. Vulputate at sed pretium ac. Lacus ridiculus eros id cursus volutpat tincidunt.. Metus dignissim felis dignissim dui fermentum dignissim enim eros vulputate.. Ipsum pretium dictum amet cursus cursus quam diam morbi.. Amet enim purus auctor turpis. Purus ipsum tempor semper consectetur dui interdum felis aliquet.. Quisque risus nunc ac enim. Viverra enim suspendisse ac sed porttitor tellus donec eu.. Eu tincidunt suspendisse porttitor at id phasellus sit nibh..
							Todos nuestros proyectos son realizados con la última tecnología en Fotogrametría y LiDAR.
						</span>
					</div>
				))}
			</div>
		</div>
	)
};

export default RenewableEnergies;
