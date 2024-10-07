import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "./screen/reducer";

/**store: object yang menyimpan seluruh state global dan menyediakan method dispatch
 * action untuk mengakses dan mentriger perubahan state
 */
export const store = configureStore({
  reducer: {
    screen: screenReducer,
  },
});

export default store;
