import mision from "../../../assets/images/inicio/mision.png";
import vision from "../../../assets/images/inicio/vision.png";
import { isMobile } from "../../../utils/viewport";

const info = [
  {
    title: "Misión",
    img: mision,
    description:
      "Ser una empresa innovadora y con una marca reconocida a nivel nacional e internacional en el ámbito de la ingeniería, respetando nuestros valores y prestando un servicio de calidad",
    height: "h-[50%]",
  },
  {
    title: "Visión",
    img: vision,
    description:
      "Gestionar el conocimiento, innovando en los servicios de ingeniería y consultoría, con soluciones tecnológicas que permitan mejorar continuamente sus procesos productivos con los más altos estándares, con el fin de asegurar el posicionamiento en el mercado y la conexión total",
    height: "h-[80%]",
  },
];

const MisionVision = () => {
  return (
    <div className={isMobile ? "p-4" : "flex justify-around px-10 py-20"}>
      {info.map(({ title, img, description, height }, index) => (
        <div key={index} className={isMobile ? "w-full" : "w-[47%]"}>
          <p className="font-bebas text-center text-[40px]">{title}</p>
          <div className="group bg-[#EDEDED] p-4 h-[376px] rounded-[10px] flex justify-center items-center relative border-2 border-[#E2E2E2]">
            <img
              src={img}
              alt={title}
              className="h-auto object-cover transition-opacity duration-300 group-hover:opacity-0"
              height={height}
            />
            <p className="opacity-0 absolute inset-0 flex items-center justify-center text-[#000000] text-[20px] text-center transition-opacity duration-300 group-hover:opacity-100 group-hover:z-10 px-4 font-bengali">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MisionVision;
