export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.email;
export const selectLoadingStatus = state => state.auth.isLoading;
