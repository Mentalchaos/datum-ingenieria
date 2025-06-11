import experience from "../../assets/images/experience.png";
import customers from "../../assets/images/customers.png";
import technology from "../../assets/images/technology.png";

const info = [
  { 
    title: "Experiencia", 
    image: experience, 
    description: "Más de dos décadas en el mercado realizando diversos proyectos de Ingeniería"
  },
  { 
    title: "Clientes de Prestigio",
    image: customers,
    description: "Somos preferidos por las principales empresas en el rubro"
  },
  { 
    title: "Tecnología",
    image: technology,
    description: "Nos mantenemos constantemente en la búsqueda de implementación de nuevas tecnologías"
  }
];

const UsInfoBox = () => {
    return (
        <div className="bg-white w-[80%] mx-auto h-[336px]">
            <div className="flex flex-wrap justify-center h-full">
                {info.map(({ title, image, description }, index) => (
                    <div key={index} className="flex flex-col items-center justify-around w-full md:w-1/3 p-6">

                        <div className="w-1/3 h-1/2 flex justify-center items-center">
                            <img src={image} alt={title} className="w-full h-full object-contain" />
                        </div>

                        <div className="w-2/3 h-1/2 flex flex-col justify-center items-center text-center">
                            <h3 className="text-[40px] text-gray-800">{title}</h3>
                            <div className="">
                              <p className="text-base text-gray-600">{description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsInfoBox;
