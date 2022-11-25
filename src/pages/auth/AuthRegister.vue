<template>
  <div class="container q-pt-md q-mt-md">
    <div class="row">
      <div class="col">
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
        <h4 class="text-center text-bold">Registrasi Anggota</h4>

        <p class="text-center text-body1 text-weight-medium">
          Isi data identitas anda untuk daftar menjadi anggota Perdatin
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <q-card flat class="q-pa-xl full-height">
          <!-- Material form login -->
          <div class="container">
            <q-form ref="myForm" class="q-gutter-md" @submit="daftar">
              <!-- Input login -->
              <!-- <mdb-icon far icon="envelope" class="form-control-feedback" /> -->

              <q-select
                outlined
                dense
                v-model="cabang"
                :options="list_propinsi"
                label="Registrasi ke Cabang"
                clearable
                option-value="id"
                option-label="name"
                :rules="[(val) => !!val || 'Registrasi Cabang harus diisi']"
              />

              <q-select
                outlined
                dense
                v-model="jenis_anggota"
                :options="list_jenis_anggota"
                label="Jenis Anggota"
                clearable
                option-value="code"
                option-label="value"
                style="padding-bottom: 0; margin-bottom: 0"
              />

              <div
                class="text-caption text-weight-medium text-red text-italic"
                style="margin-top: 0px"
                v-if="jenis_anggota.code == 1"
              >
                Dokter anggota IDI yang sedang dalam pendidikan Dokter Spesialis
                Anestesiologi Indonesia
              </div>

              <div
                class="text-caption text-weight-medium text-red text-italic"
                style="margin-top: 0px"
                v-if="jenis_anggota.code == 2"
              >
                Dokter anggota IDI yang memiliki ijazah dokter spesialis
                anestesiologi dan terapi intensif
              </div>

              <div
                class="text-caption text-weight-medium text-red text-italic"
                style="margin-top: 0px"
                v-if="jenis_anggota.code == 3"
              >
                Dokter spesialis anestesiologi dan terapi intensif warga negara
                asing yang terintegrasi dan diakui oleh Pemerintah RI
              </div>

              <div
                class="text-caption text-weight-medium text-red text-italic"
                style="margin-top: 0px"
                v-if="jenis_anggota.code == 4"
              >
                Seorang yang berjasa pada pengembangan pendidikan, pelayanan dan
                penelitian dibidang anestesiologi dan terapi intensif di
                Indonesia
              </div>

              <q-input
                dense
                outlined
                type="string"
                v-model="nama"
                label="Nama Lengkap"
                class="text-h6 my-input"
                :rules="[(val) => !!val || 'Nama harus diisi']"
              />

              <q-input
                outlined
                dense
                type="string"
                v-model="email"
                label="Email"
                class="text-h6 my-input"
                :rules="[(val) => !!val || 'Email harus diisi']"
              />

              <q-input
                dense
                outlined
                type="string"
                v-model="tempat_lahir"
                label="Tempat Lahir"
                class="text-h6 my-input"
                :rules="[(val) => !!val || 'Tempat Lahir harus diisi']"
              />

              <div>Tanggal Lahir</div>
              <q-input
                dense
                outlined
                type="date"
                v-model="tanggal_lahir"
                class="text-h6 my-input"
                :rules="[(val) => !!val || 'Tanggal Lahir harus diisi']"
              />

              <q-select
                outlined
                dense
                v-model="jenis_kelamin"
                :options="list_jenis_kelamin"
                label="Jenis Kelamin"
                clearable
                option-value="code"
                option-label="value"
                :rules="[(val) => !!val || 'Jenis Kelamin harus diisi']"
              />

              <q-select
                outlined
                dense
                v-model="agama"
                :options="list_agama"
                label="Agama"
                clearable
                option-value="code"
                option-label="value"
                :rules="[(val) => !!val || 'Agama harus diisi']"
              />

              <q-input
                outlined
                dense
                type="string"
                v-model="no_ktp"
                label="No KTP"
                class="text-h6 my-input"
                :rules="[
                  (val) => !!val || 'No KTP harus diisi',
                  (val) => val.length == 16 || 'Panjang No KTP harus 16 digit',
                  (val) =>
                    containsOnlyNumbers(val) == true ||
                    'No Ktp harus berisi angka saja',
                ]"
              />

              <q-input
                outlined
                dense
                type="string"
                v-model="address"
                label="Alamat Lengkap"
                class="text-h6 my-input"
                :rules="[(val) => !!val || 'Alamat lengkap harus diisi']"
              />

              <q-select
                outlined
                dense
                v-model="propinsi"
                :options="list_propinsi"
                label="Propinsi"
                clearable
                option-value="id"
                option-label="name"
                @update:model-value="changePropinsi()"
                :rules="[(val) => !!val || 'Propinsi harus diisi']"
              />

              <q-select
                outlined
                dense
                v-model="kabupaten"
                :options="list_kabupaten"
                @filter="filterKabupaten"
                label="Kota/Kabupaten"
                clearable
                option-value="id"
                option-label="name"
                :rules="[(val) => !!val || 'Kota/Kabupaten harus diisi']"
              />

              <q-select
                outlined
                dense
                v-model="kecamatan"
                :options="list_kecamatan"
                @filter="filterKecamatan"
                label="Kecamatan"
                clearable
                option-value="id"
                option-label="name"
                :rules="[(val) => !!val || 'Kecamatan harus diisi']"
              />

              <q-select
                outlined
                dense
                v-model="kelurahan"
                :options="list_kelurahan"
                @filter="filterKelurahan"
                label="Kelurahan"
                clearable
                option-value="id"
                option-label="name"
                :rules="[(val) => !!val || 'Kelurahan harus diisi']"
              />

              <q-input
                outlined
                dense
                type="string"
                v-model="phone"
                label="No Telepon/HP"
                class="text-h6 my-input"
                :rules="[(val) => !!val || 'No Telepon/HP harus diisi']"
              />

              <q-input
                outlined
                dense
                type="string"
                v-model="str"
                label="No STR"
                class="text-h6 my-input"
                :rules="[(val) => !!val || 'No STR harus diisi']"
              />

              <q-input
                outlined
                dense
                type="string"
                v-model="npa_idi"
                label="No NPA IDI"
                class="text-h6 my-input"
                :rules="[(val) => !!val || 'No NPA IDI harus diisi']"
              />

              <q-input
                outlined
                dense
                type="string"
                v-model="perguruan_tinggi"
                label="Universitas Dokter Umum"
                class="text-h6 my-input"
                :rules="[
                  (val) => !!val || 'Universitas Dokter Umum harus diisi',
                ]"
              />

              <q-input
                outlined
                dense
                type="string"
                v-model="tahun_lulus"
                label="Tahun Lulus Dokter Umum"
                class="text-h6 my-input"
                :rules="[(val) => !!val || 'Tahun Lulus harus diisi']"
              />

              <q-input
                outlined
                dense
                type="string"
                v-model="perguruan_tinggi_spesialis"
                label="Universitas Spesialis Anestesiologi"
                class="text-h6 my-input"
              />
              <q-input
                v-if="jenis_anggota.code == 1"
                outlined
                dense
                type="string"
                v-model="tahun_masuk_spesialis"
                label="Tahun Masuk Spesialis Anestesiologi"
                class="text-h6 my-input"
              />

              <q-input
                v-else
                outlined
                dense
                type="string"
                v-model="tahun_lulus_spesialis"
                label="Tahun Lulus Spesialis Anestesiologi"
                class="text-h6 my-input"
              />

              <q-input
                v-model="password"
                outlined
                dense
                :type="isPwd ? 'password' : 'text'"
                label="Password"
                class="my-input text-h6"
                :rules="[(val) => !!val || 'Password harus diisi']"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>

              <q-input
                v-model="konfirmasiPassword"
                outlined
                dense
                :type="isPwd2 ? 'password' : 'text'"
                label="Konfirmasi Password"
                class="my-input text-h6"
                :rules="[
                  (val) => !!val || 'Konfirmasi Password harus diisi',
                  (val) =>
                    val == this.password ||
                    'Konfirmasi Password tidak sama dengan Password',
                ]"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd2 ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd2 = !isPwd2"
                  />
                </template>
              </q-input>

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

              <div class="form-group q-mt-lg">
                <q-btn
                  :loading="loading"
                  class="q-ml-lg q-px-lg text-bold full-width"
                  unelevated
                  rounded
                  color="primary"
                  label="Daftar"
                  size="lg"
                  @click="daftar"
                />
              </div>

              <p class="text-body1 text-bold text-center q-mt-lg">
                Sudah punya Akun ?
                <router-link class="link-style text-blue q-pl-xs" to="/login"
                  >Login untuk masuk</router-link
                >
              </p>
            </q-form>
          </div>
        </q-card>
      </div>
      <div class="col-none col-md-6">
        <q-card bordered class="q-ma-md q-mt-xl">
          <q-toolbar-title class="text-center q-pa-md text-bold">
            Alur Pendaftaran
          </q-toolbar-title>
          <q-separator />
          <div
            class="row text-subtitle2 text-bold q-pl-xl q-pr-xl q-pt-lg q-pb-xl"
          >
            <div class="col">
              <ul>
                <li>
                  1. Calon Anggota mengisi form pengajuan anggota baru melalui
                  website resmi Perdatin
                </li>
                <li>
                  2. Calon Anggota menerima informasi jika registrasi berhasil
                  ke email dan menunggu konfirmasi dari Admin Perdatin
                </li>
                <li>
                  3. Admin perdatin akan memproses data pendaftaran calon
                  anggota dan mengirim informasi Penerimaan Calon Anggota ke
                  email
                </li>
                <li>
                  4. Calon anggota menerima email Penerimaan Anggota Perdatin
                  dan sudah bisa login ke website Perdatin
                </li>
              </ul>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Notify } from "quasar";
