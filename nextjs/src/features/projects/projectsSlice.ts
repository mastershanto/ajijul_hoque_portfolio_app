import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProjectsState {
  selectedCategory: string;
  searchQuery: string;
}

const initialState: ProjectsState = {
  selectedCategory: 'all',
  searchQuery: '',
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    resetFilters: (state) => {
      state.selectedCategory = 'all';
      state.searchQuery = '';
    },
  },
});

export const { setSelectedCategory, setSearchQuery, resetFilters } =
  projectsSlice.actions;

export const projectsReducer = projectsSlice.reducer;
