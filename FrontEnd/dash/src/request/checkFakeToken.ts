export const checkFakeToken = (error: any) => {
  if (error.response.status === 511) {
    localStorage.removeItem("authTokenDashBoardDeliceo");
  } else if (error.response.status === 403) {
    localStorage.removeItem("authTokenDashBoardDeliceo");
  }
  window.location.reload();
};