import { api } from "boot/axios";

export default defineComponent({
  name: "AuthRegistrasi",
  components: {},
  data() {
    return {
      loading: false,
      result: {},
      nama: "",
      email: "",
      phone: "",
      password: "",
      cabang: "",
      propinsi: "",
      kabupaten: "",
      kecamatan: "",
      kelurahan: "",
      address: "",
      isPwd: true,
      isPwd2: true,
      konfirmasiPassword: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      jenis_kelamin: "",
      agama: "",
      no_ktp: "",
      str: "",
      npa_idi: "",
      perguruan_tinggi: "",
      perguruan_tinggi_spesialis: "",
      photo: "",
      tahun_lulus: "",
      tahun_lulus_spesialis: "",
      jenis_anggota: "",
      keterangan_jenis_anggota: "",
      list_propinsi: [],
      list_kabupaten: [],
      list_kecamatan: [],
      list_kelurahan: [],
      list_jenis_kelamin: [],
      list_jenis_anggota: [],
      list_agama: [],
    };
  },
  created() {
    this.carousel_height = window.innerHeight - 120 + "px";
  },
  mounted() {
    this.getPropinsi();
    this.getJenisKelamin();
    this.getAgama();
    this.getJenisAnggota();
  },

  computed: {
    getKabupatenByPropinsi() {
      return this.list_kabupaten.filter(
        (kabupaten) => kabupaten.propinsi_id == this.propinsi?.id
      );
    },
  },

  methods: {
    daftar() {
      if (!this.jenis_anggota) {
        Notify.create({
          message: "Mohon isi Jenis Anggota",
          type: "negative",
        });
        return;
      }

      if (this.jenis_anggota != 1 && !this.perguruan_tinggi_spesialis) {
        Notify.create({
          message: "Mohon isi Universitas Spesialis Anestologi",
          type: "negative",
        });
        return;
      }

      if (this.jenis_anggota != 1 && !this.tahun_lulus_spesialis) {
        Notify.create({
          message: "Mohon isi Tahun Lulus Spesialis Anestologi",
          type: "negative",
        });
        return;
      }

      this.$refs.myForm.validate().then((success) => {
        if (success) {
          this.loading = true;
          api
            .post("/web/auth/register", {
              nama: this.nama,
              jenis_anggota: this.jenis_anggota.code,
              email: this.email,
              tempat_lahir: this.tempat_lahir,
              tanggal_lahir: this.tanggal_lahir,
              jenis_kelamin_id: this.jenis_kelamin.code,
              agama_id: this.agama.code,
              no_ktp: this.no_ktp,
              phone: this.phone,
              address: this.address,
              cabang_id: this.cabang.id,
              propinsi_id: this.propinsi.id,
              kabupaten_id: this.kabupaten.id,
              kecamatan_id: this.kecamatan.id,
              kelurahan_id: this.kelurahan.id,
              str: this.str,
              perguruan_tinggi: this.perguruan_tinggi,
              perguruan_tinggi_spesialis: this.perguruan_tinggi_spesialis,
              tahun_lulus: this.tahun_lulus,
              tahun_masuk_spesialis: this.tahun_masuk_spesialis,
              tahun_lulus_spesialis: this.tahun_lulus_spesialis,
              password: this.password,
              npa_idi: this.npa_idi,
            })
            .then((response) => {
              console.log(response);
              this.loading = false;

              this.$router.push("/register-success");
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

    filterKabupaten(val, update) {
      api
        .get("/web/kabupaten/" + this.propinsi.id)
        .then((response) => {
          this.$nextTick(() => {
            update(() => {
              this.list_kabupaten = response.data.result;
            });
          });
        })
        .catch(() => {
          console.log("error");
        })
        .finally(() => {});
    },

    filterKecamatan(val, update) {
      api
        .get("/web/kecamatan/" + this.kabupaten.id)
        .then((response) => {
          this.$nextTick(() => {
            update(() => {
              this.list_kecamatan = response.data.result;
            });
          });
        })
        .catch(() => {
          console.log("error");
        })
        .finally(() => {});
    },

    filterKelurahan(val, update) {
      api
        .get("/web/kelurahan/" + this.kecamatan.id)
        .then((response) => {
          this.$nextTick(() => {
            update(() => {
              this.list_kelurahan = response.data.result;
            });
          });
        })
        .catch(() => {
          console.log("error");
        })
        .finally(() => {});
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

    changePropinsi() {
      this.kabupaten = null;
    },

    getJenisKelamin() {
      api
        .get("/web/jeniskelamin/list")
        .then((response) => {
          this.$nextTick(() => {
            this.list_jenis_kelamin = response.data.list_data;
            console.log(this.list_jenis_kelamin);
          });
        })
        .catch(() => {
          console.log("error");
        })
        .finally(() => {});
    },

    getAgama() {
      api
        .get("/web/user-agama/list")
        .then((response) => {
          this.$nextTick(() => {
            this.list_agama = response.data.list_data;
            console.log(this.list_agama);
          });
        })
        .catch(() => {
          console.log("error");
        })
        .finally(() => {});
    },

    getJenisAnggota() {
      api
        .get("/web/jenisanggota/list")
        .then((response) => {
          this.$nextTick(() => {
            this.list_jenis_anggota = response.data.list_data;
            console.log(this.list_jenis_anggota);
          });
        })
        .catch(() => {
          console.log("error");
        })
        .finally(() => {});
    },

    selectFile() {
      alert("select file");
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
