import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from './authService'

interface iUser {
  name: string,
  email: string,
  password: string
}

interface iState {
  user: iUser | null,
  loading: boolean,
  success: boolean,
  message: string | unknown,
  error: boolean
}

const user: iUser | null = JSON.parse(localStorage.getItem('user') || '{}');

const initialState: iState = {
  user: user ? user : null,
  loading: false,
  success: false,
  message: '',
  error: false
}

export const register = createAsyncThunk('auth/register', async (userData: iUser, thunkAPI) => {
  try {
    return await authService.register(userData);
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

    return thunkAPI.rejectWithValue(message);

  }
})

// export const logOut = createAsyncThunk('auth/logOut', async (thunkAPI) => {
//   try {

//     authService.logOut();

//   } catch (error: any) {
//     const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

//     return thunkAPI.rejectWithValue(error);
//   }
// })

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.error = false;
      state.loading = false;
      state.message = '';
      state.success = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.user = null;
      })
      // .addCase(logOut.pending, (state) => {
      //   state.loading = true
      // })
      // .addCase(logOut.fulfilled, (state) => {
      //   state.success = true
      //   state.user = null
      //   state.loading = false
      // })
      // .addCase(logOut.rejected, (state, action) => {
      //   state.error = true
      //   state.loading = false
      //   state.message = action.payload
      // })
  }
})

export const { reset } = authSlice.actions
export default authSlice.reducer