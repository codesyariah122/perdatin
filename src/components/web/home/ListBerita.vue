<template>
  <div class="q-mt-xl q-mx-xl">
    <div class="row q-col-gutter-xl">
      <div class="col-12 col-md-8">
        <h4 style="padding: 0; margin: 0" class="text-bold">Berita Perdatin</h4>
        <!-- <q-separator class="q-my-md" /> -->
        <div class="q-my-lg"></div>

        <div class="row q-col-gutter-x-md">
          <div class="col-12">
            <q-card class="my-card no-shadow">
              <q-img
                :ratio="16 / 9"
                :src="topNews.foto_url"
                no-native-menu
                style="border-radius: 8px"
              ></q-img>

              <q-card-section>
                <div class="text-h5 cursor-pointer text-bold">
                  <router-link
                    class="text-decoration-none"
                    :to="`/berita/${topNews.id}`"
                  >
                    <p class="my-text-style">{{ topNews.judul }}</p>
                  </router-link>
                </div>
                <div class="text-subtitle2">
                  Oleh Perdatin |
                  {{ getConvertDate(topNews.created_at) }}
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <q-separator class="q-my-md" />

        <div class="row q-mt-md q-col-gutter-md">
          <div
            class="col-12 col-md-6 q-mt-lg"
            v-for="item in newsBody"
            :key="item.id"
          >
            <q-card class="my-card no-shadow no-border" flat bordered>
              <div class="row q-col-gutter-lg">
                <div class="col-4">
                  <q-img
                    style="border-radius: 8px"
                    :src="item.foto_url"
                    :ratio="1"
                  />
                </div>

                <div class="col-8">
                  <div>
                    <router-link
                      class="text-decoration-none"
                      :to="`/berita/${item.id}`"
                    >
                      <p class="text-h7 text-bold my-text-style">
                        {{ item.judul }}
                      </p>
                    </router-link>
                  </div>
                  <div class="text-subtitle2">
                    Oleh Perdatin |
                    {{ getConvertDate(item.created_at) }}
                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>

        <div class="q-mt-md">
          <GalleryImage />
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="row">
          <div class="col-12">
            <h5 style="margin: 0; padding: 0" class="text-bold">Pesan Video</h5>
          </div>
          <div class="col-12">
            <PesanVideo />
          </div>
          <div class="col-12">
            <KontenInstagram />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  defineAsyncComponent,
  onMounted,
  reactive,
  ref,
} from "vue";
import { api } from "boot/axios";
import { myMixins } from "components/web/mixins/index.js";

export default defineComponent({
  name: "web-ListBerita",
  components: {
    PesanVideo: defineAsyncComponent(() =>
      import("components/web/home/PesanVideo.vue")
    ),
    GalleryImage: defineAsyncComponent(() =>
      import("components/web/home/GalleryImage.vue")
    ),
    KontenInstagram: defineAsyncComponent(() =>
      import("components/web/home/KontenInstagram.vue")
    ),
  },
  setup() {
    onMounted(() => {
      listBerita();
    });
    let news = ref([]);
    let videoLinks = ref([]);
    let topNews = ref({});
    let newsBody = ref({});
    let config = reactive({
      loading: null,
    });

    async function pesanVideo() {
      await api
        .get("web/pesan-video?start=0")
        .then(({ data }) => {
          videoLinks.value = data.list_data;
        })
        .catch((err) => console.log(err));
    }

    async function listBerita() {
      config.loading = true;
      await api
        .get("/web/home")
        .then(({ data }) => {
          news.value = data.list_berita;
          if (data.list_berita.length > 0) {
            topNews.value = news.value[0];
            newsBody.value = news.value.slice(1);
            config.loading = false;
            pesanVideo();
          }
        })
        .catch((e) => console.log(e.message));
    }
    return {
      news,
      config,
      topNews,
      newsBody,
    };
  },
  mixins: [myMixins],
});
</script>

<style lang="sass" scoped>
.wrapper__berita
  margin-top: -.5rem
  .top__news--wrapper
    .my-card
      img
        height: auto
  .news__body--wrapper
    .my-card
      width: 50vw

.wrapper__widget
  margin-top: -5.5rem
  margin-left: 2rem

.my-text-style
  color: #000
  &:hover
    color: $text-link
</style>
