<template>
  <div class="q-mt-lg">
    <q-skeleton
      v-if="loading"
      width="100%"
      :height="carousel_height"
    ></q-skeleton>
    <div v-else class="row">
      <div class="col">
        <v-template v-for="item in result" :key="item.id">
          <div class="row">
            <div class="col-12">
              <p class="text-subtitle1 text-weight-medium">
                {{ item.deskripsi }}
              </p>
              <q-video
                style="border-radius: 16px"
                :ratio="16 / 9"
                :src="item.alamat"
              />
              <div
                class="text-body text-weight-normal q-mt-md"
                style="color: #898872"
              >
                {{ getConvertDate(item.created_at) }}
              </div>
            </div>
          </div>
          <q-separator class="q-my-md" />
        </v-template>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "boot/axios";
import { date } from "quasar";

export default defineComponent({
  name: "PesanVideoComponent",
  components: {},
  data() {
    return {
      loading: true,
      result: [],
    };
  },
  created() {
    this.carousel_height = "400px";
  },
  mounted() {
    this.loadData();
  },

  methods: {
    loadData() {
      api
        .get("/web/pesan-video")
        .then((response) => {
          this.result = response.data.list_data;
          console.log("pesan video");

          if (this.result) {
            console.log(this.result);
            console.log(this.result.length);

            if (this.result.length > 2) {
              this.result.splice(2);
            }
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
    getConvertDate(waktu) {
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
      } else {
        return "";
      }
    },
  },
});
</script>

<style lang="sass" scoped>
.content-desc
  white-space: pre-wrap
  font-weight: 500
  line-height: 31px

.my-card
  width: 100%
  max-width: 250px
  background-color: #3788b9
</style>
