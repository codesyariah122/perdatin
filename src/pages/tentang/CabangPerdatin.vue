<template>
  <div class="container q-pa-md">
    <q-skeleton
      v-if="loading"
      width="100%"
      :height="carousel_height"
    ></q-skeleton>
    <div v-else class="row">
      <div class="col">
        <h4 class="text-center text-bold">Cabang Perdatin</h4>

        <div class="q-pa-md row justify-center items-start q-gutter-md">
          <q-card v-for="item in result" :key="item.id" class="my-card">
            <q-img :src="item.foto_url" :ratio="16 / 9" fit="cover">
              <template v-slot:error>
                <div class="absolute-bottom text-h6 text-center">
                  {{ item.nama }}
                </div>
              </template>
              <div class="absolute-bottom text-h6 text-center">
                {{ item.nama }}
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "boot/axios";

export default defineComponent({
  name: "TentangCabangPerdatin",
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
        .get("/web/cabang-perdatin")
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
