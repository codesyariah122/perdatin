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
                <h4 class="text-center text-bold">Forgot Password</h4>

                <p class="text-left text-body1 text-weight-medium">
                  Masukkan alamat email untuk mereset password akun Anda
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

                <div class="form-group mt-2">
                  <q-btn
                    @click="login"
                    :loading="loading"
                    class="q-ml-lg q-px-lg text-bold full-width"
                    unelevated
                    rounded
                    color="primary"
                    label="Reset"
                    size="lg"
                  />
                </div>

                <p class="text-body1 text-bold text-center q-mt-lg">
                  Sudah punya Akun ?
                  <router-link class="link-style text-blue q-pl-xs" to="/login"
                    >LOGIN</router-link
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
import { api } from "boot/axios";

export default defineComponent({
  name: "AuthForgot",
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

      api
        .post("/web/auth/forgot-password", {
          email: this.email,
        })
        .then((response) => {
          console.log(response);
          this.loading = false;

          this.$router.push("/reset-success");
        })
        .catch((error) => {
          this.loading = false;
          if (error.response.data?.error_code == 1) {
            Notify.create({
              message: error.response.data?.message,
              type: "negative",
            });
          } else {
            Notify.create({
              message: "Gagal mereset password. Coba lagi",
              type: "negative",
            });
          }
        });
    },
  },
});
</script>

<style  scoped>
.q-field__native {
  font-weight: 500 !important;
}
</style>
