<template>
  <div class="q-pa-lg">
    <BeritaContent :months="months" />
    <BeritaLainnya :months="months" />
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";
import { myMixins } from "src/components/web/mixins/index.js";
export default defineComponent({
  name: "BeritaDetail",
  components: {
    BeritaContent: defineAsyncComponent(() =>
      import("components/web/berita/DetailContent.vue")
    ),
    BeritaLainnya: defineAsyncComponent(() =>
      import("components/web/berita/BeritaLainnya.vue")
    ),
  },
  mixins: [myMixins],
});
</script>
