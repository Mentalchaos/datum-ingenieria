import datumLogo from "../../../assets/images/logo-negativo.png";
import map from "../../../assets/images/mapLocation.png";

const Footer = () => {
  return (
    <div className="flex bg-[#1F1F1F] text-[#FFFFFF] text-[20px] py-40 px-20">
      <div className="flex justify-center flex-col w-1/3">
        <div className="text-[24px] pb-5">Horarios de atención</div>
        <div>Lunes a Jueves: 8:30 a 18:30 hrs</div>
        <div className="pb-15">Viernes: 8:30 a 17:30 hrs</div>
        <div className="text-[24px]">Contacto</div>
        <div className="pb-3">contacto@datumingenieria.cl</div>
        <div>+56 9 5819 1499</div>
        <div className="pb-20">+56 32 2305689</div>
        <img src={datumLogo} className="w-3/4" />
      </div>
      <div className="flex flex-col justify-center w-1/3 text-[24px]">
        <img src={map} className="h-2/3 mb-10" />
        <div>Viana #837, Oficina 216</div>
        <div>Viña del mar</div>
        <div>Chile</div>
      </div>
      <div className="flex flex-col w-1/3 text-[20px] pl-50">
        <div className="text-[24px] mb-5">Links de interés</div>
        <div>Reglamento interno</div>
        <div>Código de ética</div>
        <div>Reporta un Incidente</div>
        <div>Haz tu denuncia</div>
        <div>Preguntas Frecuentes</div>
        <div>Intranet</div>
      </div>
    </div>
  );
};

export default Footer;
