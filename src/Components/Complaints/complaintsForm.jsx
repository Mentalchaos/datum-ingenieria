import lawIcon from "../../assets/images/complaints/law-icon.png";
import site from "../../assets/images/complaints/site.png";

const ComplaintsForm = () => {
  return (
    <div className="w-full h-[518px] rounded-[10px] p-10 flex flex-col items-center">
      <div className="flex flex-row items-center">
        <div className="w-[65%]">
          <form className="flex flex-col gap-4 flex-1 w-[90%]">
            <div>
              <label className="block mb-1 font-bengali font-medium text-[20px] font-bengali font-medium text-[20px] " htmlFor="email">Correo electrónico (No opcional)</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#E5E5E5]"
                placeholder="contacto@datumingenieria.cl"
              />
            </div>
            <div>
              <label className="block mb-1 font-bengali font-medium text-[20px]" htmlFor="telefono">Teléfono de contacto (No opcional)</label>
              <input
                type="tel"
                id="telefono"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#E5E5E5]"
                placeholder="+56 9 1234 5678"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-bengali font-medium text-[20px]" htmlFor="descripcion">Descripción del caso</label>
              <textarea
                id="descripcion"
                className="w-full h-[259px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-[#E5E5E5]"
                placeholder="Descripción en detalle de la denuncia (Participantes, testigos, fecha y lugar)"
                required
              ></textarea>
            </div>
          </form>
        </div>
        <div className="w-[45%] shadow-[0px_0px_3px_0px_#0000003B] rounded-[10px] py-[20px] px-[10px]">
          <div className="flex items-center justify-around">
            <input
              type="checkbox"
              className="w-[19px] h-[19px] rounded-[2px] border border-gray-400 bg-[#EDEDED]"
            />
            <p className="font-medium text-[20px] font-bengali w-[76%]">Debe adjuntar medios probatorios que acrediten su denuncia (Imágenes, documentos, correos electrónicos, etc.)
            [Límite de carga 15 archivos, hasta 24 MB]</p>
          </div>
          <div className="flex justify-around items-center my-[1em]">
            <button type="submit" className="w-[145px] h-[29px] rounded-[10px] border-[0.5px] border-[#494949] bg-[#E5E5E5]">Adjuntar archivos</button>
            <button type="submit" className="w-[141px] h-[39px] rounded-[10px] bg-[#E50000] text-[#EDEDED] text-[14px] font-bengali">Enviar denuncia</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-[2em]">
        <div className="flex items-center border-[1px] border-[#FF0500] rounded-[10px] py-[5px] px-[10px]">
          <img className="mr-2" src={lawIcon} />
          <p className="font-medium text-[20px] font-bengali">Ley Karin</p>
        </div>
        <div className="flex items-center border-[1px] border-[#FF0500] rounded-[10px] py-[5px] px-[10px]">
          <img className="mr-2" src={site} />
          <p className="font-medium text-[20px] font-bengali">Sitio gobierno Ley Karin</p>
        </div>
        <div className="flex items-center border-[1px] border-[#FF0500] rounded-[10px] py-[5px] px-[10px]">
          <img className="mr-2" src={lawIcon} />
          <p className="font-medium text-[20px] font-bengali">Código de Ética</p>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsForm;