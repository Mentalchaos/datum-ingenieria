import { DefaultState } from "@/components/UI/FeatureSection/interface";
import { createSlice } from "@reduxjs/toolkit";


const initialState: DefaultState = {
  featureSections: [
    {
      title: "DATUM, Resolviendo tus desafíos con precisión.",
      description: "",
      imageUrl: "/images/videos/1M/topografia-banner-com.mp4",
      buttonLabel: "",
      video: true,
      border: false,
    },
    {
      title: "Servicios de topografía Avanzada.",
      description: "Combinamos experiencia, tecnología de punta y análisis de datos geoespaciales para transformar cada levantamiento en información precisa y decisiones confiables.",
      imageUrl: "/images/home/img1.jpg",
      buttonLabel: "Descubrir",
      video: false,
      border: true,
    },
    {
      title: "Fotogrametría y LIDAR",
      description: "Transformamos el territorio en modelos digitales claros y útiles respaldados con la mejor tecnología.",
      imageUrl: "/images/home/img2.jpg",
      buttonLabel: "Descubrir",
      video: false,
      border: true,
    },
    {
      title: "Consultorías en Energías Renovables",
      description: "Impulsamos proyectos sostenibles con consultoría experta y eficiente.",
      imageUrl: "/images/home/img3.jpg",
      buttonLabel: "Descubrir",
      video: false,
      border: true,
    },
    {
      title: "Tecnología en nuestras manos a favor de tu éxito: RIEGL.",
      description: "Reconocida por más de 40 años en soluciones avanzadas de escaneo láser terrestre, aéreo, móvil y vía UAV. ",
      imageUrl: "/images/home/img4.jpg",
      buttonLabel: "Descubrir",
      video: false,
      border: false,
    }
  ],
  groupsFeaturesSection: {
    id: "industry-header-item",
    title: "Escenarios de aplicación",
    description: "Aplicamos tecnología y experiencia en sectores clave como energía, transporte, medio ambiente y telecomunicaciones, generando soluciones precisas y sostenibles.",
    sections: [
      {
        title: "Energía",
        description: "Renovables: solar, eólica e híbrida. Distribución y transmisión eléctrica.",
        imageUrl: "/images/home/mix/img1.jpg",
      },
      {
        title: "Transporte e Infraestructura Vial",
        description: "Accesos, señalización, pavimentos y servidumbres. Paralelismos y atraviesos en carreteras.",
        imageUrl: "/images/home/mix/img2.jpg",
      },
      {
        title: "Construcción y Arquitectura",
        description: "Topografía y geodesia para proyectos urbanos.",
        imageUrl: "/images/home/mix/img3.jpg",
      },
      {
        title: "Medio Ambiente y Territorio",
        description: "Evaluaciones ambientales con fotogrametría y LiDAR. Modelos digitales para gestión sostenible.",
        imageUrl: "/images/home/mix/img4.jpg",
      },
      {
        title: "Marítimo y Costero",
        description: "Levantamientos y concesiones marítimas.",
        imageUrl: "/images/home/mix/img5.jpg",
      },
      {
        title: "Telecomunicaciones y Redes",
        description: "Catastro de líneas, redes e infraestructura SIG.",
        imageUrl: "/images/home/mix/img6.jpg",
      }
    ]
  }
}

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
});

export default homeSlice.reducer;
