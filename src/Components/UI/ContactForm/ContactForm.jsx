import Button from "../Button/Button";
import InfoBox from "../InfoBox/InfoBox";
import Input from "../Input/Input";
import background from "../../../assets/images/inicio/form-background.png";

const ContactForm = () => {
  const inputFields = [
    { label: "Nombre", placeholder: "Juan González" },
    { label: "Empresa (opcional)", placeholder: "Datum Ingeniería" },
    { label: "Teléfono", placeholder: "+56 9 1234 5678" },
    { label: "Correo electrónico", placeholder: "contacto@datumingenieria.cl" },
  ];

  return (
    <div className="font-roboto">
      <div className="w-full h-auto relative">
        <div
          className="shadow-lg rounded-lg p-12 w-full h-full bg-[#EDEDED] bg-cover bg-center"
        >
          <div className="flex h-full pt-20">

            <div className="flex flex-col justify-between w-1/2 px-30 h-3/4">
              {inputFields.map(({ label, placeholder }, index) => (
                <div key={label} className={`w-full ${index !== inputFields.length - 1 ? "mb-10" : ""}`}>
                  <label className="block font-bengali font-medium text-[20px] text-[#181818] mb-2">
                    {label}
                  </label>
                  <Input placeholder={placeholder} className="w-full" />
                </div>
              ))}
            </div>

            <div className="flex flex-col w-1/2 px-30 h-3/4">
              <div className="w-full mb-10">
                <label className="block font-bengali font-medium text-[20px] text-[#181818] mb-2">
                  Asunto
                </label>
                <Input placeholder="Proyecto eléctrico" className="w-full" />
              </div>
              <div className="w-full h-full">
                <label className="block font-bengali font-medium text-[20px] text-[#181818] mb-2">
                  Mensaje
                </label>
                <Input
                  placeholder="Escribe tu mensaje aquí"
                  className="w-full h-[259px]"
                  type="textarea"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center bottom-15 w-full pt-[3em]">
            <Button label="Enviar" variant="danger" className="p-[50px] shadow-[0px_0px_18.6px_6px_#00000021]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
