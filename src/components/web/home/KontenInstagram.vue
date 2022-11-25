<template>
  <div>
    <q-skeleton v-if="loading" width="100%" height="200px"></q-skeleton>
    <div v-else class="row">
      <div class="col-12 q-mt-lg">
        <h5 style="margin: 0; padding: 0" class="text-bold">
          Perdatin Instagram
        </h5>
      </div>
      <div class="col-12 q-mt-lg">
        <q-img :src="result.foto_url" no-native-menu>
          <!-- <div class="absolute-bottom text-subtitle1 text-center">
                Follow On Instagram
              </div> -->
        </q-img>
      </div>

      <div class="col-12 q-mt-md">
        <q-btn
          class="glossy full-width"
          color="teal"
          label="Follow On Instagram"
          @click="onInstagram"
          icon="account_circle"
          align="between"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "boot/axios";

export default defineComponent({
  name: "KontenInstagram",
  components: {},
  data() {
    return {
      loading: true,
      result: {},
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
        .get("/web/instagram")
        .then((response) => {
          this.result = response.data.result;

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
    onInstagram() {
      window.open(this.result.link_instagram, "_blank");
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
