import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// get user from local storage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.errorMessage = '';
    }
  },
  extraReducers: () => {

  }
})

export const {reset} = authSlice.actions;

export default authSlice.reducer;