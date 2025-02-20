import complaints from "../../assets/images/complaints/denuncias.png";
import InfoBox from "../UI/InfoBox/InfoBox";

const Complaints = () => {
  return (
    <section className="w-full min-h-screen">

      <img src={complaints} alt="Denuncias" className="w-full" />

      <h1 className="text-center font-[bebas_neue] text-[64px] py-20">
        Queremos escuchar lo que tienes que decir
      </h1>

      <p className="text-center text-[36px] py-20 text-[#313131] px-10">
        En DATUM Ingeniería valoramos una relación abierta y cercana con
        nuestros trabajadores, colaboradores y comunidades. Por ello, hemos
        establecido este canal de comunicación.
      </p>

      <div className="flex w-full px-10 pb-30">
        <InfoBox width="w-1/2" height="h-[363px]">
          <div className="flex justify-center items-center h-full text-[40px] font-[bebas_neue] text-center">
            ¿Qué es un canal de denuncias?
          </div>
        </InfoBox>
        <InfoBox width="w-1/2" height="h-[363px]">
          <div className="flex justify-center items-center h-full text-[40px] font-[bebas_neue] text-center">
            ¿Qué debo denunciar?
          </div>
        </InfoBox>
      </div>

      <h2 className="text-center text-[40px] font-[bebas_neue]">
        ¿Cómo hacer una denuncia?
      </h2>

      <p className="text-center py-10 text-[20px] px-10">
        A continuación, en el formulario podrás ingresar tu denuncia. Te
        solicitamos nos entregues la siguiente información:
      </p>

      <div className="flex justify-center items-start px-10 pb-20 gap-10">
        <InfoBox width="w-2/4" height="h-[276px]">
          <ul className="list-disc pl-5 text-[20px] leading-relaxed">
            <li>Nombre del denunciado</li>
            <li>Descripción detallada de los hechos</li>
            <li>Fecha y lugar de los acontecimientos</li>
            <li>
              Nombres de las personas afectadas, testigos y cualquier otro
              respaldo que puedas entregar (documentos, correos electrónicos,
              mensajería instantánea, etc.)
            </li>
          </ul>
        </InfoBox>
        <InfoBox
          width="w-1/4"
          height="h-[235px]"
          bgColor="bg-[#E50000]"
          className="text-[#E7E7E7] font-bold p-5"
        >
          <p>
            Tu denuncia puede ser anónima, en ese caso no debes rellenar los
            campos personales. Sin embargo, al proporcionarnos esta información,
            un investigador se contactará contigo para hacer el seguimiento.
          </p>
        </InfoBox>
      </div>
    </section>
  );
};

Complaints.displayName = "Complaints";

export default Complaints;
