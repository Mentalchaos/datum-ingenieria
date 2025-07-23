import { useState } from "react";
import complaints from "../../assets/images/complaints/denuncias.png";
import InfoBox from "../UI/InfoBox/InfoBox";
import LogosSlider from "../UI/LogosSlider/LogosSlider";
import ComplaintsForm from "./complaintsForm";
import CrimesToReport from "./crimesToReport";
import Banner from "../UI/Banner";
import WhatIsAComplaintChannel from "./WhatIsAComplaintChannel";
import { isMobile } from "../../utils/viewport";


const Complaints = () => {
  const [ activeComponent, setActiveComponent ] = useState(null);

  return (
    <div>
      <section className="w-full min-h-screen flex flex-col items-center mb-10">
        <Banner image={complaints} />

        <div className={isMobile() ? "w-full px-4" : "w-[95%] mx-auto"}>
          <h2 className={isMobile() ? "text-center font-[bebas_neue] text-[2.5em] py-10" : "text-center font-[bebas_neue] text-[3em] py-10"}>
            Queremos escuchar lo que tienes que decir
          </h2>
          <p className={isMobile() ? "text-[1.2em] text-[#313131] px-4 font-bengali mx-auto text-justify mb-10" : "text-[1.6em] text-[#313131] px-10 font-bengali w-[77%] mx-auto text-center mb-10"}>
            En DATUM Ingeniería valoramos una relación abierta y cercana con
            nuestros trabajadores, colaboradores y comunidades. Por ello, hemos
            establecido este canal de comunicación.
          </p>


          <div className="shadow-[0px_0px_3px_0px_#0000003B] rounded-[10px] w-[95%] mb-[8em] bg-[#EDEDED]">
            <h2 className={isMobile()  ? "text-center text-[2em] font-[bebas_neue] pt-[1em]" : "text-center text-[3em] font-[bebas_neue] mt-[1em]"}>
              ¿Cómo hacer una denuncia?
            </h2>
            <p className={isMobile() ? "text-justify py-10 text-[1.2em] font-bengali px-4" : "text-center py-10 text-[1.3em] font-bengali px-10"}>
              A continuación, en el formulario podrás ingresar tu denuncia. Te
              solicitamos nos entregues la siguiente información:
            </p>
            <div className={isMobile() ? "flex flex-col justify-center pb-20 gap-10 items-center" : "flex justify-center px-10 pb-20 gap-10 items-center"}>
              <div className={isMobile() ? "w-full h-[276px] p-[calc(var(--spacing)*5)]" : "w-1/2 h-[276px] p-[calc(var(--spacing)*5)]"}>
                <ul className={isMobile() ? "list-disc text-[1em] font-bengali leading-relaxed" : "list-disc pl-5 text-[20px] font-bengali leading-relaxed"}>
                  <li>- Nombre del denunciado</li>
                  <li>- Descripción detallada de los hechos</li>
                  <li>- Fecha y lugar de los acontecimientos</li>
                  <li>-
                    Nombres de las personas afectadas, testigos y cualquier otro
                    respaldo que puedas entregar (documentos, correos electrónicos,
                    mensajería instantánea, etc.)
                  </li>
                </ul>
              </div>
              <div className={isMobile() ? "w-[90%] bg-[#E50000] text-[#E7E7E7] font-bengali font-bold p-[calc(var(--spacing)*5)] rounded-[10px]" : "w-1/3 h-[235px] bg-[#E50000] text-[#E7E7E7] font-bengali font-bold p-[calc(var(--spacing)*5)] rounded-[10px]"}>
                <p className={isMobile() ? "font-bengali font-semibold text-[1.2em] text-justify" : "font-bengali font-semibold text-[20px] text-justify"}>
                  Tu denuncia puede ser anónima, en ese caso no debes rellenar los
                  campos personales. <br />
                  Sin embargo, al proporcionarnos esta información,
                  un investigador se contactará contigo para hacer el seguimiento.
                </p>
              </div>
            </div>
            <div className={isMobile() ? "w-full mx-auto" : "w-[90%] mx-auto pb-[8em]"}>
              <ComplaintsForm />
            </div>
          </div>


          <div className={isMobile() ? "flex flex-col gap-10" : "flex w-full px-10 pb-20"}>
            <InfoBox width="w-full" height={isMobile() ? "h-[200px]" : "h-[363px]"} onClick={() => setActiveComponent(<WhatIsAComplaintChannel />)}>
              <div
                className="flex justify-center items-center h-full text-[40px] font-[bebas_neue] text-center cursor-pointer"
              >
                <span>¿Qué es un canal de denuncias?</span>
              </div>
            </InfoBox>
            {/* <InfoBox width={isMobile() ? "w-full" : "w-1/2"} height={isMobile() ? "h-[200px]" : "h-[363px]"} onClick={() => setActiveComponent(<CrimesToReport />)}>
              <div
                className="flex justify-center relative items-center h-full text-[40px] font-[bebas_neue] text-center cursor-pointer"
              >
                <span>¿Qué debo denunciar?</span>
              </div>
            </InfoBox> */}
          </div>

          <div className={isMobile() ? "w-full px-4" : "w-full"}  >
            {activeComponent}
          </div>
        </div>
      </section>
      <LogosSlider />
    </div>
  );
};

Complaints.displayName = "Complaints";

export default Complaints;
