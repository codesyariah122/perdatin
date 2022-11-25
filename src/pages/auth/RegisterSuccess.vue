<template>
  <div class="container q-pt-md q-mt-md">
    <div class="row">
      <div class="col">
        <div class="row justify-center q-mb-xl">
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
        <div class="row justify-center q-mb-xl">
          <q-card class="q-px-xl q-pb-lg" style="max-width: 700px">
            <h4 class="text-center text-bold">Registrasi Berhasil</h4>

            <p class="text-center text-body1 text-weight-medium q-mb-xl">
              Mohon menunggu proses verifikasi Pengurus Cabang. Selanjutnya
              sistem akan mengirimkan hasil verifikasi keanggotaan melalui Email
              yang didaftarkan
            </p>

            <div class="text-center text-body1 text-bold">Terima Kasih</div>
            <p class="text-center text-body1 text-bold">Admin Perdatin</p>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Notify } from "quasar";
import { api } from "boot/axios";

export default defineComponent({
  name: "RegisterSuccess",
  components: {},
  data() {
    return {
      loading: false,
      result: {},
      nama: "",
      email: "",
      phone: "",
      password: "",
      propinsi: "",
      kabupaten: "",
      isPwd: true,
      isPwd2: true,
      konfirmasiPassword: "",
      list_propinsi: [],
      list_kabupaten: [],
    };
  },
  created() {
    this.carousel_height = window.innerHeight - 120 + "px";
  },
  mounted() {},

  computed: {
    getKabupatenByPropinsi() {
      return this.list_kabupaten.filter(
        (kabupaten) => kabupaten.propinsi_id == this.propinsi?.id
      );
    },
  },

  methods: {
    daftar() {
      this.$refs.myForm.validate().then((success) => {
        if (success) {
          this.loading = true;

          api
            .post("/web/auth/register", {
              nama: this.nama,
              email: this.email,
              phone: this.phone,
              propinsi_id: this.propinsi.id,
              kabupaten_id: this.kabupaten.id,
              password: this.password,
            })
            .then((response) => {
              console.log(response);
              console.log(authStore.isLoggedIn);
              this.loading = false;
            })
            .catch((error) => {
              this.loading = false;
              console.log(error.response.data);
              console.log(error.response.data?.code);

              if (error.response.data?.code == 1) {
                Notify.create({
                  message: error.response.data?.message,
                  type: "negative",
                });
              } else {
                Notify.create({
                  message: "Gagal mendaftar. Coba lagi",
                  type: "negative",
                });
              }
            });
        } else {
          Notify.create({
            message: "Mohon isi kolom yang diperlukan",
            type: "negative",
          });
          // oh no, user has filled in
          // at least one invalid value
        }
      });
    },

    getPropinsi() {
      api
        .get("/web/propinsi")
        .then((response) => {
          this.$nextTick(() => {
            this.list_propinsi = response.data.result;
            console.log(this.list_propinsi);
          });
        })
        .catch(() => {
          console.log("error");
        })
        .finally(() => {});
    },

    getKabupaten() {
      api
        .get("/web/kabupaten")
        .then((response) => {
          this.$nextTick(() => {
            this.list_kabupaten = response.data.result;
            console.log(this.list_propinsi);
          });
        })
        .catch(() => {
          console.log("error");
        })
        .finally(() => {});
    },

    changePropinsi() {
      this.kabupaten = null;
    },
  },
});
</script>

<style  scoped>
.q-field__native {
  font-weight: 500 !important;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  line-height: 2.1;
}

li:not(:last-child) {
  margin-bottom: 12px;
}
</style>
