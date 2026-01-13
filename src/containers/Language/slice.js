import { createSlice } from '@reduxjs/toolkit';
import id from '@languages/id';
import en from '@languages/en';

const initialState = {
  messages: {
    id: { ...id },
    en: { ...en },
  },
};

const languageSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {}
})

export default languageSlice.reducer