import { createSlice } from "@reduxjs/toolkit";


const preferredScheme = JSON.parse(localStorage.getItem('applicationState'))

const initialState = {
  mode: preferredScheme ? preferredScheme : 'light'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkTheme(state) {
      state.mode = 'dark';
      localStorage.setItem('applicationState', JSON.stringify(state.mode))
    },
    setLightTheme(state) {
      state.mode = 'light';
      localStorage.setItem('applicationState', JSON.stringify(state.mode))
    }
  }
})

export const { setDarkTheme, setLightTheme } = themeSlice.actions;
export default themeSlice.reducer