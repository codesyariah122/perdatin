<template>
  <div class="container q-pa-md">
    <q-skeleton
      v-if="loading"
      width="100%"
      :height="carousel_height"
    ></q-skeleton>
    <template v-else>
      <div class="row justify-center">
        <div class="col">
          <h4 class="text-center text-bold">Pengurus Kolegium</h4>
          <div class="row" style="background-color: #e8f7fa">
            <div
              class="q-pa-xl q-mt-xl text-center"
              style="max-width: 800px; margin: auto"
            >
              <p class="text-body1 text-center text-bold">
                SUSUNAN PENGURUS KOLEGIUM ANESTESIOLOGI DAN TERAPI INTENSIF
                INDONESIA (KATI) MASA BAKTI TAHUN 2022 - 2025
              </p>
            </div>
          </div>
          <div class="bold-line"></div>
          <div
            class="row justify-center"
            style="max-width: 800px; margin: auto"
          >
            <table class="table">
              <tbody>
                <template v-for="(item, index) in pengurus_kati" :key="item.id">
                  <tr v-if="isDivisiExist(index) && !isDivisiSama(index)">
                    <td
                      class="text-h6 text-bold q-px-md"
                      colspan="2"
                      style="text-align: center; width: 20%"
                    >
                      {{ item.divisi_nama }}
                    </td>
                  </tr>
                  <template v-if="!isJabatanSama(index)">
                    <tr>
                      <td class="text-body1 text-bold" style="width: 50%">
                        {{ item.jabatan_nama }} :
                      </td>
                      <td class="text-body1 text-bold">
                        <template v-if="!isSubJabatanExists(index)">
                          {{ item.nama }}
                        </template>
                      </td>
                    </tr>
                    <tr v-if="isSubJabatanExists(index)">
                      <td
                        class="text-body1 text-bold"
                        style="padding-left: 32px"
                      >
                        {{ item.subjabatan_nama }} :
                      </td>
                      <td class="text-body1 text-bold">{{ item.nama }}</td>
                    </tr>
                  </template>
                  <template v-else>
                    <tr v-if="isSubJabatanExists(index)">
                      <td
                        class="text-body1 text-bold"
                        style="padding-left: 32px"
                      >
                        {{ item.subjabatan_nama }} :
                      </td>
                      <td class="text-body1 text-bold">{{ item.nama }}</td>
                    </tr>
                    <tr v-else>
                      <td class="text-body1 text-bold"></td>
                      <td class="text-body1 text-bold">{{ item.nama }}</td>
                    </tr>
                  </template>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { api } from "boot/axios";

export default {
  name: "TentangPengurusKati",
  components: {},
  data() {
    return {
      loading: true,
      pengurus_besar: [],
      pengurus_kati: [],
      tempDivisi: "",
    };
  },
  created() {
    this.carousel_height = window.innerHeight - 120 + "px";
  },
  mounted() {
    this.loadData();
  },

  methods: {
    isJabatanSama(index) {
      if (index == 0) return false;

      var isSama = false;
      if (
        this.pengurus_kati[index].organisasi_jabatan_id ==
        this.pengurus_kati[index - 1].organisasi_jabatan_id
      ) {
        isSama = true;
      }

      return isSama;
    },
    isDivisiSama(index) {
      if (index == 0) return false;

      var isSama = false;
      if (
        this.pengurus_besar[index].organisasi_divisi_id ==
          this.pengurus_besar[index - 1].organisasi_divisi_id &&
        this.pengurus_besar[index].organisasi_divisi_id != ""
      ) {
        isSama = true;
      }

      return isSama;
    },
    isDivisiExist(index) {
      if (this.pengurus_kati[index].organisasi_divisi_id) {
        return true;
      } else {
        return false;
      }
    },
    isSubJabatanExists(index) {
      if (this.pengurus_kati[index].organisasi_sub_jabatan_id) {
        return true;
      } else {
        return false;
      }
    },
    loadData() {
      api
        .get("/web/pengurus")
        .then((response) => {
          this.pengurus_besar = response.data.pengurus_besar;
          this.pengurus_kati = response.data.pengurus_kati;

          this.loading = false;
        })
        .catch(() => {
          console.log("error");
          // const $q = useQuasar();
          // $q.notify({
          //   color: "negative",
          //   position: "top",
          //   message: "Loading failed",
          //   icon: "report_problem",
          // });
        })
        .finally(() => {});
    },
  },
};
</script>

<style scoped>
.content-desc {
  white-space: pre-wrap;
  font-weight: 500;
  line-height: 31px;
}

.bold-line {
  border-bottom: 4px solid #168291;
  margin-top: 30px;
  margin-bottom: 15px;
  padding-bottom: 10px;
  clear: both;
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  margin: auto;
}

table tr {
  border-bottom: solid 1px #e0e0e0;
  padding: 10px;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}

td,
th {
  border-bottom: solid 1px #e0e0e0;
  padding: 16px;
}
</style>
