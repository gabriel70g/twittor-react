import { API_HOST } from "../utils/constant";
import { getTokenApi } from "./auth";

export function getUserApi(id) {
  const url = `${API_HOST}/verperfil?id=${id}`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer${getTokenApi()}`,
    },
  };

  return fetch(url, params)
    .then((resp) => {
      if (resp.status > 400) throw new Error("La k");
      return resp.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}
