import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useContentStore = defineStore("content-store", {
  actions: {
    webContents(url) {
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
    },
  },
});
