import { DefaultState } from "@/components/UI/FeatureSection/interface";
import { createSlice } from "@reduxjs/toolkit";


const initialState: DefaultState = {
  featureSections: [
    {
      title: "Consultorías en energías renovables a tu servicio.",
      description: "",
      imageUrl: "/images/energy/video1.mp4",
      buttonLabel: "",
      video: true,
      border: false,
    },
    {
      title: "Levantamientos precisos para energías limpias",
      description: "Impulsamos proyectos de energía limpia con levantamientos topográficos precisos, asegurando la instalación óptima de plantas solares, parques eólicos y sistemas híbridos.",
      imageUrl: "/images/energy/img1.jpg",
      buttonLabel: "",
      video: false,
      border: true,
    },
    {
      title: "Decisiones estratégicas para todas las escalas.",
      description: "Tecnología avanzada y experiencia en terreno permiten decisiones estratégicas confiables, desde estudios de emplazamiento hasta rutas de transmisión y termografía.",
      imageUrl: "/images/energy/img2.jpg",
      buttonLabel: "",
      video: false  ,
      border: true,
    },
    {
      title: "Instalaciones eléctricas eficientes y sostenibles",
      description: "Optimizamos instalaciones eléctricas para plantas solares, parques eólicos y sistemas híbridos, asegurando eficiencia máxima y un impacto ambiental mínimo en cada proyecto.",
      imageUrl: "/images/energy/img3.jpg",
      buttonLabel: "",
      video: false,
      border: true,
    }
  ],
  groupsFeaturesSection: {
    title: "Asesorías Especializadas",
    description: "Apoyo profesional en cada etapa de tus proyectos de energía limpia, garantizando decisiones precisas y eficientes.",
    sections: [
      {
        title: "Rutas de transmisión y accesibilidad",
        description: "",
        imageUrl: "/images/energy/mix/img1.jpg",
      },
      {
        title: "Estudios de emplazamiento solar y eólico",
        description: "",
        imageUrl: "/images/energy/mix/img2.jpg",
      },
      {
        title: "Optimización de infraestructura híbrida",
        description: "",
        imageUrl: "/images/energy/mix/img3.jpg",
      },
      {
        title: "Evaluación topográfica y de terreno",
        description: "",
        imageUrl: "/images/energy/mix/img4.jpg",
      }
    ]
  }
}

export const energySlice = createSlice({
  name: "energy",
  initialState,
  reducers: {}
});

export default energySlice.reducer;






