const getIsLoading = state => state.auth.isLoading;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getUserId = state => state.auth.user.id;
const getSid = state => state.auth.sid;
const getRefreshToken = state => state.auth.refreshToken;
const getAccessToken = state => state.auth.accessToken;

const selectors = {
  getIsLoading,
  getIsLoggedIn,
  getUserName,
  getUserId,
  getSid,
  getRefreshToken,
  getAccessToken,
};

export default selectors;
