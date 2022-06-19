import { createSelector } from "reselect";

const selectState = (state) => state.modalReducer;

export const selectIsModalOpen = createSelector(selectState, (state) => state.isModalOpen);
