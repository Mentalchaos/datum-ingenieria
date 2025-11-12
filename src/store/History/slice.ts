import { FeatureSectionProps } from "@/components/UI/FeatureSection/interface";
import { createSlice } from "@reduxjs/toolkit";


const initialState: FeatureSectionProps[] = [
  {
    title: "1999. De la experiencia nace la precisión.",
    description: "Fundada en 1999, DATUM Ingeniería suma más de 26 años de trayectoria en topografía y geomensura, desarrollando proyectos que impulsan el crecimiento del país.",
    imageUrl: "/images/history/img1.jpg",
    buttonLabel: "",
    video: false,
    border: false,
  },
  {
    title: "Ingeniería con propósito.",
    description: "Solo entre 2022 y 2023 ha participado en más de 996 proyectos eléctricos y 437 iniciativas viales para el Ministerio de Obras Públicas, consolidando una experiencia única que combina precisión técnica con compromiso en cada obra.",
    imageUrl: "/images/history/img2.jpg",
    buttonLabel: "",
    video: false,
    border: true,
  },
  {
    title: "Misión",
    description: " Nuestra misión es gestionar el conocimiento e innovar en los servicios de ingeniería y consultoría, aplicando soluciones tecnológicas que optimicen procesos productivos con los más altos estándares, asegurando el posicionamiento en el mercado y una conexión total con nuestros clientes.",
    imageUrl: "/images/history/img3.jpg",
    buttonLabel: "",
    video: false,
    border: true,
  }
]

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {}
});

export default historySlice.reducer;
