<template>
  <div class="container q-pa-md">
    <q-skeleton
      v-if="loading"
      width="100%"
      :height="carousel_height"
    ></q-skeleton>
    <div v-else class="row">
      <div class="col">
        <h4 class="text-center text-bold">Sejarah Perdatin</h4>
        <div>
          <p class="text-body1 content-desc">{{ result.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "boot/axios";

export default defineComponent({
  name: "TentangSejarah",
  components: {},
  data() {
    return {
      loading: true,
      result: {},
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
        .get("/web/sejarah")
        .then((response) => {
          this.result = response.data.result;
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
