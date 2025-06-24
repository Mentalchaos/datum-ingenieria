import datumLogo from "../../../assets/images/logo-negativo.png";
import footerBackground from "../../../assets/images/footer.png";
import clock from "../../../assets/images/clock.png";
import mail from "../../../assets/images/mail.png";
import phone from "../../../assets/images/phone.png";
import location from "../../../assets/images/location.png";
import socialIcon from "../../../assets/images/social-icon.png";
import map from "../../../assets/images/mapLocation.png";

const Footer = () => {
  return (
    <div
      className="flex bg-[#1F1F1F] text-[#FFFFFF] py-20 px-30 bg-cover bg-center"
      style={{ backgroundImage: `url(${footerBackground})` }}
    >
      <div className="flex justify-center flex-col w-1/3">
        <div className="text-[24px] pb-5 flex justify-start items-center">
          <img src={clock} className="h-[26px] mr-[10px]" />
          Horarios de atención
        </div>
        <div>Lunes a Jueves: 8:30 a 18:30 hrs</div>
        <div className="pb-15">Viernes: 8:30 a 17:30 hrs</div>
        <div className="text-[24px]">Contacto</div>
        <div className="pb-3 flex justify-start">
          <img src={mail} className="h-[26px] mr-[10px]"/>
          contacto@datumingenieria.cl
        </div>
        <div className="flex justify-start">
          <img src={phone} className="h-[26px] mr-[10px]"/>
          +56 9 5819 1499
        </div>
        <div className="pb-20 flex justify-start">
          <img src={phone} className="h-[26px] mr-[10px]"/>
          +56 32 2305689
        </div>
        <img src={datumLogo} className="w-3/4" />
      </div>
      <div className="flex flex-col justify-center w-[55%] text-[1em] pl-30">
        <img src={map} className="h-2/3 mb-10" />
        <div className="flex items-center justify-start">
          <div className="mr-[10px]">
            <img src={location}/>
          </div>
          <div className="pl-5">
            <div>Viana #837, Oficina 216</div>
            <div className="flex justify-start">Viña del mar</div>
            <div>Chile</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/3 text-[1em] pl-30 pt-20">
        <div className="text-[24px] mb-5">Links de interés</div>
        <ul className="list-disc space-y-1 pl-10">
          <li className="font-normal text-[1em] font-bengali">Reglamento interno</li>
          <li className="font-normal text-[1em] font-bengali">Código de ética</li>
          <li className="font-normal text-[1em] font-bengali">Reporta un Incidente</li>
          <li className="font-normal text-[1em] font-bengali">Haz tu denuncia</li>
          <li className="font-normal text-[1em] font-bengali">Preguntas Frecuentes</li>
          <li className="font-normal text-[1em] font-bengali">Intranet</li>
        </ul>
        <div className="flex justify-center mt-[10px]">
          <img src={socialIcon} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
