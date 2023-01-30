import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: 'light'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkTheme(state) {
      state.mode = 'dark'
    },
    setLightTheme(state) {
      state.mode = 'light'
    }
  }
})

export const { setDarkTheme, setLightTheme } = themeSlice.actions;
export default themeSlice.reducer