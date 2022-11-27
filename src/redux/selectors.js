const getIsLoading = state => state.auth.isLoading;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;

const selectors = {
  getIsLoading,
  getIsLoggedIn,
  getUserName,
};

export default selectors;
