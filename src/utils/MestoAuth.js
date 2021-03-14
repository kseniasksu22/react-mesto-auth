export const BASE_URL = "https://auth.nomoreparties.co";

export function register(email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((result) => {
      if (result.ok) {
        return result.json();
      } else return Promise.reject(`Что-то пошло не так: ${result.status}`);
    })
    .catch((err) => console.log(err));
}

export function login(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((result) => {
      if (result.ok) {
        return result.json();
      } else return Promise.reject(`Что-то пошло не так: ${result.status}`);
    })
    .catch((err) => console.log(err));
}
export function getContent(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((result) => {
      if (result.ok) {
        return result.json();
      } else return Promise.reject(`Что-то пошло не так: ${result.status}`);
    })
    .catch((err) => console.log(err));
}
