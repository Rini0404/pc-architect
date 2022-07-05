import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import partReducer from '../features/parts/partSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    parts: partReducer,
  },
});
