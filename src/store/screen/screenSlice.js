const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isMobileScreen: false,
  isLargeScreen: false,
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setIsMobileScreen: (state, action) => {
      state.isMobileScreen = action.payload;
    },
    setIsLargeScreen: (state, action) => {
      // Menambahkan reducer untuk isLargeScreen
      state.isLargeScreen = action.payload;
    },
  },
});

// Mengekspor action dan reducer
export const { setIsMobileScreen, setIsLargeScreen } = screenSlice.actions;

export default screenSlice.reducer;
