import InfoBox from "../../UI/InfoBox/InfoBox";
import us from "../../../assets/images/inicio/us.png";

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
    <div className="text-[#181818] bg-[#E2E2E2] font-[roboto] py-12 px-10">
      <div className="flex justify-center font-bebas text-[64px] pb-10">
        sobre nosotros
      </div>
      <InfoBox width="w-full" height="h-[821]">
        <div className="flex items-center text-[20px] justify-evenly h-1/2 pt-10 px-8 pb-8">
          <img
            alt="us"
            className="h-full object-cover rounded-md w-[55%]"
            src={us}
          />
          <div className="w-[45%] p-[3em] text-justify font-bengali flex justify-center">
            <div>
              <div className="font-bengali font-medium text-[20px] leading-[100%] tracking-[4%] text-justify text-gray-800 space-y-2">
                <p>Fundada en el año 1999, Datum Ingeniería,</p>
                <p>cuenta con una gran trayectoria y experiencia,</p>
                <p>participando y desarrollando proyectos en</p>
                <p className="mb-10">diversas áreas de la Ingeniería.</p>

                <p>Nuestra empresa se enorgullece de contar con</p>
                <p>un sólido historial respaldado por números</p>
                <p>que hablan por sí mismos. Con una amplia</p>
                <p>cartera de proyectos exitosos en nuestro haber,</p>
                <p>hemos demostrado nuestra experiencia y</p>
                <p>capacidad una y otra vez.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1/2 text-[20px] flex flex-col items-center font-bengali px-8">
          <div>
            Cada proyecto completado es un testimonio de nuestro compromiso con la excelencia y la 
            satisfacción del cliente. En Datum, nuestros números hablan de la dedicación y habilidad para 
            llevar a cabo proyectos de manera exitosa y confiable.
          </div>
          <div className="flex justify-evenly pt-10 pb-[3em] w-[80%]">
            {numbers.map((item, index) => (
              <div key={index} className="w-1/3 flex flex-col items-center">
                <p className="text-[#000000] font-[bebas_neue] text-[40px]">{item.title}</p>
                <p className="text-[#000000] text-[16px] text-center w-[55%]">{item.description}</p>
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

