import { isMobile } from "../../utils/viewport";


const CrimesToReport = () => {
    return (
      <div className={isMobile() ? "w-full h-auto rounded-[10px] bg-[#EDEDED] text-[1.6em] font-bengali text-justify" : "h-auto rounded-[10px] pr-[200px] pb-[26px] pl-[200px] bg-[#EDEDED] text-[1.6em] font-bengali"}>
        <div>
          <p className="font-bengali font-medium text-[24px] text-justify">
            Cualquier acto, conducta o situación cuestionable, inadecuada o aparente de incumplimiento de leyes,
            códigos, reglamentos, políticas, procedimientos y demás normas internas y externas, relacionado con
            los delitos que establece la ley N° 20.393, de responsabilidad penal de la persona jurídica.
          </p>
        </div>
        <div>
          <h2 className={isMobile() ? "font-[bebas_neue] font-normal text-[1.5em] text-center my-[1em]" : "font-[bebas_neue] font-normal text-[40px] text-center my-[1em]"}>
            Delitos que contempla la Ley Nº 20.393
          </h2>
          <div className={isMobile() ? "font-bengali font-semibold text-[.8em] list-none w-full flex flex-col" : "font-bengali font-semibold text-[24px] list-none pl-0 w-full flex flex-col"}>
            <div className="mb-[1em] flex justify-between">
              <div>Cohecho</div>
              <div>+</div>
            </div>
            <div className="mb-[1em] flex justify-between">
              <div>Lavado de Activos</div>
              <div>+</div>
            </div>
            <div className="mb-[1em] flex justify-between">
              <div>Receptación</div>
              <div>+</div>
            </div>
            <div className="mb-[1em] flex justify-between">
              <div>Apropiación Indebida</div>
              <div>+</div>
            </div>
            <div className="mb-[1em] flex justify-between">
              <div>Soborno entre Particulares</div>
              <div>+</div>
            </div>
            <div className="mb-[1em] flex justify-between">
              <div>Administración Desleal</div>
              <div>+</div>
            </div>
            <div className="mb-[1em] flex justify-between">
              <div>Negociación Incompatible</div>
              <div>+</div>
            </div>
            <div className="mb-[1em] flex justify-between">
              <div>Trata de Personas</div>
              <div>+</div>
            </div>
            <div className="mb-[1em] flex justify-between">
              <div>Contaminación de Cuerpos de Agua</div>
              <div>+</div>
            </div>
            <div className="mb-[1em] flex justify-between">
              <div>Acceso Ilícito</div>
              <div>+</div>
            </div>
            <div className="mb-[1em] flex justify-between">
              <div>Interceptación Ilícita</div>
              <div>+</div>
            </div>
            <div className="mb-[1em] flex justify-between">
              <div>Abuso de los Dispositivos</div>
              <div>+</div>
            </div>
            <div className="mb-[1em] flex justify-between">
              <div>Otros Delitos Asociados a la Ley 20.393</div>
              <div>+</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default CrimesToReport;
