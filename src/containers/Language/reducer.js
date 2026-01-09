import id from '@languages/id';
import en from '@languages/en';


export const initialState = {
  messages: {
    id: { ...id },
    en: { ...en },
  },
};

const languageReducer = (state = initialState) => state;

export default languageReducer;
