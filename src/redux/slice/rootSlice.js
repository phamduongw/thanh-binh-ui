import { createSlice } from '@reduxjs/toolkit';

// Slice
const rootSlice = createSlice({
  name: 'root',
  initialState: {
    isAuth: false,
  },
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

// Actions
export const { setIsAuth } = rootSlice.actions;

// Selectors
export const isAuthSelector = (state) => state.root.isAuth;

// Reducers
export default rootSlice.reducer;
