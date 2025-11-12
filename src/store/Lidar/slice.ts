import { DefaultState } from "@/components/UI/FeatureSection/interface";
import { createSlice } from "@reduxjs/toolkit";


const initialState: DefaultState = {
  featureSections: [
    {
      title: "Fotogrametria y Lidar, precisión multiescala.",
      description: "",
      imageUrl: "/images/lidar/video1.mp4",
      buttonLabel: "",
      video: true,
      border: false,
    },
    {
      title: "Experiencia y Tecnología.",
      description: "En Datum unimos fotogrametría y LiDAR para convertir superficies complejas en modelos precisos y útiles, capturando información detallada en cualquier escala.",
      imageUrl: "/images/lidar/img1.jpg",
      buttonLabel: "",
      video: false,
      border: true,
    },
    {
      title: "Aplicación.",
      description: "Los modelos obtenidos a partir de datos multiescala permiten analizar con exactitud la topografía y geometría del entorno, optimizando el diseño de obras, la planificación territorial y la gestión de infraestructuras complejas.",
      imageUrl: "/images/lidar/video2.mp4",
      buttonLabel: "",
      video: true,
      border: true,
    },
    {
      title: "Valor diferencial.",
      description: "Nuestro enfoque integra cada levantamiento a las necesidades específicas del proyecto, agilizando la toma de decisiones estratégicas.",
      imageUrl: "/images/lidar/img1.jpg",
      buttonLabel: "",
      video: false,
      border: true,
    },
    {
      title: "",
      description: "En Datum Ing. Fotogrametría y LiDAR son aliados esenciales en infraestructura, medio ambiente y energía, entregando datos confiables que generan resultados sostenibles en todos los escenarios y territorios.",
      imageUrl: "/images/lidar/video3.mp4",
      buttonLabel: "",
      video: true,
      border: false,
    },
  ],
  groupsFeaturesSection: {
    title: "Productos finales",
    description: "LiDAR permite generar una amplia gama de productos profesionales, entregados en múltiples formatos técnicos, adaptados a las necesidades de cada proyecto.",
    sections: [
      {
        title: "Modelos Digitales de Superficie (MDS / DSM)",
        description: "",
        imageUrl: "/images/lidar/mix/img1.jpg",
      },
      {
        title: "Modelos Digitales de Terreno (MDT / DTM)",
        description: "",
        imageUrl: "/images/lidar/mix/img2.jpg",
      },
      {
        title: "Ortofotos de Alta Resolución",
        description: "",
        imageUrl: "/images/lidar/mix/img3.jpg",
      },
      {
        title: "Curvas de Nivel",
        description: "",
        imageUrl: "/images/lidar/mix/img4.jpg",
      },
      {
        title: "Modelos 3D de Estructura y Terreno",
        description: "",
        imageUrl: "/images/lidar/mix/img5.jpg",
      },
      {
        title: "Nubes de Puntos",
        description: "",
        imageUrl: "/images/lidar/mix/img6.jpg",
      },
      {
        title: "Volumetrías y Análisis de Superficies",
        description: "",
        imageUrl: "/images/lidar/mix/img7.jpg",
      },
      {
        title: "Cartografía Temática y Planimetría Detallada",
        description: "",
        imageUrl: "/images/lidar/mix/img8.jpg",
      }
    ]
  }
}

export const lidarSlice = createSlice({
  name: "lidar",
  initialState,
  reducers: {}
});

export default lidarSlice.reducer;





