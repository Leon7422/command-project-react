const getIsLoading = state => state.auth.isLoading;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getUserId = state => state.auth.user.id;

const selectors = {
  getIsLoading,
  getIsLoggedIn,
  getUserName,
  getUserId,
};

export default selectors;
