<template>
  <div class="q-pa-md portfolio">
    <div class="row justify-content-start items-start pages--header">
      <div class="col-12 pages__header-title">
        <h1 class="text-h5 text-weight-bold">Galeri Perdatin</h1>
        <h4 class="text-h6">Galeri dan Dokumentasi Perdatin</h4>
      </div>
    </div>

    <div
      v-if="config.loading"
      class="row justify-content-start items-start q-col-gutter-x-md"
    >
      <div
        v-for="item in galleries"
        :key="item.id"
        class="col-4 column q-mb-lg"
      >
        <q-skeleton width="350px" height="200px" />
      </div>
    </div>

    <GalleryContent
      v-else
      :galleries="galleries"
      @get-carousel="getCarouselContents"
    />
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
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { useContentStore } from "src/stores/contents";
import { useQuasar } from "quasar";
import GalleryContent from "components/web/gallery/GalleryContent.vue";

components: {
  GalleryContent;
}

const galleries = ref([]);
const config = reactive({
  loading: null,
  showCarousel: null,
});
const galeri = ref({});
const $q = useQuasar();
const carousel = ref(false);
const slide = ref(null);
const galleryContents = useContentStore();

async function listGaleri() {
  config.loading = true;
  const { data } = await galleryContents.webContents("/web/galeri");
  if (data.list_data.length > 0) {
    galleries.value = data.list_data;
    setTimeout(() => {
      config.loading = false;
    }, 1500);
  }
}

async function getCarouselContents(id) {
  $q.loading.show();
  carousel.value = true;
  if (carousel.value) {
    setTimeout(() => {
      $q.loading.hide();
      const listings = galleries.value.map((d) => d);
      galeri.value = listings.filter((d) => d.id === id)[0].list_image;
      if (galeri.value.length > 0) {
        config.showCarousel = true;
        slide.value = galeri.value.length;
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

onMounted(() => {
  listGaleri();
});
</script>

<style lang="sass" scoped>
.pages--header
  margin-left: 5rem
  margin-top: 2rem
  .pages__header-title
    h4
      margin-top: -.5rem

.pages--contents
  margin-left: 5rem

.q-carousel
  width: 600px!important
  height: 800px!important

.q-carousel
  width: 100%
  height: 100%
</style>
