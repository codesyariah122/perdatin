<template>
  <div class="">
    <q-skeleton
      v-if="loading"
      width="100%"
      :height="carousel_height"
    ></q-skeleton>
    <div
      v-else
      class="row justify-start items-start q-col-gutter-md q-gutter-y-md"
    >
      <div class="col-12" v-for="item in result" :key="item.id">
        <q-card class="my-card no-shadow no-border" flat bordered>
          <div class="row q-col-gutter-lg">
            <div class="col-4">
              <router-link
                class="text-decoration-none"
                :to="`/event/${item.id}`"
              >
                <q-img
                  style="border-radius: 8px"
                  :src="item.foto_url"
                  :ratio="1"
                />
              </router-link>
            </div>

            <div class="col-8">
              <div>
                <router-link
                  class="text-decoration-none"
                  :to="`/event/${item.id}`"
                >
                  <div class="text-body1 text-bold my-text-style">
                    {{ item.judul }}
                  </div>
                </router-link>
              </div>
              <div class="text-subtitle2 q-mt-sm">
                <router-link
                  class="text-decoration-none my-text-style"
                  :to="`/event/${item.id}`"
                >
                  Oleh Perdatin |
                  {{ getConvertDate(item.created_at) }}
                </router-link>
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "boot/axios";
import { date } from "quasar";

export default defineComponent({
  name: "EventLainnya",
  components: {},

  data() {
    return {
      loading: true,
      result: [],
    };
  },

  created() {
    this.carousel_height = window.innerHeight - 120 + "px";
  },

  mounted() {
    this.loadData();
  },

  methods: {
    loadData() {
      api
        .get("/web/event-non/lainnya/" + this.$route.params.id)
        .then((response) => {
          this.result = response.data.list_data;
          console.log(this.result);

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

<style lang="css" scoped>
.image {
  width: 80%;
  height: auto;
  background-size: cover;
  cursor: pointer;
  margin: 5px;
  border-radius: 3px;
  border: 1px solid lightgray;
  object-fit: contain;
}

.my-text-style {
  color: #000;
}
</style>
