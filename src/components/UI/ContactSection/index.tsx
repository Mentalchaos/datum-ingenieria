import { useRouter } from "next/router";


const ContactSection = () => {
  const router = useRouter();

  const handleContact = () => {
    router.push("/contacto");
  };

  return (
    <section className="bg-white">
      <div className="p-6 lg:p-12 h-[calc(60vh-80px)] flex items-center justify-center max-w-[770px] mx-auto">
        <div className="text-center text-[#2D2E33]">
          <div className="flex flex-col text-[1em] lg:text-[1.5em] justify-start">
            Nuestro equipo integra conocimiento y tecnología de vanguardia para impulsar proyectos con sello de excelencia.
          </div>
          <div className="mt-6 text-xl lg:text-[1.4em] max-w-[500px] mx-auto mb-10">Queremos ayudarte.</div>
          <button className="mt-6 px-6 py-2 bg-[#2D2E33] text-white rounded-full cursor-pointer" onClick={handleContact}>Contacto</button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;
