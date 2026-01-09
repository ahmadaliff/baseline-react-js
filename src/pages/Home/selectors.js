import { createSelector } from 'reselect';

const selectHomeState = (state) => state.home;

export const selectData = createSelector(selectHomeState, (state) => state.data);
