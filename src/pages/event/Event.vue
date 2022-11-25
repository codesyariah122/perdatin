<template>
  <div class="q-pa-xl">
    <div class="row justify-content-start items-start">
      <div class="col-12">
        <h1 class="text-h5 text-weight-bold">Event</h1>
        <h4 class="text-h6">
          Ikuti event-event yang diselenggarakan oleh Perdatin disini
        </h4>
      </div>
    </div>
    <div
      v-if="config.loading"
      class="
        row
        justify-content-start
        items-start
        q-col-gutter-x-md
        pages--contents
      "
    >
      <div v-for="item in news" :key="item.id" class="col-4 column q-mb-md">
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
    <div v-else class="row q-col-gutter-lg">
      <div v-for="item in news" :key="item.id" class="col-12 col-sm-6 col-md-3">
        <div flat>
          <router-link class="text-decoration-none" :to="`/event/${item.id}`">
            <q-img
              fit="cover"
              :ratio="16 / 9"
              :src="item.foto_url"
              style="border-radius: 8px"
            />
          </router-link>

          <div class="q-mt-md">
            <div class="row justify-center">
              <div class="col-6">
                <div class="text-orange-9">
                  {{ getConvertDate(item.tanggal_event) }}
                </div>
              </div>
              <div class="col-6 text-right" style="vertical-align: middle">
                oleh: {{ item.penyelenggara }}
              </div>
            </div>
            <router-link class="text-decoration-none" :to="`/event/${item.id}`">
              <div
                class="
                  text-body1
                  q-mt-sm q-mb-xs
                  text-black text-weight-bold
                  truncate2
                "
                style="height: 70px"
              >
                {{ item.judul }}
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, ref } from "vue";
import { api } from "boot/axios";
import { date } from "quasar";

export default defineComponent({
  name: "EventPage",
  setup() {
    onMounted(() => {
      listEvent();
    });
    let news = ref([]);
    let config = reactive({
      loading: null,
    });
    let start = ref(null);

    async function listEvent() {
      config.loading = true;
      await api
        .get(`/web/event-non?start=${start.value}`)
        .then(({ data }) => {
          if (data.list_data.length > 0) {
            news.value = data.list_data;
            config.loading = false;
          }
        })
        .catch((e) => console.log(e.message));
    }
    return {
      news,
      config,
    };
  },

  methods: {
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
.pages--header
  margin-left: 5rem
  .pages__header-title
    h4
      margin-top: -.5rem

.pages--contents
  margin-left: 5rem

.my-card
  width: 100%

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
