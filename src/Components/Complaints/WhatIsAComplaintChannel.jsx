import { isMobile } from "../../utils/viewport";


const WhatIsAComplaintChannel = () => {
  return (
    <div className={isMobile ? "w-full px-4 h-auto rounded-[10px] bg-[#EDEDED] text-[1.6em] font-bengali text-justify" : "h-auto rounded-[10px] pr-[200px] pb-[26px] pl-[200px] bg-[#EDEDED] text-[1.6em] font-bengali"}>
      Es un medio por el cual cualquier colaborador de Datum Ingeniería y relacionadas, además de terceros,
      pueden realizar sus denuncias ante incumplimientos relacionados al Modelo de Prevención de Delitos, Código de Ética,
      Reglamento Interno de Orden, Higiene y Seguridad, u otra normativa interna.
    </div>
  )
}

export default WhatIsAComplaintChannel;