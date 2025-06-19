import Organigrama from "../../assets/images/aboutUs/Organigrama.png";
import ceo from "../../assets/images/aboutUs/ceo.png";
import it from "../../assets/images/aboutUs/IT.png";
import itDepartment from "../../assets/images/aboutUs/ti.png";
import legal from "../../assets/images/aboutUs/legal.png";
import legalDepartment from "../../assets/images/aboutUs/hr-legal.png";
import hr from "../../assets/images/aboutUs/HR.png";
import engineering from "../../assets/images/aboutUs/engineering.png";
import LogosSlider from "../UI/LogosSlider/LogosSlider";

const teamMembers = [
  { name: "Gerencia TI", img: it },
  { name: "Gerencia Legal", img: legal },
  { name: "Gerencia RRHH", img: hr}
];

const OurTeam = () => {
  return (
    <div className="w-full">
      <h2 className="flex justify-center text-[64px] font-[bebas_neue] my-[1em]">
        Nuestro equipo
      </h2>
      <div className="w-full flex flex-col items-center h-auto">
        <div className="flex flex-row justify-around h-auto p-[4em_2em] bg-[#EDEDED] shadow-lg rounded-lg w-[90%]">
          <div className="w-[59%] font-bengali font-medium text-[20px] text-justify flex flex-col justify-evenly">
            <p>Fundador de Datum Ingeniería, Ingeniero Geomensor, graduado de la Universidad de Santiago de Chile, con 35 años de experiencia.</p>
            <p>Su dedicación absoluta, combinada con su profundo compromiso con la excelencia, visión estratégica y pasón por la innovación,
              ha llevado a Datum Ingeniería a destcarse a lo largo de los años en todas las actividades de su competencia.
            </p>
            <p>Actualmente, ocupa el cargo de CEO y el de Gerencia General, liderando un gan equipo de profesionales comprometidos,
              altamente calificados y especializados
            </p>
          </div>
          <div className="w-[30%] flex flex-col justify-end">
            <img src={ceo} />
            <h2 className="font-[bebas_neue] font-normal text-[40px] text-end w-full mb-[1em]">GERENTE GENERAL Y CEO</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[90%] items-center mx-auto p-4">
        <div className="w-[85%] mt-[3em]">
          <h2 className="font-[bebas_neue] font-normal text-[40px]">Gerencia</h2>
        </div>
        <div className="flex flex-wrap justify-between py-10 w-[90%]">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-1/5 py-5 flex flex-col items-center">
            <div className="w-full h-[278px]">
              <img src={member.img} alt={member.name} className="w-full h-auto object-contain" />
            </div>
            <div className="mt-2 font-bengali font-medium text-[20px] text-center">
              {member.name}
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-[3em]">
        <div className="flex flex-row w-[80%] justify-between mt-[5em]">
          <img src={engineering}/>
          <div className="flex items-center justify-center w-[40%]">
            <h2 className="font-[bebas_neue] font-normal text-[64px] text-center content-center">DEPARTAMENTO INGENIERÍA</h2>
          </div>
        </div>
        <div className="flex flex-row w-[80%] justify-between mt-[8em]">
          <div className="w-full flex justify-center">
            <h2 className="font-[bebas_neue] font-normal text-[64px] text-center content-center">DEPARTAMENTO TI</h2>
          </div>
          <img src={itDepartment}/>
        </div>
        <div className="flex flex-row w-[80%] justify-between mt-[8em]">
          <img src={legalDepartment}/>
          <div className="w-[32%] flex items-center">
            <h2 className="font-[bebas_neue] font-normal text-[64px] text-center content-center">DEPARTAMENTO RRHH y Legal</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-25 mb-[5em]">
        <img src={Organigrama} />
      </div>
      <LogosSlider />
    </div>
  );
};

OurTeam.displayName = "OurTeam";

export default OurTeam;
