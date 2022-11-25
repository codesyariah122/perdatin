<template>
  <div>
    <div
      v-if="$q.screen.gt.sm"
      class="q-pl-xl q-pr-xl q-pb-xs"
      style="margin-top: -90px"
    >
      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-6 col-lg-3">
          <q-card
            flat
            class="q-pa-md"
            style="box-shadow: 0 25px 35px rgb(68 162 255 / 10%) !important"
          >
            <q-img
              src="~assets/icons/team.png"
              fit="cover"
              width="100px"
              height="100px"
            />
            <p class="text-h5 text-bold q-mt-md" style="color: #39354f">
              Keanggotaan
            </p>
            <p
              class="text-subtitle2 text-bold"
              style="color: #6b6b6b; line-height: 1.8; height: 100px"
            >
              Sistem Layanan Keanggotaan mencakup registrasi anggota baru,
              re-registrasi anggota lama dan cek status keanggotaan
            </p>
            <router-link to="/" class="read-more">
              Pelajari lebih lanjut >
              <i class="ri-arrow-right-s-line"></i>
            </router-link>
          </q-card>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <q-card
            flat
            class="q-pa-md"
            style="box-shadow: 0 25px 35px rgb(68 162 255 / 10%) !important"
          >
            <q-img
              src="~assets/icons/network-connection.png"
              fit="cover"
              width="100px"
              height="100px"
            />
            <p class="text-h5 text-bold q-mt-md" style="color: #39354f">CPD</p>
            <p
              class="text-subtitle2 text-bold"
              style="color: #6b6b6b; line-height: 1.8; height: 100px"
            >
              Sistem untuk mengelola Borang Data pengembangan pendidikan
              keprofesian berkelanjutan Perdatin
            </p>
            <router-link to="/" class="read-more">
              Pelajari lebih lanjut >
              <i class="ri-arrow-right-s-line"></i>
            </router-link>
          </q-card>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <q-card
            flat
            class="q-pa-md"
            style="box-shadow: 0 25px 35px rgb(68 162 255 / 10%) !important"
          >
            <q-img
              src="~assets/icons/documents.png"
              fit="cover"
              width="100px"
              height="100px"
            />
            <p class="text-h5 text-bold q-mt-md" style="color: #39354f">
              Pengajuan STR
            </p>
            <p
              class="text-subtitle2 text-bold"
              style="color: #6b6b6b; line-height: 1.8; height: 100px"
            >
              Sistem layanan perpanjangan STR anggota melalui penerbitan
              Sertifikat Kompetensi (Serkom) Anggota
            </p>
            <router-link to="/" class="read-more">
              Pelajari lebih lanjut >
              <i class="ri-arrow-right-s-line"></i>
            </router-link>
          </q-card>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <q-card
            flat
            class="q-pa-md"
            style="box-shadow: 0 25px 35px rgb(68 162 255 / 10%) !important"
          >
            <q-img
              src="~assets/icons/planner.png"
              fit="cover"
              width="100px"
              height="100px"
            />
            <p class="text-h5 text-bold q-mt-md" style="color: #39354f">
              SKP Online
            </p>
            <p
              class="text-subtitle2 text-bold"
              style="color: #6b6b6b; line-height: 1.8; height: 100px"
            >
              Agenda pelatihan dan pengembangan pendidikan keprofesian
              berkelanjutan khusus untuk anggota
            </p>
            <router-link to="/" class="read-more">
              Pelajari lebih lanjut >
              <i class="ri-arrow-right-s-line"></i>
            </router-link>
          </q-card>
        </div>
      </div>
    </div>
    <div v-else class="q-pl-xl q-pr-xl q-pb-xs" style="margin-top: -50px">
      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-6 col-lg-3">
          <q-card
            flat
            class="q-pa-md"
            style="box-shadow: 0 25px 35px rgb(68 162 255 / 10%) !important"
          >
            <q-img
              src="~assets/icons/team.png"
              fit="cover"
              width="100px"
              height="100px"
            />
            <p class="text-h5 text-bold q-mt-md" style="color: #39354f">
              Keanggotaan
            </p>
            <p
              class="text-subtitle2 text-bold"
              style="color: #6b6b6b; line-height: 1.8; height: 100px"
            >
              Sistem Layanan Keanggotaan mencakup registrasi anggota baru,
              re-registrasi anggota lama dan cek status keanggotaan
            </p>
            <router-link to="/" class="read-more">
              Pelajari lebih lanjut >
              <i class="ri-arrow-right-s-line"></i>
            </router-link>
          </q-card>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <q-card
            flat
            class="q-pa-md"
            style="box-shadow: 0 25px 35px rgb(68 162 255 / 10%) !important"
          >
            <q-img
              src="~assets/icons/network-connection.png"
              fit="cover"
              width="100px"
              height="100px"
            />
            <p class="text-h5 text-bold q-mt-md" style="color: #39354f">CPD</p>
            <p
              class="text-subtitle2 text-bold"
              style="color: #6b6b6b; line-height: 1.8; height: 100px"
            >
              Sistem untuk mengelola Borang Data pengembangan pendidikan
              keprofesian berkelanjutan Perdatin
            </p>
            <router-link to="/" class="read-more">
              Pelajari lebih lanjut >
              <i class="ri-arrow-right-s-line"></i>
            </router-link>
          </q-card>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <q-card
            flat
            class="q-pa-md"
            style="box-shadow: 0 25px 35px rgb(68 162 255 / 10%) !important"
          >
            <q-img
              src="~assets/icons/documents.png"
              fit="cover"
              width="100px"
              height="100px"
            />
            <p class="text-h5 text-bold q-mt-md" style="color: #39354f">
              Pengajuan STR
            </p>
            <p
              class="text-subtitle2 text-bold"
              style="color: #6b6b6b; line-height: 1.8; height: 100px"
            >
              Sistem layanan perpanjangan STR anggota melalui penerbitan
              Sertifikat Kompetensi (Serkom) Anggota
            </p>
            <router-link to="/" class="read-more">
              Pelajari lebih lanjut >
              <i class="ri-arrow-right-s-line"></i>
            </router-link>
          </q-card>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <q-card
            flat
            class="q-pa-md"
            style="box-shadow: 0 25px 35px rgb(68 162 255 / 10%) !important"
          >
            <q-img
              src="~assets/icons/planner.png"
              fit="cover"
              width="100px"
              height="100px"
            />
            <p class="text-h5 text-bold q-mt-md" style="color: #39354f">
              SKP Online
            </p>
            <p
              class="text-subtitle2 text-bold"
              style="color: #6b6b6b; line-height: 1.8; height: 100px"
            >
              Agenda pelatihan dan pengembangan pendidikan keprofesian
              berkelanjutan khusus untuk anggota
            </p>
            <router-link to="/" class="read-more">
              Pelajari lebih lanjut >
              <i class="ri-arrow-right-s-line"></i>
            </router-link>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useQuasar } from "quasar";

export default {
  name: "LayananHome",
  setup() {
    return {
      q: useQuasar(),
    };
  },

  data() {
    return {};
  },
  created() {
    this.carousel_height = window.innerHeight - 120 + "px";
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="sass" scoped>
.read-more
  font-size: 15px
  color: #3a3650
  font-weight: 700
  transition: all ease 0.5s
  text-decoration: none
</style>
