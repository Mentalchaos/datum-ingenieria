import { FeatureSectionProps } from "@/components/UI/FeatureSection/interface";
import { createSlice } from "@reduxjs/toolkit";


const initialState: FeatureSectionProps[] = [
  {
    title: "Tu próximo paso comienza aquí.",
    description: "Nuestro equipo está disponible para asesorarte y acompañarte en cada etapa de tu proyecto.",
    imageUrl: "/images/contact/img1.jpg",
    buttonLabel: "",
    video: false,
    border: false,
  },
  {
    title: "",
    description: "En DATUM Ingeniería valoramos cada mensaje que recibimos. Queremos conocer tus ideas y necesidades para poder ofrecerte soluciones claras y efectivas. Completa tus datos y tu mensaje, y nuestro equipo se pondrá en contacto contigo a la brevedad.",
    imageUrl: "/images/contact/img2.jpg",
    buttonLabel: "",
    video: false,
    border: true,
  }
]

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {}
});

export default contactSlice.reducer;
