import { useState } from "react";

interface ContactFormData {
  nombre: string;
  email: string;
  codigoPais: string;
  telefono: string;
  mensaje: string;
  servicios: string[];
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: "",
    email: "",
    codigoPais: "+56",
    telefono: "",
    mensaje: "",
    servicios: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      servicios: checked
        ? [...prev.servicios, value]
        : prev.servicios.filter((servicio) => servicio !== value),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="nombre" className="text-[#2D2E33] mb-2 text-base font-medium">
            Nombre completo
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre y Apellido"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D2E33] focus:border-transparent"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-[#2D2E33] mb-2 text-base font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ejemplo@empresa.cl"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D2E33] focus:border-transparent"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="telefono" className="text-[#2D2E33] mb-2 text-base font-medium">
            Teléfono
          </label>
          <div className="flex gap-2">
            <select
              id="codigoPais"
              name="codigoPais"
              value={formData.codigoPais}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D2E33] focus:border-transparent bg-white"
            >
              <option value="+56">+56</option>
              <option value="+1">+1</option>
              <option value="+52">+52</option>
              <option value="+54">+54</option>
              <option value="+55">+55</option>
              <option value="+34">+34</option>
              <option value="+39">+39</option>
              <option value="+33">+33</option>
              <option value="+49">+49</option>
              <option value="+44">+44</option>
            </select>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder=""
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D2E33] focus:border-transparent"
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="mensaje" className="text-[#2D2E33] mb-2 text-base font-medium">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje"
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D2E33] focus:border-transparent resize-none"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[#2D2E33] mb-4 text-base font-medium">
            Servicios
          </label>
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="topografia"
                name="servicios"
                value="Topografía Nueva Generación"
                checked={formData.servicios.includes("Topografía Nueva Generación")}
                onChange={handleCheckboxChange}
                className="w-5 h-5 border border-gray-300 rounded focus:ring-2 focus:ring-[#2D2E33] text-[#2D2E33] cursor-pointer"
              />
              <label htmlFor="topografia" className="ml-3 text-[#2D2E33] cursor-pointer">
                Topografía Nueva Generación
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="lidar"
                name="servicios"
                value="Fotogrametría y LIDAR"
                checked={formData.servicios.includes("Fotogrametría y LIDAR")}
                onChange={handleCheckboxChange}
                className="w-5 h-5 border border-gray-300 rounded focus:ring-2 focus:ring-[#2D2E33] text-[#2D2E33] cursor-pointer"
              />
              <label htmlFor="lidar" className="ml-3 text-[#2D2E33] cursor-pointer">
                Fotogrametría y LIDAR
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="consultoria"
                name="servicios"
                value="Consultoría Energías Renovables"
                checked={formData.servicios.includes("Consultoría Energías Renovables")}
                onChange={handleCheckboxChange}
                className="w-5 h-5 border border-gray-300 rounded focus:ring-2 focus:ring-[#2D2E33] text-[#2D2E33] cursor-pointer"
              />
              <label htmlFor="consultoria" className="ml-3 text-[#2D2E33] cursor-pointer">
                Consultoría Energías Renovables
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-[#2D2E33] text-white rounded-full hover:bg-[#3D3E43] transition-colors duration-200 font-medium"
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

