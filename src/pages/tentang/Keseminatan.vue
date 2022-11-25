<template>
  <div class="container q-pa-md">
    <q-skeleton
      v-if="loading"
      width="100%"
      :height="carousel_height"
    ></q-skeleton>
    <div v-else class="row">
      <div class="col">
        <h4 class="text-center text-bold">Seminat {{ result.nama }}</h4>

        <div class="row">
          <div class="col-xs-12 col-md-6 col-lg-4 order-md-last">
            <q-img :src="result.foto_url" fit="contain"> </q-img>
          </div>
          <div
            class="col-xs-12 col-md-6 col-lg-8 q-px-lg-lg q-py-lg q-py-lg-none"
          >
            <div>
              <div
                class="text-body1 text-weight-medium"
                v-html="result.konten"
              ></div>
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

export default defineComponent({
  name: "TentangKeseminatan",
  components: {},
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
        .get("/web/keseminatan/" + this.$route.params.id)
        .then((response) => {
          this.result = response.data.keseminatan;
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
  },
});
</script>

<style scoped>
.content-desc {
  white-space: pre-wrap;
  font-weight: 500;
  line-height: 31px;
}
</style>
