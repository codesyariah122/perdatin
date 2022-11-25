<template>
  <div class="q-mt-xl portfolio">
    <div class="row justify-start">
      <div class="col-12" style="width: 100%">
        <h4 style="padding: 0; margin: 0" class="text-bold">Galeri Perdatin</h4>
        <div class="q-my-lg"></div>
      </div>
    </div>
    <div class="row q-col-gutter-md portfolio-container">
      <div
        v-for="(item, idx) in galleries"
        :key="idx"
        class="col-4 q-mb-md portfolio-item"
      >
        <q-responsive :ratio="1">
          <div class="portfolio-img">
            <q-img
              fit="cover"
              :src="item.alamat"
              style="border-radius: 8px"
              :ratio="1"
            >
              <template v-if="config.loading" v-slot:loading>
                <div class="text-primary">
                  <q-spinner-ios />
                  <div class="q-mt-md">Loading...</div>
                </div>
              </template>
            </q-img>
          </div>

          <div
            v-if="item.list_image.length > 0"
            class="portfolio-info"
            style="left: 1px"
          >
            <button
              @click="getCarouselContents(item.id)"
              class="cursor-pointer portfolio-lightbox no-shadow no-border preview-link"
              style="
                right: 6.5rem;
                background-color: transparent;
                cursor: pointer;
              "
            >
              <q-icon name="content_copy" size="lg"></q-icon>
            </button>
          </div>
        </q-responsive>
      </div>
      <div v-if="config.showCarousel" class="col-12 q-pa-md">
        <q-dialog v-model="carousel">
          <q-carousel animated v-model="slide" arrows navigation infinite>
            <q-carousel-slide
              v-for="(image, idx) in galeri"
              :key="idx"
              :name="1"
              :img-src="image"
            ></q-carousel-slide>
          </q-carousel>
        </q-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, ref } from "vue";
import { api } from "boot/axios";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "web-GalleryImage",
  setup() {
    onMounted(() => {
      listGaleri();
      console.log(config.carousel);
    });
    const $q = useQuasar();
    let galleries = ref([]);
    let config = reactive({
      loading: null,
      showCarouse: null,
    });
    let carousel = ref(false);
    let sliders = ref(false);
    let loading = config.loading;
    let slide = ref(1);
    let galeri = ref({});

    async function listGaleri() {
      config.loading = true;
      await api
        .get("/web/galeri")
        .then(({ data }) => {
          if (data.list_data.length > 0) {
            galleries.value = data.list_data;
            config.loading = false;
          }
        })
        .catch((e) => console.log(e.message));
    }

    function getCarouselContents(id) {
      $q.loading.show();
      carousel.value = true;
      if (carousel.value) {
        setTimeout(() => {
          $q.loading.hide();
          const listings = galleries.value.map((d) => d);
          galeri.value = listings.filter((d) => d.id === id)[0].list_image;
          console.log(galeri.value.length);
          if (galeri.value.length > 0) {
            config.showCarousel = true;
          } else {
            config.showCarousel = false;
            dialogError();
          }
        }, 2000);
      }
    }

    function dialogError() {
      $q.dialog({
        title: "<center>Oopps<em>!</em></center>",
        message: `<center><em>Maaf</em> Foto <span class="text-red">Belum</span> <strong>Tersedia</strong> <br/> <img src="/src/assets/icons/failed.svg" style="width: 164px;" /></center>`,
        html: true,
      })
        .onOk(() => {
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    return {
      galleries,
      config,
      loading,
      getCarouselContents,
      carousel,
      sliders,
      slide,
      galeri,
    };
  },
});
</script>

<style lang="sass" scoped>
.q-carousel
  width: 100%
  height: 100%

.portfolio-info
  left: 0!important
  border-radius: 8px
</style>
