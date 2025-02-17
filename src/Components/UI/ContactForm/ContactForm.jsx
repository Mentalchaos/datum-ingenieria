import Button from "../Button/Button";
import InfoBox from "../InfoBox/InfoBox";
import Input from "../Input/Input";

const ContactForm = () => {
  const inputFields = [
    { placeholder: "Nombre" },
    { placeholder: "Empresa (opcional)" },
    { placeholder: "Teléfono" },
    { placeholder: "Correo electrónico" },
  ];

  return (
    <div className="font-roboto">
      <InfoBox width="w-full" height="h-[641px]" className="relative">
        <div className="flex h-full pt-20">
          <div className="flex flex-col justify-between w-1/2 px-30 h-3/4">
            {inputFields.map(({ placeholder }, index) => (
              <Input
                key={placeholder}
                placeholder={placeholder}
                className={`w-full ${
                  index !== inputFields.length - 1 ? "mb-10" : ""
                }`}
              />
            ))}
          </div>

          <div className="flex flex-col w-1/2 px-30 h-3/4">
            <Input placeholder="Asunto" className="w-full mb-10" />
            <Input
              placeholder="Escribe tu mensaje aquí"
              className="w-full h-full"
              type="textarea"
            />
          </div>
        </div>

        <div className="flex justify-center absolute bottom-15 w-[95%]">
          <Button label="Enviar" variant="danger" className="p-[50px]" />
        </div>
      </InfoBox>
    </div>
  );
};

export default ContactForm;
