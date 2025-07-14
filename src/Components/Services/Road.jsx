import road from "../../assets/images/servicesPage/road.png";
import Banner from "../UI/Banner/index.jsx";
import ServiceSection from "../UI/ServiceSection/index.jsx";


const Road = ({ onBack }) => {
  const data = [
    {
      blocks: [
        {
          title: "Movimiento de tierra",
          description: "Supervisamos y controlamos las actividades de excavación, relleno y nivelación, garantizando que se cumplan los planos, especificaciones y normativas de seguridad del proyecto.",
        },
        {
          title: "Paralelismos y atraviesas (MOP y EFE)",
          description: "Gestionamos y verificamos la ejecución segura y correcta de obras que se desarrollan paralelas o cruzan vías ferroviarias o carreteras, cumpliendo estrictamente con las normas del Ministerio de Obras Públicas (MOP) y de la Empresa de Ferrocarriles del Estado (EFE).",
        },
      ]
    },
    {
      blocks: [
        {
          title: "Planes de señalización",
          description: "Elaboramos, revisamos e inspeccionamos planes de señalización vial y de obras para garantizar la seguridad y fluidez del tránsito, minimizando riesgos para peatones y conductores.",
        },
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
        },
      ]
    }
  ];

	return (
		<div className="w-full bg-[#EDEDED] flex items-center flex-col">
			<Banner image={road} />
			<div className="flex justify-start items-center w-[100%] mx-auto pl-2">
				<div className="font-bengali font-medium text-[1.4em] cursor-pointer" onClick={onBack}>Volver</div>
			</div>
			<div className="bg-[#EDEDED] my-[5em] flex flex-col items-center">
				<h2 className="font-[bebas_neue] font-normal text-6xl text-center bg-[#EDEDED]">Vialidad</h2>
				<p className="font-bengali font-light text-[1.5em] text-center w-[73%] mt-[3em]">
          Nuestra misión es entregarle los mejores servicios en el área Electrica, por lo que prestamos los siguientes servicios.
				</p>
			</div>

      <ServiceSection data={data} />











{/*
			<div className="flex w-[60%] mx-auto justify-between mt-[2em] gap-4 flex-wrap">
				<div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
					<p className="font-bengali font-medium text-[20px] text-center">Cálculo para movimiento de tierra</p>
					<span className="hidden group-hover:flex absolute top-[150%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
						Lorem ipsum dolor sit amet consectetur. Quam vitae at risus nibh. Nulla ultrices eget fermentum duis. Aliquam maecenas faucibus eget sagittis eget morbi.. Vulputate at sed pretium ac. Lacus ridiculus eros id cursus volutpat tincidunt.. Metus dignissim felis dignissim dui fermentum dignissim enim eros vulputate.. Ipsum pretium dictum amet cursus cursus quam diam morbi.. Amet enim purus auctor turpis. Purus ipsum tempor semper consectetur dui interdum felis aliquet.. Quisque risus nunc ac enim. Viverra enim suspendisse ac sed porttitor tellus donec eu.. Eu tincidunt suspendisse porttitor at id phasellus sit nibh..
						Todos nuestros proyectos son realizados con la última tecnología en Fotogrametría y LiDAR.
					</span>
				</div>
				<div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
					<p className="font-bengali font-medium text-[20px] text-center p-[43px]">Diseño de planes de señalización</p>
					<span className="hidden group-hover:flex absolute top-[150%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
						Lorem ipsum dolor sit amet consectetur. Quam vitae at risus nibh. Nulla ultrices eget fermentum duis. Aliquam maecenas faucibus eget sagittis eget morbi.. Vulputate at sed pretium ac. Lacus ridiculus eros id cursus volutpat tincidunt.. Metus dignissim felis dignissim dui fermentum dignissim enim eros vulputate.. Ipsum pretium dictum amet cursus cursus quam diam morbi.. Amet enim purus auctor turpis. Purus ipsum tempor semper consectetur dui interdum felis aliquet.. Quisque risus nunc ac enim. Viverra enim suspendisse ac sed porttitor tellus donec eu.. Eu tincidunt suspendisse porttitor at id phasellus sit nibh..
						Todos nuestros proyectos son realizados con la última tecnología en Fotogrametría y LiDAR.
					</span>
				</div>
			</div>
			<div className="flex w-[60%] mx-auto justify-between mt-[5em] mb-[5em] gap-4 flex-wrap">
				<div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
					<p className="font-bengali font-medium text-[20px] text-center p-[43px]">Diseño de planes de señalización</p>
					<span className="hidden group-hover:flex absolute top-[150%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
						Lorem ipsum dolor sit amet consectetur. Quam vitae at risus nibh. Nulla ultrices eget fermentum duis. Aliquam maecenas faucibus eget sagittis eget morbi.. Vulputate at sed pretium ac. Lacus ridiculus eros id cursus volutpat tincidunt.. Metus dignissim felis dignissim dui fermentum dignissim enim eros vulputate.. Ipsum pretium dictum amet cursus cursus quam diam morbi.. Amet enim purus auctor turpis. Purus ipsum tempor semper consectetur dui interdum felis aliquet.. Quisque risus nunc ac enim. Viverra enim suspendisse ac sed porttitor tellus donec eu.. Eu tincidunt suspendisse porttitor at id phasellus sit nibh..
						Todos nuestros proyectos son realizados con la última tecnología en Fotogrametría y LiDAR.
					</span>
				</div>
				<div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
					<p className="font-bengali font-medium text-[20px] text-center">Proyectos de Paralelismo y Atraviesos (MOP y EFE)</p>
					<span className="hidden group-hover:flex absolute top-[150%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
						Lorem ipsum dolor sit amet consectetur. Quam vitae at risus nibh. Nulla ultrices eget fermentum duis. Aliquam maecenas faucibus eget sagittis eget morbi.. Vulputate at sed pretium ac. Lacus ridiculus eros id cursus volutpat tincidunt.. Metus dignissim felis dignissim dui fermentum dignissim enim eros vulputate.. Ipsum pretium dictum amet cursus cursus quam diam morbi.. Amet enim purus auctor turpis. Purus ipsum tempor semper consectetur dui interdum felis aliquet.. Quisque risus nunc ac enim. Viverra enim suspendisse ac sed porttitor tellus donec eu.. Eu tincidunt suspendisse porttitor at id phasellus sit nibh..
						Todos nuestros proyectos son realizados con la última tecnología en Fotogrametría y LiDAR.
					</span>
				</div>
			</div> */}



		</div>
	)
};

export default Road;
