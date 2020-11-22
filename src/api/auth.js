import { API_HOST, TOKEN } from "../utils/constant";
import jwtDecode from "jwt-decode";

export function SignUpApi(user) {
  const url = `${API_HOST}/registro`;
  const userTemp = {
    ...user,
    email: user.email.toLowerCase(),
    fechaNacimiento: new Date(),
  };
  delete userTemp.repeatpassword;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userTemp),
  };
  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 || response.status < 300) {
        return response.json();
      }
      return { code: 404, message: "Email no disponible" };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function SignInApi(user) {
  const url = `${API_HOST}/login`;

  const data = {
    ...user,
    email: user.email.toLowerCase(),
  };

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch(url, params)
    .then((resp) => {
      if (resp.status >= 200 || resp.status < 300) {
        return resp.json();
      }
      return { message: "Usuario o contraseña incorrectos" };
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

export function setTokenAPI(token) {
  localStorage.setItem(TOKEN, token);
}

export function logoutAPI() {
  localStorage.removeItem(TOKEN);
}

export function getTokenApi() {
  return localStorage.getItem(TOKEN);
}

export function isUserLogedAPI() {
  const token = getTokenApi();

  if (!token) {
    logoutAPI();
    return null;
  }
  if (isExpired(token)) {
    logoutAPI();
  }
  return jwtDecode(token);
}

function isExpired(token) {
  const { exp } = jwtDecode(token);
  const expired = exp * 1000;
  const timeout = expired - Date.now();

  if (timeout < 0) {
    return true;
  }
  return false;
}
