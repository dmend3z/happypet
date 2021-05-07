import decode from "jwt-decode";
import api from "../utils/api";

export const login = (username: string, password: string) => {
  // Get a token from api server using the fetch api
  return fetch(api+`auth/login`, {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      setToken(response.token); // Setting the token in localStorage
      return Promise.resolve(response);
    });
};

const setToken = (idToken: string) => {
  // Saves user token to localStorage
  localStorage.setItem("user", idToken);
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user")!);
};

export const getToken = () => {
  const token = JSON.parse(localStorage.getItem("user")!);
  return token.token;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getProfile = () => {
  return decode(getToken());
};
