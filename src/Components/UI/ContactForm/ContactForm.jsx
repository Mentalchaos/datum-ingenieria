import Button from "../Button/Button";
import InfoBox from "../InfoBox/InfoBox";
import Input from "../Input/Input";
import background from "../../../assets/images/inicio/form-background.png";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputFields = [
    { name: "name", label: "Nombre", placeholder: "Juan González" },
    { name: "company", label: "Empresa (opcional)", placeholder: "Datum Ingeniería" },
    { name: "phone", label: "Teléfono", placeholder: "+56 9 1234 5678" },
    { name: "email", label: "Correo electrónico", placeholder: "contacto@datumingenieria.cl" }
  ];

  const subjectField = {
    name: "subject",
    label: "Asunto",
    placeholder: "Proyecto eléctrico"
  };

  const messageField = {
    name: "message",
    label: "Mensaje",
    placeholder: "Escribe tu mensaje aquí"
  };

  const onSendMessage = async () => {
    if (formData.name === "" ||
      formData.email === "" ||
      formData.subject === "" ||
      formData.message === "" ||
      formData.phone === "" ||
      formData.company === ""
    ) {
      alert("Por favor, complete todos los campos obligatorios");
      return;
    }

    const data = {
      name: formData.name,
      company: formData.company,
      phone: formData.phone,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    }

    const response = await fetch("http://localhost:8000/api/v1/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Mensaje enviado correctamente");
    } else {
      alert("Error al enviar el mensaje");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="font-roboto">
      <div className="w-full h-auto relative">
        <div
          className="border-2 border-[#E2E2E2] rounded-lg p-12 w-full h-full bg-[#EDEDED] bg-cover bg-center"
        >
          <div className="flex h-full pt-10">
            <div className="flex flex-col justify-between w-1/2 h-3/4 px-5">
              {inputFields.map(({ name, label, placeholder }, index) => (
                <div key={label} className={`w-full ${index !== inputFields.length - 1 ? "mb-10" : ""}`}>
                  <label className="block font-bengali font-medium text-[20px] text-[#181818] mb-2">
                    {label}
                  </label>
                  <Input placeholder={placeholder} className="w-full" value={formData[name.toLowerCase()]} onChange={handleChange} name={name.toLowerCase()} />
                </div>
              ))}
            </div>
            <div className="flex flex-col w-1/2 px-5 h-3/4">
              <div className="w-full mb-10">
                <label className="block font-bengali font-medium text-[20px] text-[#181818] mb-2">
                  Asunto
                </label>
                <Input
                  placeholder={subjectField.placeholder}
                  className="w-full"
                  value={formData[subjectField.name.toLowerCase()]}
                  onChange={handleChange}
                  name={subjectField.name.toLowerCase()}
                />
              </div>
              <div className="w-full h-full">
                <label className="block font-bengali font-medium text-[20px] text-[#181818] mb-2">
                  Mensaje
                </label>
                <Input
                  placeholder={messageField.placeholder}
                  className="w-full h-[280px]"
                  type="textarea"
                  value={formData[messageField.name.toLowerCase()]}
                  onChange={handleChange}
                  name={messageField.name.toLowerCase()}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center bottom-15 w-full pt-[3em]" onClick={onSendMessage}>
            <Button label="Enviar" variant="danger" className="p-[50px] shadow-[0px_0px_18.6px_6px_#00000021]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
