import { createSlice } from "@reduxjs/toolkit";


const preferredScheme: string | null = JSON.parse(localStorage.getItem('applicationState') || '{}') ;

interface iInitialState {
  mode: string | null;
}

const initialState: iInitialState = {
  mode: preferredScheme ? preferredScheme : 'light'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkTheme(state) {
      state.mode = 'dark';
      localStorage.setItem('applicationState', JSON.stringify(state.mode));
    },
    setLightTheme(state) {
      state.mode = 'light';
      localStorage.setItem('applicationState', JSON.stringify(state.mode));
    }
  }
})

export const { setDarkTheme, setLightTheme } = themeSlice.actions;
export default themeSlice.reducer;