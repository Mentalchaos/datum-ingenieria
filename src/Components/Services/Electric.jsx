import electric from "../../assets/images/servicesPage/electric.png";
import Banner from "../UI/Banner/index.jsx";

const Electric = ({ onBack }) => {
  return (
    <div className="w-full bg-[#EDEDED] flex items-center flex-col">
      <Banner image={electric} />
      <div className="flex justify-start items-center w-[100%] mx-auto">
        <div className="font-bengali font-medium text-[1.4em] cursor-pointer" onClick={onBack}>Volver</div>
      </div>
      <div className="bg-[#EDEDED] my-[5em] flex flex-col items-center">
        <h2 className="font-[bebas_neue] font-normal text-6xl text-center bg-[#EDEDED]">PROYECTOS ELÉCTRICOS</h2>
        <p className="font-bengali font-light text-[32px] text-justify w-[73%] mt-[3em]">
          Nuestra misión es entregarle los mejores servicios en el área Electrica, por lo que prestamos los siguientes servicios
        </p>
      </div>

      <div className="flex w-[90%] my-[5em] justify-between gap-4 flex-wrap">
        <div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
          <p className="font-bengali font-medium text-[20px] text-center">Mallas a tierra</p>
          <span className="hidden group-hover:flex absolute top-[150%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
            Lorem ipsum dolor sit amet consectetur. Quam vitae at risus nibh. Nulla ultrices eget fermentum duis. Aliquam maecenas faucibus eget sagittis eget morbi.. Vulputate at sed pretium ac. Lacus ridiculus eros id cursus volutpat tincidunt.. Metus dignissim felis dignissim dui fermentum dignissim enim eros vulputate.. Ipsum pretium dictum amet cursus cursus quam diam morbi.. Amet enim purus auctor turpis. Purus ipsum tempor semper consectetur dui interdum felis aliquet.. Quisque risus nunc ac enim. Viverra enim suspendisse ac sed porttitor tellus donec eu.. Eu tincidunt suspendisse porttitor at id phasellus sit nibh..
            Todos nuestros proyectos son realizados con la última tecnología en Fotogrametría y LiDAR.
          </span>
        </div>
        <div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
          <p className="font-bengali font-medium text-[20px] text-center">Distribución para redes de MT y BT</p>
          <span className="hidden group-hover:flex absolute top-[150%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
            Lorem ipsum dolor sit amet consectetur. Quam vitae at risus nibh. Nulla ultrices eget fermentum duis. Aliquam maecenas faucibus eget sagittis eget morbi.. Vulputate at sed pretium ac. Lacus ridiculus eros id cursus volutpat tincidunt.. Metus dignissim felis dignissim dui fermentum dignissim enim eros vulputate.. Ipsum pretium dictum amet cursus cursus quam diam morbi.. Amet enim purus auctor turpis. Purus ipsum tempor semper consectetur dui interdum felis aliquet.. Quisque risus nunc ac enim. Viverra enim suspendisse ac sed porttitor tellus donec eu.. Eu tincidunt suspendisse porttitor at id phasellus sit nibh..
            Todos nuestros proyectos son realizados con la última tecnología en Fotogrametría y LiDAR.
          </span>
        </div>
        <div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
          <p className="font-bengali font-medium text-[20px] text-center">Proyectos Lumínicos</p>
          <span className="hidden group-hover:flex absolute top-[150%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
            Lorem ipsum dolor sit amet consectetur. Quam vitae at risus nibh. Nulla ultrices eget fermentum duis. Aliquam maecenas faucibus eget sagittis eget morbi.. Vulputate at sed pretium ac. Lacus ridiculus eros id cursus volutpat tincidunt.. Metus dignissim felis dignissim dui fermentum dignissim enim eros vulputate.. Ipsum pretium dictum amet cursus cursus quam diam morbi.. Amet enim purus auctor turpis. Purus ipsum tempor semper consectetur dui interdum felis aliquet.. Quisque risus nunc ac enim. Viverra enim suspendisse ac sed porttitor tellus donec eu.. Eu tincidunt suspendisse porttitor at id phasellus sit nibh..
            Todos nuestros proyectos son realizados con la última tecnología en Fotogrametría y LiDAR.
          </span>
        </div>
      </div>

      <div className="flex w-[90%] mb-[5em] mt-[3em] justify-between gap-4 flex-wrap">
        <div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
          <p className="font-bengali font-medium text-[20px] text-center p-[25px]">Proyectos cruces con líneas de AT y MT de terceros</p>
          <span className="hidden group-hover:flex absolute top-[150%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
            Lorem ipsum dolor sit amet consectetur. Quam vitae at risus nibh. Nulla ultrices eget fermentum duis. Aliquam maecenas faucibus eget sagittis eget morbi.. Vulputate at sed pretium ac. Lacus ridiculus eros id cursus volutpat tincidunt.. Metus dignissim felis dignissim dui fermentum dignissim enim eros vulputate.. Ipsum pretium dictum amet cursus cursus quam diam morbi.. Amet enim purus auctor turpis. Purus ipsum tempor semper consectetur dui interdum felis aliquet.. Quisque risus nunc ac enim. Viverra enim suspendisse ac sed porttitor tellus donec eu.. Eu tincidunt suspendisse porttitor at id phasellus sit nibh..
            Todos nuestros proyectos son realizados con la última tecnología en Fotogrametría y LiDAR.
          </span>
        </div>
        <div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
          <p className="font-bengali font-medium text-[20px] text-center">Planos de Servidumbre</p>
          <span className="hidden group-hover:flex absolute top-[150%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
            Lorem ipsum dolor sit amet consectetur. Quam vitae at risus nibh. Nulla ultrices eget fermentum duis. Aliquam maecenas faucibus eget sagittis eget morbi.. Vulputate at sed pretium ac. Lacus ridiculus eros id cursus volutpat tincidunt.. Metus dignissim felis dignissim dui fermentum dignissim enim eros vulputate.. Ipsum pretium dictum amet cursus cursus quam diam morbi.. Amet enim purus auctor turpis. Purus ipsum tempor semper consectetur dui interdum felis aliquet.. Quisque risus nunc ac enim. Viverra enim suspendisse ac sed porttitor tellus donec eu.. Eu tincidunt suspendisse porttitor at id phasellus sit nibh..
            Todos nuestros proyectos son realizados con la última tecnología en Fotogrametría y LiDAR.
          </span>
        </div>
        <div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
          <p className="font-bengali font-medium text-[20px] text-center">Planes de instalaciones de terceros</p>
          <span className="hidden group-hover:flex absolute top-[150%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
            Lorem ipsum dolor sit amet consectetur. Quam vitae at risus nibh. Nulla ultrices eget fermentum duis. Aliquam maecenas faucibus eget sagittis eget morbi.. Vulputate at sed pretium ac. Lacus ridiculus eros id cursus volutpat tincidunt.. Metus dignissim felis dignissim dui fermentum dignissim enim eros vulputate.. Ipsum pretium dictum amet cursus cursus quam diam morbi.. Amet enim purus auctor turpis. Purus ipsum tempor semper consectetur dui interdum felis aliquet.. Quisque risus nunc ac enim. Viverra enim suspendisse ac sed porttitor tellus donec eu.. Eu tincidunt suspendisse porttitor at id phasellus sit nibh..
            Todos nuestros proyectos son realizados con la última tecnología en Fotogrametría y LiDAR.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Electric;
