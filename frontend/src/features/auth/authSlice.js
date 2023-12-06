import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// get user from local storage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isAuthenticated: false,
  user: user,
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: "",
};

//  register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
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

//  login user
export const login = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      return await authService.login(user);
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

// logout
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const savePart = createAsyncThunk('parts/savePart', async (partData, thunkAPI) => {
  try {
    // get token
    const user = localStorage.getItem('user');

    // de-stringify user 
    const parsedUser = JSON.parse(user);

    if (!parsedUser.token) {
      console.log('No token found');
      return thunkAPI.rejectWithValue('Authentication token not found');
    }
    
    const response = await authService.savePart(partData, parsedUser.token);
    return response.data; 

  } catch (error) {
    const message = error?.error || error?.message || error.toString();
    console.log('error in savePart', message);
    return thunkAPI.rejectWithValue(message);
  }

})


export const getMe = createAsyncThunk('auth/getMe', async (token, thunkAPI) => {
  try {
    const response = await authService.getMe(token);
    console.log('response in getMe', response)
    return response;
  } catch (error) {
    const message = error?.error || error?.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})


export const saveUserOnLoad = createAsyncThunk(
  "auth/saveUserOnLoad",
  async (_, thunkAPI) => {
    try {
      const user = localStorage.getItem("user");
      if (user) {
        return JSON.parse(user);
      }
      return null;
    } catch (error) {
      const message = error?.error || error?.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const removeSavedPart = createAsyncThunk(
  "auth/removeSavedPart",
  async (partId, thunkAPI) => {
    try {
      const user = localStorage.getItem("user");
      if (user) {
        const parsedUser = JSON.parse(user);
        if (!parsedUser.token) {
          console.log("No token found");
          return thunkAPI.rejectWithValue("Authentication token not found");
        }

        const response = await authService.removeSavedPart(partId, parsedUser.token);

        // Remove the part from savedParts in local storage
        if (response.success) {
          const updatedSavedParts = parsedUser.savedParts.filter(part => part._id !== partId);
          const updatedUser = { ...parsedUser, savedParts: updatedSavedParts };
          localStorage.setItem("user", JSON.stringify(updatedUser));
        }

        return response.data;
      }
      return null;
    } catch (error) {
      const message = error?.error || error?.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
    setUserParts: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(removeSavedPart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeSavedPart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Part removed successfully';
      })
      .addCase(removeSavedPart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(savePart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(savePart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Part saved successfully';
      })
      .addCase(savePart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(getMe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.isAuthenticated = true;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
    },
});

export const { reset, setUserParts } = authSlice.actions;

export default authSlice.reducer;
