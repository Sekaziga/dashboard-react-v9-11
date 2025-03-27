import { createSlice } from '@reduxjs/toolkit';

const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.classList.toggle("dark", savedTheme === "dark"); // Apply theme on load

const initialState = {
  theme: savedTheme,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
      document.documentElement.classList.toggle("dark", state.theme === "dark"); // Apply theme when toggled
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;