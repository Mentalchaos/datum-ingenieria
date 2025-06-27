import { useState, useRef } from "react";
import lawIcon from "../../assets/images/complaints/law-icon.png";
import site from "../../assets/images/complaints/site.png";


const ComplaintsForm = () => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/api/v1/complaints/";

    const contact_email = e.target.contact_email.value;
    const contact_phone = e.target.contact_phone.value;
    const incident_description = e.target.incident_description.value;

    console.log(contact_email, contact_phone, incident_description);

    // Validaciones primero
    if (contact_email === "" || contact_phone === "" || incident_description === "") {
      alert("Por favor, complete todos los campos obligatorios");
      return;
    }
    if (contact_email.includes("@") === false) {
      alert("Por favor, ingrese un correo electrónico válido");
      return;
    }
    if (contact_phone.length !== 12) {
      alert("Por favor, ingrese un número de teléfono válido");
      return;
    }

    // Crear y enviar FormData
    const formData = new FormData();
    formData.append("contact_email", contact_email);
    formData.append("contact_phone", contact_phone);
    formData.append("incident_description", incident_description);

    const response = await fetch(url, {
      method: "POST",
      body: formData,
      // NO incluir Content-Type header cuando se envía FormData
      // El navegador lo establece automáticamente con el boundary correcto
    });
    const data = await response.json();

  //   curl --request POST \
  // --url https://7271-201-187-172-65.ngrok-free.app/api/v1/complaints/ \
  // --header 'Authorization: Basic YWRtaW46MTIz' \
  // --header 'content-type: multipart/form-data' \
  // --cookie csrftoken=2UsUu3hmQGGxBl9JXLEMuQetpU3NK7be \
  // --form 'reported_name=Pedro Astorga' \
  // --form 'incident_description=Descripcion detallada del incidente ocurrido' \
  // --form incident_date=2024-06-20 \
  // --form 'incident_location=Oficina Central, Piso 1' \
  // --form 'affected_and_witnesses=Las personas afectadas fueron...' \
  // --form contact_email=pedro.martinez@ejemplo.com \
  // --form 'contact_phone=+56 9 8763 4322'

    console.log(response);

    if (response.ok) {
      alert("Denuncia enviada correctamente");
    } else {
      alert("Error al enviar la denuncia");
    }

    console.log(data);
  };

  return (
    <div className="w-full h-[518px] rounded-[10px] p-10 flex flex-col items-center">
      <form onSubmit={onSubmit} className="flex flex-row items-center">
        <div className="w-[65%]">
          <div className="flex flex-col gap-4 flex-1 w-[90%]">
            <div>
              <label className="block mb-1 font-bengali font-medium text-[20px] font-bengali font-medium text-[20px] " htmlFor="email">Correo electrónico (No opcional)</label>
              <input
                name="contact_email"
                type="email"
                id="contact_email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#E5E5E5]"
                placeholder="contacto@datumingenieria.cl"
              />
            </div>
            <div>
              <label className="block mb-1 font-bengali font-medium text-[20px]" htmlFor="telefono">Teléfono de contacto (No opcional)</label>
              <input
                name="contact_phone"
                type="tel"
                id="contact_phone"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#E5E5E5]"
                placeholder="+56 9 1234 5678"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-bengali font-medium text-[20px]" htmlFor="descripcion">Descripción del caso</label>
              <textarea
                name="incident_description"
                id="incident_description"
                className="w-full h-[259px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-[#E5E5E5]"
                placeholder="Descripción en detalle de la denuncia (Participantes, testigos, fecha y lugar)"
                required
              ></textarea>
            </div>
          </div>
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
      </form>
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