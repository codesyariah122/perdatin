<template>
  <div class="q-pa-xl">
    <div class="row justify-content-start items-start">
      <div class="col-12">
        <h1 class="text-h5 text-weight-bold">Berita</h1>
        <h4 class="text-h6">Ikuti Kegiatan Dan Berita Seputar Perdatin</h4>
      </div>
    </div>
    <MainContentBerita :months="months" />
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";
import { myMixins } from "components/web/mixins/index.js";

export default defineComponent({
  name: "BeritaPage",
  components: {
    MainContentBerita: defineAsyncComponent(() =>
      import("components/web/berita/MainContent.vue")
    ),
  },
  mixins: [myMixins],
});
</script>
