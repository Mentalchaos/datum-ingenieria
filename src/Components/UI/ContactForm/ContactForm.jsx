import Button from "../Button/Button";
import InfoBox from "../InfoBox/InfoBox";
import Input from "../Input/Input";
import background from "../../../assets/images/inicio/form-background.png";
import { useState } from "react";
import { api } from "../../../config/api";
import Spinner from "../Spinner/index";
import { isMobile } from "../../../utils/viewport.js";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

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
    { name: "company", label: "Empresa", placeholder: "Datum Ingeniería" },
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

    setIsLoading(true);
    api.post("contact/", data)
    .then((res) => {
      alert("Mensaje enviado correctamente");
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      console.log(err);
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="font-roboto">
      <Spinner fullPage isLoading={isLoading} />
      <div className="w-full h-auto relative">
        <div
          className={isMobile ? "border-2 border-[#E2E2E2] rounded-lg w-full h-full bg-[#EDEDED] bg-cover bg-center" : "border-2 border-[#E2E2E2] rounded-lg p-12 w-full h-full bg-[#EDEDED] bg-cover bg-center"}
        >
          <div className={isMobile ? "flex flex-col h-full pt-10" : "flex h-full pt-10"}>
            <div className={isMobile ? "flex flex-col justify-between w-full h-3/4 px-5" : "flex flex-col justify-between w-1/2 h-3/4 px-5"}>
              {inputFields.map(({ name, label, placeholder }, index) => (
                <div key={label} className={`w-full ${index !== inputFields.length - 1 ? "mb-10" : ""}`}>
                  <label className="block font-bengali font-medium text-[20px] text-[#181818] mb-2">
                    {label}
                  </label>
                  <Input placeholder={placeholder} className="w-full" value={formData[name.toLowerCase()]} onChange={handleChange} name={name.toLowerCase()} />
                </div>
              ))}
            </div>
            <div className={isMobile ? "flex flex-col w-full px-5 h-3/4" : "flex flex-col w-1/2 px-5 h-3/4"}>
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
