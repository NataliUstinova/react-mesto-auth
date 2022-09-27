const BASE_URL = "https://auth.nomoreparties.co";
const checkServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(res.status);
};

export const register = (email, password) => {
  fetch(`${BASE_URL}/signup`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then(checkServerResponse);
};

export const login = (email, password) => {
  fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then(checkServerResponse);
};

export const getContent = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  }).then(checkServerResponse);
};

export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkServerResponse);
};
