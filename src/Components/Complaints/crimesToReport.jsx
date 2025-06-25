const CrimesToReport = () => {
    return (
      <div className="h-auto rounded-[10px] pr-[200px] pb-[26px] pl-[200px] bg-[#EDEDED]">
        <div>
          <p className="font-bengali font-medium text-[24px] text-justify">
            Cualquier acto, conducta o situación cuestionable, inadecuada o aparente de incumplimiento de leyes,
            códigos, reglamentos, políticas, procedimientos y demás normas internas y externas, relacionado con
            los delitos que establece la ley N° 20.393, de responsabilidad penal de la persona jurídica.
          </p>
        </div>
        <div>
          <h2 className="font-[bebas_neue] font-normal text-[40px] text-center my-[1em]">
            Delitos que contempla la Ley Nº 20.393
          </h2>
          <ul className="font-bengali font-semibold text-[24px] list-none pl-0 w-full flex flex-col">
            <li className="mb-2 flex justify-between">
              Cohecho <span className="text-[28px]">+</span>
            </li>
            <li className="mb-2 flex justify-between">
              Lavado de Activos <span className="text-[28px]">+</span>
            </li>
            <li className="mb-2 flex justify-between">
              Receptación <span className="text-[28px]">+</span>
            </li>
            <li className="mb-2 flex justify-between">
              Apropiación Indebida <span className="text-[28px]">+</span>
            </li>
            <li className="mb-2 flex justify-between">
              Soborno entre Particulares <span className="text-[28px]">+</span>
            </li>
            <li className="mb-2 flex justify-between">
              Administración Desleal <span className="text-[28px]">+</span>
            </li>
            <li className="mb-2 flex justify-between">
              Negociación Incompatible <span className="text-[28px]">+</span>
            </li>
            <li className="mb-2 flex justify-between">
              Trata de Personas <span className="text-[28px]">+</span>
            </li>
            <li className="mb-2 flex justify-between">
              Contaminación de Cuerpos de Agua <span className="text-[28px]">+</span>
            </li>
            <li className="mb-2 flex justify-between">
              Acceso Ilícito <span className="text-[28px]">+</span>
            </li>
            <li className="mb-2 flex justify-between">
              Interceptación Ilícita <span className="text-[28px]">+</span>
            </li>
            <li className="mb-2 flex justify-between">
              Abuso de los Dispositivos <span className="text-[28px]">+</span>
            </li>
            <li className="mb-2 flex justify-between">
              Otros Delitos Asociados a la Ley 20.393 <span className="text-[28px]">+</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default CrimesToReport;
