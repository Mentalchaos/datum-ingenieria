import { useEffect, useState } from "react";
import cge from "../../../assets/images/companyLogos/CGE.png";
import chilquinta from "../../../assets/images/companyLogos/chilquinta.png";
import copec from "../../../assets/images/companyLogos/copec.png";
import crcc from "../../../assets/images/companyLogos/crcc.png";

const LogosSlider = () => {
  const logos = [cge, copec, crcc, chilquinta];
  const gap = 550;
  const speed = 2;
  const fadeStart = window.innerWidth * 0.55;
  const fadeEnd = window.innerWidth * 0.9;
  const resetPosition = -gap + 100;

  const [positions, setPositions] = useState(
    logos.map((_, i) => ({
      left: i * gap,
      opacity: 1,
    }))
  );

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setPositions((prev) =>
        prev.map(({ left, opacity }) => {
          const newLeft = left + speed;
          let newOpacity = 1;

          if (newLeft > fadeStart) {
            newOpacity = Math.max(1 - (newLeft - fadeStart) / (fadeEnd - fadeStart), 0);
          }

          return {
            left: newLeft > window.innerWidth ? resetPosition : newLeft,
            opacity: newOpacity,
          };
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative w-full h-[144px] overflow-hidden bg-[white] flex items-center"
      onMouseEnter={() => setIsPaused(true)} 
      onMouseLeave={() => setIsPaused(false)}
    >
      {logos.map((logo, i) => (
        <img
          key={i}
          src={logo}
          alt="Logo"
          className="absolute transition-opacity duration-500"
          style={{
            left: `${positions[i].left}px`,
            opacity: positions[i].opacity,
          }}
        />
      ))}
    </div>
  );
};

export default LogosSlider;
