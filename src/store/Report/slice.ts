import { DefaultState } from "@/components/UI/FeatureSection/interface";
import { createSlice } from "@reduxjs/toolkit";


const initialState: DefaultState = {
  featureSections: [
    {
      title: "¿Cuándo reportar un incidente?",
      description: "En esta sección encontrarás información clara sobre cuándo corresponde reportar un incidente o presentar una denuncia, para que puedas comunicarte con nosotros con tranquilidad y confianza.",
      imageUrl: "",
      buttonLabel: "",
      video: false,
      border: false,
    },
    {
      title: "¿Qué es una incidencia?",
      description: "Una incidencia es cualquier evento inesperado que afecte el normal desempeño de la empresa. Es importante que si ves algún acontecimiento que revista un riesgo o potencial problema por acción de algún colaborador de Datum Ingeniería, que nos informes para poder tomar acción, resolverlo y evitar que éste pueda repetirse.",
      imageUrl: "/images/lidar/img1.jpg",
      buttonLabel: "",
      video: false,
      border: false,
    },
  ],
  groupsFeaturesSection: {
    title: "",
    description: "",
    sections: []
  }
}

export const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {}
});

export default reportSlice.reducer;





