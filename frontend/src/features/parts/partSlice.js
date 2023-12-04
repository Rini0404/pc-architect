import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import partService from "./partService";

const initialState = {
  parts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  searchPerformed: false,
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

export const getPartByKeyAndType = createAsyncThunk('parts/getPartByKeyAndType', async({type, model}, thunkAPI) => {
  try {
    // get token
    const token = thunkAPI.getState().auth.user.token;
    return await partService.searchByTypeAndKeyService(type, model, token);
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.response.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }

})

export const resetPart = createAsyncThunk('parts/resetPart', async(_, thunkAPI) => {
  try {
    return await partService.resetPart();
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.response.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }

})

export const partSlice = createSlice({
  name: "part",
  initialState,
  reducers: {
    reset: (state) => initialState  
  },
  extraReducers: (builder) => {
    builder
    .addCase(getPartByKeyAndType.pending, (state) => {
      state.isLoading = true;
      state.searchPerformed = true; // Set when search starts
    })
    .addCase(getPartByKeyAndType.fulfilled, (state, action) => {
      state.isLoading = false;
      state.parts = action.payload;
    })
    .addCase(getPartByKeyAndType.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    })
  },
});


export const  { reset } = partSlice.actions
export default partSlice.reducer