import { createSelector } from 'reselect';

const selectLanguage = (state) => state.language;

export const selectMessages = createSelector(selectLanguage, (state) => state.messages);
