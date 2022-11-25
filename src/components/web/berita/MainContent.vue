<script setup>
import { ref, reactive, onMounted } from "vue";
import { date } from "quasar";
import { useContentStore } from "stores/contents.js";

const props = defineProps({
  months: {
    type: Array,
  },
});

let news = ref([]);
let config = reactive({
  loading: null,
});
let start = ref(null);

const beritaContents = useContentStore();

async function listBerita() {
  config.loading = true;
  const { data } = await beritaContents.webContents(
    `/web/berita/page?start=${start.value}`
  );
  if (data.list_data.length > 0) {
    news.value = data.list_data;
    setTimeout(() => {
      config.loading = false;
    }, 1500);
  }
}

function convertDate(val) {
  return val !== null
    ? date.formatDate(val, "DD MMMM YYYY", {
        months: props.months,
      })
    : console.log("Date is error");
}

onMounted(() => {
  listBerita();
});
</script>
<template>
  <div
    v-if="config.loading"
    class="row justify-content-start items-start q-col-gutter-x-md"
  >
    <div v-for="item in news" :key="item.id" class="col-3 column q-mb-md">
      <q-card flat style="max-width: 300px">
        <q-skeleton height="150px" square />

        <q-card-section>
          <q-skeleton type="text" class="text-subtitle1" />
          <q-skeleton type="text" width="50%" class="text-subtitle1" />
          <q-skeleton type="text" class="text-caption" />
        </q-card-section>
      </q-card>
    </div>
  </div>
  <div v-else class="row q-col-gutter-md">
    <div
      v-for="item in news"
      :key="item.id"
      class="col-12 col-sm-6 col-md-3 q-mb-lg"
    >
      <q-card flat bordered class="mycard no-margin full-height">
        <router-link class="text-decoration-none" :to="`/berita/${item.id}`">
          <q-img fit="cover" :ratio="16 / 10" :src="item.foto_url" />
        </router-link>

        <q-card-section>
          <div class="flex justify-between">
            <div class="col-6">
              <div class="text-orange-9">
                {{ convertDate(item.created_at) }}
              </div>
            </div>
            <div class="col-6 text-right" style="vertical-align: middle">
              oleh: {{ item.user_nama ? item.user_nama : "Perdatin" }}
            </div>
          </div>
          <div class="col-12">
            <router-link
              class="text-decoration-none"
              :to="`/berita/${item.id}`"
            >
              <div
                class="text-h6 q-mt-sm q-mb-xs text-weight-medium truncate2"
                style="height: 70px"
              >
                {{ item.judul }}
              </div>
            </router-link>
            <div
              class="text-subtitle2 text-grey truncate3"
              style="height: 65px"
            >
              {{ item.konten }}
            </div>
          </div>
        </q-card-section>
      </q-card>
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
.pages--header
  margin-left: 5rem
  margin-top: 2rem
  .pages__header-title
    h4
      margin-top: -.5rem

.pages--contents
  margin-left: 5rem


.truncate2
  display: -webkit-box
  -webkit-line-clamp: var(--line-clamp, 2)
  -webkit-box-orient: vertical
  word-break: var(--word-break, "none")
  overflow: hidden
  hyphens: auto
  text-align: var(--align, left)

  --is-single-line: 1 - Clamp(0, Calc(var(--line-clamp) - 1), var(--line-clamp))
  --delay: Calc(-1s * (var(--is-single-line, 1) - 1))
  animation: states 1s var(--delay) paused

  @keyframes states
    0%
      word-break: break-all
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

  @keyframes states
    0%
      word-break: break-all
</style>
