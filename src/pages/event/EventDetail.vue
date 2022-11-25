<template>
  <div class="q-pa-md">
    <q-skeleton
      v-if="loading"
      width="100%"
      :height="carousel_height"
    ></q-skeleton>
    <div
      v-else
      class="row justify-start items-start q-col-gutter-xl q-px-lg-xl"
    >
      <div class="col-12 col-md-8">
        <div class="col-12">
          <div class="text-weight-medium text-h4 text-capitalize q-mt-md">
            {{ result.judul }}
          </div>
          <div class="text-weight-medium q-mt-md">
            Oleh Perdatin | {{ getConvertDate(result.created_at) }}
          </div>
        </div>
        <div class="col-12 q-mt-lg items-center">
          <q-img
            :src="result.foto_url"
            spinner-color="primary"
            class="image"
          ></q-img>
        </div>
        <div class="col-12 q-mt-lg">
          <div class="content-event" v-html="result.konten"></div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="row">
          <div
            class="col-12 text-weight-medium text-h5 text-capitalize q-mt-md"
          >
            Event Lainnya
          </div>
          <div class="col-12">
            <EventLainnya />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent, onMounted, ref } from "vue";
import { api } from "boot/axios";
import { date } from "quasar";

export default defineComponent({
  name: "EventDetail",
  components: {
    EventLainnya: defineAsyncComponent(() =>
      import("components/web/event/EventLainnya.vue")
    ),
  },

  data() {
    return {
      loading: true,
      result: {},
    };
  },

  created() {
    this.carousel_height = window.innerHeight - 120 + "px";
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        // react to route changes...
        this.loadData();
      }
    );
  },

  mounted() {
    this.loadData();
  },

  methods: {
    loadData() {
      api
        .get("/web/event-non/" + this.$route.params.id)
        .then((response) => {
          this.result = response.data.event;
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

<style lang="sass" scoped>
.ql-align-center
  text-align: center

.image
  width: 80%
  height: auto
  background-size: cover
  cursor: pointer
  margin: 5px
  border-radius: 3px
  border: 1px solid lightgray
  object-fit: contain
</style>
