import topografy from "../../assets/images/servicesPage/topography.png";

const Topography = () => {
    return (
        <div className="mt-[8em] w-full bg-[#EDEDED] flex items-center flex-col">
            <img src={topografy} className="w-full" />
            <div className="bg-[#EDEDED] my-[5em]">
                <h2 className="font-[bebas_neue] font-normal text-6xl text-center bg-[#EDEDED]">Topografía</h2>
            </div>
            <div className="flex w-[60%] mx-auto justify-between gap-4 flex-wrap">
                <div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
                    <p className="font-bengali font-medium text-[20px] text-center">Subestaciones Eléctricas</p>
                    <span className="hidden group-hover:flex absolute top-[150%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
                        Realizamos estudios y levantamientos topográficos precisos para la planificación,
construcción y mantenimiento de subestaciones eléctricas, asegurando seguridad y
eficiencia en cada etapa del proyecto.
                    </span>
                </div>
                <div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
                    <p className="font-bengali font-medium text-[20px] text-center p-[25px]">Levantamientos costeros y batimetría</p>
                    <span className="hidden group-hover:flex absolute top-[150%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
                        Ofrecemos mediciones detalladas de la costa y del lecho marino para estudios
ambientales, obras portuarias, y control de erosión, utilizando tecnología de vanguardia
en batimetría y levantamientos hidrográficos.
                    </span>
                </div>
            </div>
            <div className="flex w-[90%] my-[8em] justify-between gap-4 flex-wrap">
                <div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
                    <p className="font-bengali font-medium text-[20px] text-center">Topografía Urbana</p>
                    <span className="hidden group-hover:flex absolute top-[150%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
                        Desarrollamos levantamientos topográficos para proyectos urbanos, como vialidades,
edificaciones, y servicios públicos, garantizando datos exactos para la correcta ejecución
de las obras.
                    </span>
                </div>
                <div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
                    <p className="font-bengali font-medium text-[20px] text-center p-[35px]">Montaje Mecánico y de Estructuras</p>
                    <span className="hidden group-hover:flex absolute top-[150%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
                        Proveemos servicios de alineación, instalación y ajuste de componentes mecánicos y
estructuras metálicas, asegurando la precisión y seguridad requeridas en proyectos
industriales y de infraestructura.
                    </span>
                </div>
                <div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
                    <p className="font-bengali font-medium text-[20px] text-center">Ferrocarriles</p>
                    <span className="hidden group-hover:flex absolute top-[150%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
                        Brindamos soluciones topográficas y de ingeniería para proyectos ferroviarios,
incluyendo trazado de vías, estudios de terreno y monitoreo estructural para garantizar la
seguridad y eficiencia operativa.
                    </span>
                </div>
            </div>
            <div className="flex w-[60%] mx-auto justify-between gap-4 flex-wrap mb-[8em]">
                <div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
                    <p className="font-bengali font-medium text-[20px] text-center">Líneas de Alta Tensión (AT)</p>
                    <span className="hidden group-hover:flex absolute top-[150%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
                        Realizamos estudios y levantamientos topográficos para la construcción y mantenimiento
de líneas de transmisión eléctrica, optimizando rutas y minimizando impactos
ambientales.
                    </span>
                </div>
                <div className="relative group border-[3px] border-[#EC1B1B] w-[400px] h-[140px] flex items-center justify-center">
                    <p className="font-bengali font-medium text-[20px] text-center">GPS y Geodesia</p>
                    <span className="hidden group-hover:flex absolute top-[150%] left-1/2 transform -translate-x-1/2 w-[687px] h-[346px] bg-[#EDEDED] text-black font-bengali font-medium text-[16px] text-center items-center justify-center p-4 shadow-lg z-10">
                        Ofrecemos servicios de georreferenciación y posicionamiento preciso mediante
tecnología GPS y técnicas geodésicas para garantizar la máxima exactitud en proyectos
de infraestructura y desarrollo territorial.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Topography;
