import { FeatureSectionProps } from "@/components/UI/FeatureSection/interface";
import { createSlice } from "@reduxjs/toolkit";


const initialState: FeatureSectionProps[] = [
  {
    title: "Servicios de topografía Avanzada.",
    description: "",
    imageUrl: "/images/videos/1M/topografia-banner-com.mp4",
    buttonLabel: "",
    video: true,
    border: false,
  },
  {
    title: "Ferrocarriles.",
    description: "Aseguramos el control topográfico en proyectos ferroviarios con precisión en trazados, replanteos y monitoreo de estabilidad para cada etapa constructiva.",
    imageUrl: "/images/services/img1.jpg",
    buttonLabel: "",
    video: false,
    border: true,
  },
  {
    title: "GPS y Geodesia",
    description: "Con tecnología GNSS de alta precisión, establecemos redes geodésicas confiables que sirven como base sólida para cualquier levantamiento.",
    imageUrl: "/images/services/img2.jpg",
    buttonLabel: "",
    video: false,
    border: true,
  },
  {
    title: "Levantamientos costeros y batimetria",
    description: "Aplicamos equipos especializados para mapear costas y fondos marinos, generando modelos detallados que respaldan proyectos portuarios y ambientales.",
    imageUrl: "/images/services/img3.jpg",
    buttonLabel: "",
    video: false,
    border: true,
  },
  {
    title: "Lineas de alta tensión",
    description: "En líneas de transmisión, Datum garantiza la ubicación exacta de torres y fajas de servidumbre, optimizando el desarrollo eléctrico en distintos terrenos.",
    imageUrl: "/images/services/img4.jpg",
    buttonLabel: "",
    video: false,
    border: true,
  },
  {
    title: "Montaje mecánico y estructuras.",
    description: "Datum respalda el montaje industrial controlando alineación, tolerancias y estabilidad de estructuras para asegurar exactitud en cada instalación.",
    imageUrl: "/images/services/img5.jpg",
    buttonLabel: "",
    video: false,
    border: true,
  },
  {
    title: "Sub estaciones eléctricas.",
    description: "Gestionamos el levantamiento y replanteo de subestaciones, asegurando la correcta instalación de componentes eléctricos.",
    imageUrl: "/images/services/img6.png",
    buttonLabel: "",
    video: false,
    border: true,
  },
  {
    title: "Topografía urbana.",
    description: "Datum desarrolla levantamientos urbanos integrales que apoyan desde catastros hasta obras viales, entregando información exacta para la planificación.",
    imageUrl: "/images/services/img7.png",
    buttonLabel: "",
    video: false,
    border: true,
  },
  {
    title: "Consultores estratégicos comprometidos a nivel Nacional.",
    description: "Actuamos como consultores estratégicos. Nuestra labor ha sido clave en la autorización y desarrollo de proyectos de distintas escalas, siempre con un enfoque escalable y adaptable a cada propósito. Desde iniciativas regionales hasta obras de alcance nacional, trabajamos con la misma rigurosidad y excelencia, asegurando que cada decisión se fundamente en información confiable y de alto valor técnico.",
    imageUrl: "/images/services/img8.png",
    buttonLabel: "",
    video: false,
    border: false,
  }
]

export const topographySlice = createSlice({
  name: "topography",
  initialState,
  reducers: {}
});

export default topographySlice.reducer;
