import { useState } from "react";

interface ReportFormData {
  email: string;
  codigoPais: string;
  telefono: string;
  mensaje: string;
}

const ReportForm = () => {
  const [formData, setFormData] = useState<ReportFormData>({
    email: "",
    codigoPais: "+56",
    telefono: "",
    mensaje: "",
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario de reporte enviado:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <div className="w-16 h-16 flex items-center justify-center">
            <svg
              className="w-full h-full text-[#2D2E33]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <div className="space-y-3 text-[#2D2E33]">
            <p className="text-base">
              Continúe si desea reportar situaciones que sean responsabilidad de DATUM Ingeniería y que puedan afectar a colaboradores, proveedores o terceros.
            </p>
            <p className="text-base">
              Por favor, incluya <strong>sus datos de contacto en el mensaje</strong> para que podamos darle seguimiento adecuado y responderle oportunamente.
            </p>
          </div>
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
            placeholder="Descripción en detalle de la incidencia."
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D2E33] focus:border-transparent resize-none"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-[#2D2E33] text-white rounded-lg hover:bg-[#3D3E43] transition-colors duration-200 font-medium"
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReportForm;

