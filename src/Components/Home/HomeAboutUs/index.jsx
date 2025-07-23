import InfoBox from "../../UI/InfoBox/InfoBox";
import us from "../../../assets/images/inicio/us.png";
import { isMobile } from "../../../utils/viewport.js";


const numbers = [
  {
    title: "26 AÑOS",
    description: "Desarrollando proyectos de ingeniería, topografía y geomensura"
  },
  {
    title: "2.200",
    description: "2.200 proyectos de dirección de vialidad para el ministerio de obras públicas entre los años 2021-2025"
  },
  {
    title: "3.500",
    description: "Contamos con 3.500 proyectos eléctricos entre los años 2021-2025"
  }
];

const HomeAboutUs = () => {
  return (
    <div className={isMobile() ? "text-[#181818] bg-[#EBEBEB] font-[roboto] p-4" : "text-[#181818] bg-[#EBEBEB] font-[roboto] py-12 px-10"}>
      <div className="flex justify-center font-bebas text-[3em]">
        SOBRE NOSOTROS
      </div>
      <InfoBox width="w-full" height={isMobile() ? "h-full" : "h-[821px]"} >
        <div className={isMobile() ? "items-start justify-evenly py-10" : "flex items-start justify-evenly h-1/2 pt-10 mb-10"}>
          <img
            alt="us"
            className={isMobile() ? "h-full object-cover rounded-md w-full" : "h-full object-cover rounded-md w-[55%]"}
            src={us}
            />
            <div className={isMobile() ? "w-full text-justify font-bengali flex justify-center" : "w-[40%] text-justify font-bengali flex justify-center"}>
            <div>
              <div className={isMobile() ? "font-bengali font-medium leading-[100%] tracking-[4%] text-justify text-gray-800" : "font-bengali font-medium leading-[100%] tracking-[4%] text-justify text-gray-800 pr-10"}>
                <p className="pt-10 mb-5 leading-[1.5] text-[1em]">Fundada en el año 1999, Datum Ingeniería, cuenta con una gran trayectoria y experiencia, participando y desarrollando proyectos en diversas áreas de la Ingeniería.</p>
                <p className="leading-[1.5] text-[1em]">Nuestra empresa se enorgullece de contar con un sólido historial respaldado por números que hablan por sí mismos. Con una amplia cartera de proyectos exitosos en nuestro haber, hemos demostrado nuestra experiencia y capacidad una y otra vez.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={isMobile() ? "flex flex-col items-center font-bengali mb-[1em] text-justify" : "h-1/2 flex flex-col items-center font-bengali px-8 mb-[1em]"}>
          <div className="text-[1.1em] mb-[1em]">
            Cada proyecto completado es un testimonio de nuestro compromiso con la excelencia y la
            satisfacción del cliente. En Datum, nuestros números hablan de la dedicación y habilidad para
            llevar a cabo proyectos de manera exitosa y confiable.
          </div>

          <div className={isMobile() ? "grid grid-cols-1 gap-4 w-[70%]" : "grid grid-cols-3 gap-4 w-[70%]"} >
            {numbers.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="text-[#000000] font-[bebas_neue] text-[3em]">{item.title}</p>
                <p className="text-[#000000] text-[1em] text-center w-[220px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </InfoBox>
    </div>
  );
};

HomeAboutUs.displayName = "HomeAboutUs";

export default HomeAboutUs;

