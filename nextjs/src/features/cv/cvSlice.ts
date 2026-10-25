import { createSlice } from '@reduxjs/toolkit';

interface CVState {
  isOpen: boolean;
}

const initialState: CVState = {
  isOpen: false,
};

export const cvSlice = createSlice({
  name: 'cv',
  initialState,
  reducers: {
    openCVModal: (state) => {
      state.isOpen = true;
    },
    closeCVModal: (state) => {
      state.isOpen = false;
    },
    toggleCVModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openCVModal, closeCVModal, toggleCVModal } = cvSlice.actions;
export const cvReducer = cvSlice.reducer;
