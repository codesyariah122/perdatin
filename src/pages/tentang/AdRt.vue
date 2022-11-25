<template>
  <div class="container q-pa-md">
    <q-skeleton
      v-if="loading"
      width="100%"
      :height="carousel_height"
    ></q-skeleton>
    <div v-else class="row">
      <div class="col">
        <h4 class="text-center text-bold">AD & RT</h4>
        <div class="row justify-center main-pdf">
          <div class="col">
            <div class="app-header">
              <span>
                <button :disabled="page <= 1" @click="page--">❮</button>

                {{ page }} / {{ pageCount }}

                <button :disabled="page >= pageCount" @click="page++">❯</button>
              </span>
            </div>

            <div class="app-content">
              <vue-pdf-embed
                ref="pdfRef"
                :page="page"
                :source="result.file_pdf"
                @rendered="handleDocumentRender"
              />
            </div>

            <div class="app-header">
              <span>
                <button :disabled="page <= 1" @click="page--">❮</button>

                {{ page }} / {{ pageCount }}

                <button :disabled="page >= pageCount" @click="page++">❯</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";
import { api } from "boot/axios";

export default defineComponent({
  name: "TentangAdRt",
  components: {
    VuePdfEmbed: defineAsyncComponent(() => import("vue-pdf-embed")),
  },
  data() {
    return {
      loading: true,
      result: {},
      visible: true,
      isLoading: true,
      page: 1,
      pageCount: 1,
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
        .get("/web/adrt")
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
    handleDocumentRender() {
      this.isLoading = false;
      this.pageCount = this.$refs.pdfRef.pageCount;
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
.main-pdf {
  margin: 0;
  padding: 0;
  background-color: #ccc;
}

.app-header {
  padding: 16px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
  background-color: #555;
  color: #ddd;
}
.vue-pdf-embed > div {
  margin-bottom: 8px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
}

.app-content {
  padding: 24px 16px;
}
</style>
