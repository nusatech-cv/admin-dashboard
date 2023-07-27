export const getCsrfToken = () =>
  // localStorage.getItem("csrfToken") || undefined;
  sessionStorage.getItem("csrfToken") || undefined;
