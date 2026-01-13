import { createSelector } from "@reduxjs/toolkit";

const selectLanguage = (state) => state.language;

export const selectMessages = createSelector(selectLanguage, (state) => state.messages);
