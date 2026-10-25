import { configureStore } from '@reduxjs/toolkit';
import { cvReducer } from '../../features/cv/cvSlice';
import { copilotReducer } from '../../features/ai-copilot/copilotSlice';
import { projectsReducer } from '../../features/projects/projectsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      cv: cvReducer,
      copilot: copilotReducer,
      projects: projectsReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
