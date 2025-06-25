import { useState } from "react";
import complaints from "../../assets/images/complaints/denuncias.png";
import InfoBox from "../UI/InfoBox/InfoBox";
import LogosSlider from "../UI/LogosSlider/LogosSlider";
import ComplaintsForm from "./complaintsForm";
import CrimesToReport from "./crimesToReport";
import Banner from "../UI/Banner";

const WhatIsAComplaintChannel = () => {
  return (
    <div className="h-auto rounded-[10px] pr-[200px] pb-[26px] pl-[200px] bg-[#EDEDED] text-[1.6em] font-bengali">
      Es un medio por el cual cualquier colaborador de Datum Ingeniería y relacionadas, además de terceros,
      pueden realizar sus denuncias ante incumplimientos relacionados al Modelo de Prevención de Delitos, Código de Ética,
      Reglamento Interno de Orden, Higiene y Seguridad, u otra normativa interna.
    </div>
  )
}


const Complaints = () => {
  const [ activeComponent, setActiveComponent ] = useState(null);

  return (
    <div>
      <section className="w-full min-h-screen flex flex-col items-center mb-10">
        <Banner image={complaints} />

        <h1 className="text-center font-[bebas_neue] text-[3em] py-10">
          Queremos escuchar lo que tienes que decir
        </h1>
        <p className="text-[1.8em] text-[#313131] px-10 font-bengali w-[77%] mx-auto text-justify mb-10">
          En DATUM Ingeniería valoramos una relación abierta y cercana con
          nuestros trabajadores, colaboradores y comunidades. Por ello, hemos
          establecido este canal de comunicación.
        </p>
        <div className="shadow-[0px_0px_3px_0px_#0000003B] rounded-[10px] w-[95%] mb-[8em] bg-[#EDEDED]">
          <h2 className="text-center text-[3em] font-[bebas_neue] mt-[1em]">
            ¿Cómo hacer una denuncia?
          </h2>
          <p className="text-center py-10 text-[1.3em] font-bengali px-10">
            A continuación, en el formulario podrás ingresar tu denuncia. Te
            solicitamos nos entregues la siguiente información:
          </p>
          <div className="flex justify-center px-10 pb-20 gap-10 items-center">
            <div className="w-1/2 h-[276px] p-[calc(var(--spacing)*5)]">
              <ul className="list-disc pl-5 text-[20px] font-bengali leading-relaxed">
                <li>Nombre del denunciado</li>
                <li>Descripción detallada de los hechos</li>
                <li>Fecha y lugar de los acontecimientos</li>
                <li>
                  Nombres de las personas afectadas, testigos y cualquier otro
                  respaldo que puedas entregar (documentos, correos electrónicos,
                  mensajería instantánea, etc.)
                </li>
              </ul>
            </div>
            <div className="w-1/3 h-[235px] bg-[#E50000] text-[#E7E7E7] font-bengali font-bold p-[calc(var(--spacing)*5)] rounded-[10px]">
              <p className="font-bengali font-semibold text-[20px] text-justify">
                Tu denuncia puede ser anónima, en ese caso no debes rellenar los
                campos personales. <br />
                Sin embargo, al proporcionarnos esta información,
                un investigador se contactará contigo para hacer el seguimiento.
              </p>
            </div>
          </div>
          <div className="w-[90%] mx-auto pb-[8em]">
            <ComplaintsForm />
          </div>
        </div>


        <div className="flex w-full px-10 pb-20">
          <InfoBox width="w-1/2" height="h-[363px]" onClick={() => setActiveComponent(<WhatIsAComplaintChannel />)}>
            <div
              className="flex justify-center items-center h-full text-[40px] font-[bebas_neue] text-center cursor-pointer"
            >
              <span>¿Qué es un canal de denuncias?</span>
            </div>
          </InfoBox>
          <InfoBox width="w-1/2" height="h-[363px]" onClick={() => setActiveComponent(<CrimesToReport />)}>
            <div
              className="flex justify-center relative items-center h-full text-[40px] font-[bebas_neue] text-center cursor-pointer"
            >
              <span>¿Qué debo denunciar?</span>
            </div>
          </InfoBox>
        </div>

        <div className="w-full">
          {activeComponent}
        </div>
      </section>
      <LogosSlider />
    </div>
  );
};

Complaints.displayName = "Complaints";

export default Complaints;
