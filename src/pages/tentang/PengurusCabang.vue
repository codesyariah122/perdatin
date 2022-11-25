<template>
  <div class="container q-pa-md">
    <q-skeleton
      v-if="loading"
      width="100%"
      :height="carousel_height"
    ></q-skeleton>
    <template v-else>
      <div class="row">
        <div class="col">
          <h4 class="text-center text-bold">Pengurus Cabang</h4>
          <div class="q-pa-xl" style="background-color: #e8f7fa">
            <p class="text-body1 text-center text-bold">
              BERDASARKAN SURAT KEPUTUSAN PENGURUS CABANG IKATAN DOKTER
              INDONESIA NOMOR : 00585/PB/A.4/09/2016 PENGESAHAN SUSUNAN
              PERSONALIA PENGURUS PUSAT PERHIMPUNAN DOKTER SPESIALIS
              ANESTESIOLOGI DAN TERAPI INTENSIF INDONESIA (PERDATIN) MASA BAKTI
              TAHUN 2022 - 2025
            </p>
          </div>
          <div class="bold-line"></div>
          <div class="justify-center">
            <div style="max-width: 800px; margin: auto">
              <p class="text-body1 text-center text-bold q-my-xl">
                SUSUNAN PENGURUS CABANG PERHIMPUNAN DOKTER SPESIALIS
                ANESTESIOLOGI DAN TERAPI INTENSIF INDONESIA (PERDATIN) MASA
                BAKTI TAHUN 2022 - 2025
              </p>
              <table class="table">
                <tbody>
                  <template
                    v-for="(item, index) in pengurus_besar"
                    :key="item.id"
                  >
                    <tr v-if="!isDivisiSama(index)">
                      <td
                        class="text-h6 text-bold q-px-md"
                        colspan="2"
                        style="text-align: center"
                      >
                        {{ item.divisi_nama }}
                      </td>
                    </tr>
                    <tr>
                      <td class="text-body1 text-bold">
                        <template v-if="!isJabatanSama(index)"
                          >{{ item.jabatan_nama }} :</template
                        >
                      </td>
                      <td class="text-body1 text-bold">{{ item.nama }}</td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { api } from "boot/axios";

export default {
  name: "TentangPengurus",
  components: {},
  data() {
    return {
      loading: true,
      pengurus_besar: [],
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
        this.pengurus_besar[index].organisasi_jabatan_id ==
        this.pengurus_besar[index - 1].organisasi_jabatan_id
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
    loadData() {
      api
        .get("/web/pengurus-cabang")
        .then((response) => {
          this.pengurus_besar = response.data.pengurus_besar;

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
