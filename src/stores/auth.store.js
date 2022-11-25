import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("USER_DATA")),
    token: localStorage.getItem("USER_TOKEN") || "",
    returnUrl: null,
  }),

  actions: {
    login(email, password) {
      return new Promise((resolve, reject) => {
        api
          .post("/web/auth/login", {
            email: email,
            password: password,
          })
          .then((resp) => {
            console.log("ini token prefix");
            console.log("USER_TOKEN");
            console.log(resp.data.token.accessToken);
            const myToken = resp.data.token.accessToken;
            const myUser = resp.data.user;
            localStorage.setItem("USER_TOKEN", myToken);
            localStorage.setItem("USER_DATA", JSON.stringify(myUser));

            this.user = myUser;
            this.token = myToken;

            this.router.push("/");
            resolve(resp);
          })
          .catch((err) => {
            localStorage.removeItem("USER_TOKEN");
            localStorage.removeItem("USER_DATA");
            reject(err);
          });

        // update pinia state
        // this.user = user;

        // store user details and jwt in local storage to keep user logged in between page refreshes
        // localStorage.setItem("user", JSON.stringify(user));

        // redirect to previous url or default to home page
      });
    },
    logout() {
      localStorage.removeItem("USER_TOKEN");
      localStorage.removeItem("USER_DATA");
      this.user = null;
      this.token = null;
      this.router.push("/login");
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    getUser: (state) => state.user,
    getToken: (state) => state.token,
  },
});
