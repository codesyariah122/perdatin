<template>
  <div class="container q-pa-md q-ma-md">
    <div class="row">
      <div class="col-none col-md-6">
        <q-img
          src="~assets/images/bg/login-bg.jpg"
          spinner-color="white"
          height="600px"
          fit="cover"
        />
      </div>
      <div class="col-12 col-md-6">
        <div>
          <q-card flat class="q-pa-xl full-height">
            <!-- Material form login -->
            <div class="container">
              <form class="q-gutter-md" @submit.prevent="LoginProfile">
                <div class="row justify-center">
                  <q-btn
                    round
                    dense
                    flat
                    :ripple="false"
                    size="19px"
                    color="black"
                    class="q-mr-sm btn--no-hover"
                    no-caps
                  >
                    <img src="~assets/images/logo/brand.svg" />

                    <div class="text-h5 text-bold">PERDATIN</div>
                  </q-btn>
                </div>
                <h4 class="text-center text-bold">Selamat Datang</h4>

                <p class="text-left text-body1 text-weight-medium">
                  Masukkan alamat email dan password yang terdaftar untuk
                  mengakses akun Anda
                </p>

                <!-- Input login -->
                <!-- <mdb-icon far icon="envelope" class="form-control-feedback" /> -->
                <q-input
                  outlined
                  type="string"
                  v-model="email"
                  label="Alamat Email"
                  class="text-h6 my-input"
                />

                <q-input
                  outlined
                  type="password"
                  v-model="password"
                  label="Password"
                  class="my-input text-h6"
                />
                <div class="form-group mb-3">
                  <div>
                    <span style="cursor: pointer">
                      <!-- <mdb-icon far icon="eye" /> Check Password -->
                    </span>
                    <span style="cursor: pointer">
                      <!-- <mdb-icon far icon="eye-slash" /> Sembunyikan -->
                    </span>
                  </div>
                </div>

                <div class="row">
                  <p class="text-right text-bold">
                    <router-link
                      class="link-style text-blue q-pl-xs"
                      to="/forgot"
                    >
                      Lupa Password?</router-link
                    >
                  </p>
                </div>

                <div class="form-group mt-2">
                  <q-btn
                    @click="login"
                    :loading="loading"
                    class="q-ml-lg q-px-lg text-bold full-width"
                    unelevated
                    rounded
                    color="primary"
                    label="Masuk"
                    size="lg"
                  />
                </div>

                <p class="text-body1 text-bold text-center q-mt-lg">
                  Belum punya Akun ?
                  <router-link
                    class="link-style text-blue q-pl-xs"
                    to="/register"
                    >Daftar Sekarang</router-link
                  >
                </p>
              </form>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useAuthStore } from "stores/auth.store";
import { Notify } from "quasar";

export default defineComponent({
  name: "AuthLogin",
  components: {},
  data() {
    return {
      loading: false,
      result: {},
      email: "",
      password: "",
    };
  },
  created() {
    this.carousel_height = window.innerHeight - 120 + "px";
  },
  mounted() {},

  methods: {
    login() {
      this.loading = true;

      const authStore = useAuthStore();

      authStore
        .login(this.email, this.password)
        .then((response) => {
          console.log(response);
          console.log(authStore.isLoggedIn);
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
          Notify.create({
            message: "Username atau password salah",
            type: "negative",
          });
        });
    },
  },
});
</script>

<style  scoped>
.q-field__native {
  font-weight: 500 !important;
}

.link-style {
  text-decoration: none;
  color: inherit;
}
</style>
