const Footer = () => {
  return (
    <footer className="min-h-[560px] lg:min-h-[640px] bg-[#2D2E33] pt-16 pb-12 px-6 lg:px-12">
      <div className="flex items-center justify-center max-w-[200px] mx-auto mb-12">
        <img src="/images/logo.png" alt="Footer" className="w-full h-full object-cover" />
      </div>

      <div className="text-white text-center text-[1em] lg:text-[1.2em] flex flex-col items-center justify-center mx-auto">
        <div className="flex flex-col items-center justify-center mb-4">Viña del mar, Chile.</div>
        <div className="flex flex-col items-center justify-center mb-4">+56 32 2305689 | +569 5819 1499</div>
        <div className="flex flex-col items-center justify-center mb-4">info@datumingenieria.cl</div>
      </div>

      <div className="mx-auto mt-12 text-white mb-12">
        <div className="text-right mb-2"><a href="/reglamento-interno" target="_blank">Reglamento Interno</a></div>
        <div className="text-right mb-2"><a href="/politica-de-privacidad" target="_blank">Política de Privacidad</a></div>
        <div className="text-right mb-2"><a href="/reporte" target="_blank">Reportar un Incidente</a></div>
        <div className="text-right mb-2"><a href="/haz-tu-denuncia" target="_blank">Haz tu Denuncia</a></div>
      </div>

      <div>
        <div className="text-[#D9D9D9] opacity-20 text-center text-[.9em] lg:text-[1.2em] max-w-[600px] mx-auto flex flex-col items-center justify-center mx-auto">
        Las imágenes en el sitio web de Datum Ing. pueden ser conceptuales y no necesariamente reflejan el producto final.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
