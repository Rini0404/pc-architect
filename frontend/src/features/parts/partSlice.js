import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import partService from "./partService";

const initialState = {
  parts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// creat new Part
export const createPart = createAsyncThunk(
  "parts/createPart",  async(partData, thunkAPI) => {
    try {
      // get token
      const token = thunkAPI.getState().auth.user.token;
      return await partService.createPart(partData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.response.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get user goals
export const getParts = createAsyncThunk('parts/getParts', async(_, thunkAPI) => {
  try {
    // get token
    const token = thunkAPI.getState().auth.user.token;
    return await partService.getParts(token);
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.response.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }

});


export const partSlice = createSlice({
  name: "part",
  initialState,
  reducers: {
    reset: (state) => initialState  
  },
  extraReducers: (builder) => {
    builder
    .addCase(createPart.pending, (state) => {
      state.isLoading = true
    })
    .addCase(createPart.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.goals.push(action.payload)
    })
    .addCase(createPart.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
    .addCase(getParts.pending, (state) => {
      state.isLoading = true
    })
    .addCase(getParts.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.goals = action.payload
    })
    .addCase(getParts.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
  },
});


export const  { reset } = partSlice.actions
export default partSlice.reducer