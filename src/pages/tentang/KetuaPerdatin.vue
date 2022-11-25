<template>
  <div class="q-pa-md">
    <q-skeleton
      v-if="loading"
      width="100%"
      :height="carousel_height"
    ></q-skeleton>
    <div v-else class="row">
      <div class="col">
        <h4 class="text-center text-bold q-mb-xl">
          Ketua Perdatin Dari Masa Ke Masa
        </h4>
        <div class="row">
          <div v-for="item in list_data" :key="item.id" class="col-12 col-md-6">
            <div class="row q-mt-xl q-mx-xl">
              <div class="col-xs-12 col-lg-5">
                <q-img :src="item.foto_url" fit="contain"> </q-img>
              </div>
              <div class="col-xs-12 col-lg-7 q-pl-md-xl">
                <p class="content-desc text-bold ketua-text-align">
                  {{ item.nama }}
                </p>
                <p class="text-subtitle1 text-weight-medium">
                  Periode :
                  {{ getPeriodeDate(item.periode_dari) }}
                  -
                  {{ getPeriodeDate(item.periode_ke) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "boot/axios";
import { date } from "quasar";

export default defineComponent({
  name: "TentangKetuaPerdatin",
  components: {},
  data() {
    return {
      loading: true,
      list_data: [],
    };
  },
  created() {
    this.carousel_height = window.innerHeight - 120 + "px";
  },
  mounted() {
    this.loadData();
  },

  methods: {
    getPeriodeDate(waktu) {
      if (waktu) {
        return date.formatDate(waktu, "DD MMMM YYYY", {
          months: [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
          ],
        });
      }
      return "Sampai Sekarang";
    },
    loadData() {
      api
        .get(`/web/kapusdokkes?start=${this.list_data.length}`)
        .then((response) => {
          if (response.data.list_data) {
            this.list_data = response.data.list_data;
            console.log(this.list_data);
          }

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
});
</script>

<style scoped>
.content-desc {
  white-space: pre-wrap;
  line-height: 31px;
  font-size: 24px;
}
</style>
