// slice.js
import { createSlice } from '@reduxjs/toolkit';

const columnSlice = createSlice({
  name: 'column',
  initialState: {
    selectedValue: null,
  },
  reducers: {
    setSelectedValue: (state, action) => {
      state.selectedValue = action.payload;
    },
  },
});

export const { setSelectedValue } = columnSlice.actions;
export default columnSlice.reducer;
