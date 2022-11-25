<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import { date, useQuasar } from "quasar";
import { useContentStore } from "stores/contents.js";

const props = defineProps({
  months: {
    type: Array,
  },
});
const route = useRoute();
const $q = useQuasar();
const id = route.params.id;
const nexts = ref([]);
const config = reactive({
  loadingNext: null,
});
const beritaContents = useContentStore();

async function beritaLainnya() {
  config.loadingNext = true;
  const { data } = await beritaContents.webContents(
    `/web/berita/lainnya/${id}`
  );
  if (data.list_data.length > 0) {
    nexts.value = data.list_data;
    setTimeout(() => {
      config.loadingNext = false;
    }, 2000);
  }
}

function convertDate(val) {
  return val
    ? date.formatDate(val, "DD MMMM YYYY", {
        months: props.months,
      })
    : console.error("Date is error");
}

onMounted(() => {
  beritaLainnya();
});
</script>

<template>
  <div
    :style="`${$q.platform.is.desktop ? 'margin-left: -0.3rem' : ''}`"
    class="row justify-start items-start"
  >
    <div
      :style="`${$q.platform.is.desktop ? 'margin-left: -2rem' : ''}`"
      class="col-3"
    >
      <h4 class="papper__fold">Berita Lainnya</h4>
    </div>
    <div class="col-12 q-mt-lg">
      <div
        v-if="config.loadingNext"
        class="row items-start justify-start q-gutter"
      >
        <div v-for="i in nexts.length" :key="i" class="col-4">
          <div class="q-pa-md">
            <q-card class="mycard no-margin full-height">
              <q-card>
                <q-card-section>
                  <q-card-label>
                    <q-skeleton type="text" />
                  </q-card-label>
                  <q-card-label caption>
                    <q-skeleton type="text" />
                  </q-card-label>
                </q-card-section>
              </q-card>
            </q-card>
          </div>
        </div>
      </div>

      <div v-else class="row nexts-start justify-start q-col-gutter-md">
        <div v-for="next in nexts" :key="next.id" class="col-4">
          <q-card flat bordered class="mycard no-margin full-height">
            <router-link
              class="text-decoration-none"
              :to="`/berita/${next.id}`"
            >
              <q-img fit="cover" :ratio="16 / 10" :src="next.foto_url" />
            </router-link>
            <q-card-section>
              <div class="flex justify-between">
                <div class="col-6">
                  <div class="text-orange-9">
                    {{ convertDate(next.created_at) }}
                  </div>
                </div>
                <div class="col-6">
                  oleh: {{ next.user_nama ? next.user_nama : "Perdatin" }}
                </div>
                <div class="col-12">
                  <router-link
                    class="text-decoration-none"
                    :to="`/berita/${next.id}`"
                  >
                    <div
                      class="text-h6 q-mt-sm q-mb-xs text-weight-medium truncate2"
                      style="height: 70px"
                    >
                      {{ next.judul }}
                    </div>
                  </router-link>
                  <div class="text-subtitle2 text-grey truncate3">
                    {{ next.konten }}
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.mycard
  width: 100%
  a
    color: #000
    &:hover
      color: $text-link
  img
    max-width: 100%
  .truncate3
    display: -webkit-box
    -webkit-line-clamp: var(--line-clamp, 3)
    -webkit-box-orient: vertical
    word-break: var(--word-break, "none")
    overflow: hidden
    hyphens: auto
    text-align: var(--align, left)

    --is-single-line: 1 - Clamp(0, Calc(var(--line-clamp) - 1), var(--line-clamp))
    --delay: Calc(-1s * (var(--is-single-line, 1) - 1))
    animation: states 1s var(--delay) paused
</style>
