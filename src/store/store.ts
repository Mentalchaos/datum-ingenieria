import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./Home/slice";
import topographyReducer from "./Topography/slice";
import lidarReducer from "./Lidar/slice";
import energyReducer from "./Energy/slice";
import historyReducer from "./History/slice";
import contactReducer from "./Contact/slice";
import reportReducer from "./Report/slice";


export const store = configureStore({
  reducer: {
    home: homeReducer,
    topography: topographyReducer,
    lidar: lidarReducer,
    energy: energyReducer,
    history: historyReducer,
    contact: contactReducer,
    report: reportReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
