import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, logIn, logOut, register } from './authOperation';

const loading = state => {
  state.isLoading = true;
};
const loadingForError = state => {
  state.isLoading = false;
};
const registerSuccessfull = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};
const registerError = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
};
const persistedUserPending = state => {
  state.isLoading = true;
};
const persistedUserSuccessfull = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isLoading = false;
};
const persistedUserRejected = state => {
  state.isLoading = false;
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, loading)
      .addCase(register.fulfilled, registerSuccessfull)
      .addCase(register.rejected, registerError)
      .addCase(logIn.pending, loading)
      .addCase(logIn.fulfilled, registerSuccessfull)
      .addCase(logIn.rejected, loadingForError)
      .addCase(logOut.pending, loading)
      .addCase(logOut.fulfilled, registerError)
      .addCase(fetchCurrentUser.pending, persistedUserPending)
      .addCase(fetchCurrentUser.fulfilled, persistedUserSuccessfull)
      .addCase(fetchCurrentUser.rejected, persistedUserRejected);
  },
});

export const authReduser = authSlice.reducer;
