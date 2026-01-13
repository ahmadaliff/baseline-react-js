import { createSelector } from "@reduxjs/toolkit";

const selectHomeState = (state) => state.home;

export const selectData = createSelector(selectHomeState, (state) => state.data);
