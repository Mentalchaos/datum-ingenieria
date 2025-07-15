import { useEffect, useRef, useState } from "react";
import cge from "../../../assets/images/companyLogos/CGE.png";
import chilquinta from "../../../assets/images/companyLogos/chilquinta.png";
import copec from "../../../assets/images/companyLogos/copec.png";
import crcc from "../../../assets/images/companyLogos/crcc.png";

// Ajusta el tamaño de los logos aquí si es necesario
const LOGO_HEIGHT = 100;
const LOGO_GAP = 80; // px

const LogosSlider = () => {
  const logos = [cge, copec, crcc, chilquinta];
  // Duplicamos los logos para efecto infinito
  const allLogos = [...logos, ...logos];
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [offset, setOffset] = useState(0);

  // Calcula el ancho total de una "ronda" de logos
  const [logosWidth, setLogosWidth] = useState(0);

  useEffect(() => {
    // Calcula el ancho total de los logos (una ronda)
    if (containerRef.current) {
      setLogosWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    if (!logosWidth) return;

    const speed = 1.2; // px por frame
    const interval = setInterval(() => {
      setOffset((prev) => {
        let next = prev + speed;
        if (next >= logosWidth) {
          next = 0;
        }
        return next;
      });
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [isPaused, logosWidth]);

  return (
    <div
      className="relative w-full h-[144px] bg-[#E2E2E2] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={containerRef}
        className="flex items-center"
        style={{
          transform: `translateX(-${offset}px)`,
          transition: isPaused ? "none" : "transform 0.1s linear",
          width: "max-content",
        }}
      >
        {allLogos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
            style={{
              height: `${LOGO_HEIGHT}px`,
              minWidth: `${LOGO_HEIGHT * 2}px`,
              marginRight: i === allLogos.length - 1 ? 0 : `${LOGO_GAP}px`,
              opacity: 1,
              filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.08))",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                maxHeight: `${LOGO_HEIGHT}px`,
                maxWidth: "180px",
                objectFit: "contain",
                width: "auto",
                height: "100%",
                userSelect: "none",
                pointerEvents: "none",
              }}
              draggable={false}
            />
          </div>
        ))}
      </div>
      {/* Gradientes para fade-in/fade-out en los bordes */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32"
        style={{
          background: "linear-gradient(to right, #E2E2E2 80%, transparent 100%)"
        }}
      />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32"
        style={{
          background: "linear-gradient(to left, #E2E2E2 80%, transparent 100%)"
        }}
      />
    </div>
  );
};

export default LogosSlider;
