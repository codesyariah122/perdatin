<template>
  <div class="container q-pa-md q-ma-md">
    <div class="row justify-center">
      <div class="col-6">
        <div>
          <q-card flat class="q-pa-xl full-height">
            <!-- Material form login -->
            <div class="container">
              <q-form
                ref="myForm"
                class="q-gutter-md"
                @submit.prevent="doPengaduan"
              >
                <h4 class="text-center text-bold">Pengaduan</h4>

                <p class="text-left text-body1 text-weight-medium">
                  Kirimkan pengaduan anda seputar Perdatin melalui form di bawah
                  ini.
                </p>

                <!-- Input login -->
                <!-- <mdb-icon far icon="envelope" class="form-control-feedback" /> -->
                <q-input
                  outlined
                  type="string"
                  v-model="nama"
                  label="Masukan nama lengkap anda"
                  class="text-h6 my-input"
                  :rules="[(val) => !!val || 'Nama harus diisi']"
                />

                <q-input
                  outlined
                  type="string"
                  v-model="no_ktp"
                  label="Masukan no KTP anda"
                  class="text-h6 my-input"
                  :rules="[
                    (val) => !!val || 'No KTP harus diisi',
                    (val) =>
                      val.length == 16 || 'Panjang No KTP harus 16 digit',
                    (val) =>
                      containsOnlyNumbers(val) == true ||
                      'No Ktp harus berisi angka saja',
                  ]"
                />

                <q-input
                  outlined
                  type="string"
                  v-model="no_telepon"
                  label="Masukan no Telepon anda"
                  class="text-h6 my-input"
                  :rules="[
                    (val) => !!val || 'No Telepon harus diisi',
                    (val) =>
                      val.length == 11 ||
                      val.length == 12 ||
                      'No Telepon harus 11 - 12 digit',
                    (val) =>
                      containsOnlyNumbers(val) == true ||
                      'No Telepon harus berisi angka saja',
                  ]"
                />

                <q-input
                  v-model="pengaduan"
                  outlined
                  label="Masukan pengaduan anda"
                  type="textarea"
                  class="text-h6 my-input"
                  :rules="[(val) => !!val || 'Pengaduan harus diisi']"
                />

                <div class="form-group mt-2">
                  <q-btn
                    :loading="loading"
                    class="q-ml-lg q-px-lg text-bold full-width"
                    unelevated
                    rounded
                    color="primary"
                    label="Submit"
                    size="lg"
                    type="submit"
                  />
                </div>
              </q-form>
            </div>
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
  name: "PengaduanPerdatin",
  components: {},
  data() {
    return {
      loading: false,
      result: {},
      nama: "",
      no_ktp: "",
      no_telepon: "",
      pengaduan: "",
    };
  },
  created() {
    this.carousel_height = window.innerHeight - 120 + "px";
  },
  mounted() {},

  methods: {
    doPengaduan() {
      this.$refs.myForm.validate().then((success) => {
        if (success) {
          this.loading = true;

          api
            .post("/web/pengaduan", {
              nama: this.nama,
              no_ktp: this.no_ktp,
              no_telepon: this.no_telepon,
              pengaduan: this.pengaduan,
            })
            .then((response) => {
              console.log(response);
              this.loading = false;

              Notify.create({
                message: "Terima kasih, Pengaduan Anda Segera Di Proses",
                type: "info",
              });

              this.nama = "";
              this.no_ktp = "";
              this.no_telepon = "";
              this.pengaduan = "";

              this.$nextTick(() => {
                this.$refs.myForm.resetValidation();
              });
            })
            .catch((error) => {
              this.loading = false;
              Notify.create({
                message: "Gagal mengirim pengaduan. Coba lagi",
                type: "negative",
              });
            });
        } else {
          Notify.create({
            message: "Mohon isi kolom yang diperlukan",
            type: "negative",
          });
        }
      });
    },

    containsOnlyNumbers(str) {
      return /^\d+$/.test(str);
    },
  },
});
</script>

<style  scoped>
.q-field__native {
  font-weight: 500 !important;
}
</style>
