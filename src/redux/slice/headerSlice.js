import { createSlice } from '@reduxjs/toolkit';

// Slice
const headerSlice = createSlice({
  name: 'header',
  initialState: {
    isAnimated: false,
    isMenuOpen: false,
    isServicesOpen: false,
  },
  reducers: {
    closeMenu: (state) => {
      state.isMenuOpen = false;
      state.isServicesOpen = false;
    },
    setIsMenuOpen: (state, action) => {
      const { isMenuOpen, isAnimated = true } = action.payload;
      state.isAnimated = isAnimated;
      state.isMenuOpen = isMenuOpen;
      state.isServicesOpen = false;
    },
    setIsServicesOpen: (state, action) => {
      state.isAnimated = true;
      state.isServicesOpen = action.payload;
    },
  },
});

// Action
export const { closeMenu, setIsMenuOpen, setIsServicesOpen } =
  headerSlice.actions;

// Selector
export const isAnimatedSelector = (state) => state.header.isAnimated;
export const isMenuOpenSelector = (state) => state.header.isMenuOpen;
export const isServicesOpenSelector = (state) => state.header.isServicesOpen;

// Reducer
export default headerSlice.reducer;
