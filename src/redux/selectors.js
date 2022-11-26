const getIsLoading = state => state.auth.isLoading;
const getIsLoggedIn = state => state.auth.isLoggedIn;

const selectors = {
  getIsLoading,
  getIsLoggedIn,
};

export default selectors;
