import { api } from "boot/axios";

export const fetch = async ({ commit }, url) => {
  return new Promise((resolve, reject) => {
    api
      .get(url)
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
