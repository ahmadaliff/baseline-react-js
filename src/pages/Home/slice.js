import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  data: [],
};

export const storedKey = ['data'];

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getData: () => {},
    setData: (state, action) => {state.data = action.payload},
    resetData: (state) =>{state.data = []} 
  }
})

export const { getData, setData, resetData } = homeSlice.actions;
export default homeSlice.reducer