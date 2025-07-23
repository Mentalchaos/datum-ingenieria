import electric from "../../assets/images/servicesPage/electric.png";
import logo from "../../assets/images/logo.svg";
import Banner from "../UI/Banner/index.jsx";
import ServiceSection from "../UI/ServiceSection/index.jsx";
import { isMobile } from "../../utils/viewport";


const Item = ({ title, description, image }) => {
  return (
    <div className="relative group border-[3px] w-full h-[140px] flex items-center justify-between border-gray-300 rounded-lg">
      <div className="font-bengali font-medium text-[1.5em] text-center flex items-center justify-center gap-2 p-[25px] w-full">
        <div><img src={image} alt="earth" className="w-18 h-18" /></div>
        <div className="text-center w-full">{title}</div>
      </div>
      <span className="hidden group-hover:flex absolute top-[70%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
        {description}
      </span>
  </div>
  )
}

const Electric = ({ onBack }) => {
  const data = [
    {
      blocks: [
        {
          title: "Mallas a tierra",
          description: "Diseñamos e instalamos sistemas de puesta a tierra que garantizan la seguridad de las personas y la protección de los equipos eléctricos frente a descargas o fallos",
        },
        {
          title: "istribución de redes de MT y BT",
          description: "Proyectamos y supervisamos la instalación de redes eléctricas de media tensión (MT) y baja tensión (BT), asegurando una distribución segura, eficiente y conforme a normativa."
        },
        {
          title: "Proyectos lumínicos",
          description: "Desarrollamos planes de iluminación para espacios públicos, industriales o privados, optimizando la eficiencia energética y cumpliendo los estándares de seguridad y confort."
        }
      ]
    },
    {
      blocks: [
        {
          title: "Proyectos de cruces con líneas de AT y MT de terceros",
          description: "Diseñamos y gestionamos los permisos necesarios para la ejecución de obras que deben cruzar infraestructuras eléctricas de alta (AT) o media tensión (MT) existentes."
        },
        {
          title: "Planos de servidumbre",
          description: "Elaboramos la documentación técnica que define las franjas de terreno necesarias para la instalación y mantenimiento de redes eléctricas, respetando las normativas legales."
        },
        {
          title: "Planes de instalaciones de terceros",
          description: "Asesoramos y desarrollamos los estudios y documentación requeridos para que terceros puedan instalar infraestructuras en áreas reguladas o junto a instalaciones eléctricas existentes."
        }
      ]
    }
  ]


  const itemDate = [
    {
      title: "Mallas a tierra",
      description: "Lorem ipsum dolor sit amet consectetur. Quam vitae at risus nibh. Nulla ultrices eget fermentum duis. Aliquam maecenas faucibus eget sagittis eget morbi.. Vulputate at sed pretium ac. Lacus ridiculus eros id cursus volutpat tincidunt.. Metus dignissim felis dignissim dui fermentum dignissim enim eros vulputate.. Ipsum pretium dictum amet cursus cursus quam diam morbi.. Amet enim purus auctor turpis. Purus ipsum tempor semper consectetur dui interdum felis aliquet.. Quisque risus nunc ac enim. Viverra enim suspendisse ac sed porttitor tellus donec eu.. Eu tincidunt suspendisse porttitor at id phasellus sit nibh..",
      image: logo
    },
    {
      title: "Distribución para redes de MT y BT",
      description: "Lorem ipsum dolor sit amet consectetur. Quam vitae at risus nibh. Nulla ultrices eget fermentum duis. Aliquam maecenas faucibus eget sagittis eget morbi.. Vulputate at sed pretium ac. Lacus ridiculus eros id cursus volutpat tincidunt.. Metus dignissim felis dignissim dui fermentum dignissim enim eros vulputate.. Ipsum pretium dictum amet cursus cursus quam diam morbi.. Amet enim purus auctor turpis. Purus ipsum tempor semper consectetur dui interdum felis aliquet.. Quisque risus nunc ac enim. Viverra enim suspendisse ac sed porttitor tellus donec eu.. Eu tincidunt suspendisse porttitor at id phasellus sit nibh..",
      image: logo
    },
    {
      title: "Proyectos Lumínicos",
      description: "Lorem ipsum dolor sit amet consectetur. Quam vitae at risus nibh. Nulla ultrices eget fermentum duis. Aliquam maecenas faucibus eget sagittis eget morbi.. Vulputate at sed pretium ac. Lacus ridiculus eros id cursus volutpat tincidunt.. Metus dignissim felis dignissim dui fermentum dignissim enim eros vulputate.. Ipsum pretium dictum amet cursus cursus quam diam morbi.. Amet enim purus auctor turpis. Purus ipsum tempor semper consectetur dui interdum felis aliquet.. Quisque risus nunc ac enim. Viverra enim suspendisse ac sed porttitor tellus donec eu.. Eu tincidunt suspendisse porttitor at id phasellus sit nibh..",
      image: logo
    },
    {
      title: "Proyectos cruces con líneas de AT y MT de terceros",
      description: "Lorem ipsum dolor sit amet consectetur. Quam vitae at risus nibh. Nulla ultrices eget fermentum duis. Aliquam maecenas faucibus eget sagittis eget morbi.. Vulputate at sed pretium ac. Lacus ridiculus eros id cursus volutpat tincidunt.. Metus dignissim felis dignissim dui fermentum dignissim enim eros vulputate.. Ipsum pretium dictum amet cursus cursus quam diam morbi.. Amet enim purus auctor turpis. Purus ipsum tempor semper consectetur dui interdum felis aliquet.. Quisque risus nunc ac enim. Viverra enim suspendisse ac sed porttitor tellus donec eu.. Eu tincidunt suspendisse porttitor at id phasellus sit nibh..",
      image: logo
    },
    {
      title: "Planos de Servidumbre",
      description: "Lorem ipsum dolor sit amet consectetur. Quam vitae at risus nibh. Nulla ultrices eget fermentum duis. Aliquam maecenas faucibus eget sagittis eget morbi.. Vulputate at sed pretium ac. Lacus ridiculus eros id cursus volutpat tincidunt.. Metus dignissim felis dignissim dui fermentum dignissim enim eros vulputate.. Ipsum pretium dictum amet cursus cursus quam diam morbi.. Amet enim purus auctor turpis. Purus ipsum tempor semper consectetur dui interdum felis aliquet.. Quisque risus nunc ac enim. Viverra enim suspendisse ac sed porttitor tellus donec eu.. Eu tincidunt suspendisse porttitor at id phasellus sit nibh..",
      image: logo
    },
    {
      title: "Planes de instalaciones de terceros",
      description: "Lorem ipsum dolor sit amet consectetur. Quam vitae at risus nibh. Nulla ultrices eget fermentum duis. Aliquam maecenas faucibus eget sagittis eget morbi.. Vulputate at sed pretium ac. Lacus ridiculus eros id cursus volutpat tincidunt.. Metus dignissim felis dignissim dui fermentum dignissim enim eros vulputate.. Ipsum pretium dictum amet cursus cursus quam diam morbi.. Amet enim purus auctor turpis. Purus ipsum tempor semper consectetur dui interdum felis aliquet.. Quisque risus nunc ac enim. Viverra enim suspendisse ac sed porttitor tellus donec eu.. Eu tincidunt suspendisse porttitor at id phasellus sit nibh..",
      image: logo
    }
  ];

  const itemRender = () => {
    return itemDate.map((item) => (
      <Item key={item.title} title={item.title} description={item.description} image={item.image} />
    ))
  }

  return (
    <div className="w-full bg-[#EDEDED] flex items-center flex-col">
      <Banner image={electric} />
      <div className="flex justify-start items-center w-[100%] mx-auto pl-2">
        <div className="font-bengali font-medium text-[1.4em] cursor-pointer" onClick={onBack}>Volver</div>
      </div>
      <div className="bg-[#EDEDED] my-[5em] flex flex-col">
        <h2 className="font-[bebas_neue] font-normal text-6xl text-center bg-[#EDEDED]">PROYECTOS ELÉCTRICOS</h2>
        <p className={isMobile() ? "font-bengali font-light text-[1.5em] text-justify w-full mt-[3em]" : "font-bengali font-light text-[2em] text-center w-full mt-[3em] max-w-[1000px] mx-auto"}>
          Nuestra misión es entregarle los mejores servicios en el área Electrica, por lo que prestamos los siguientes servicios
        </p>
      </div>

      <ServiceSection data={data} />
    </div>
  );
};

export default Electric;
