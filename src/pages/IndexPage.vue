<template>
  <div class="row justify-center">
    <div style="max-width: 1240px">
      <CarouselHeader />
      <LayananHome />
    </div>
    <ListBerita />
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";
export default defineComponent({
  name: "IndexPage",
  components: {
    CarouselHeader: defineAsyncComponent(() =>
      import("components/web/home/CarouselHeader.vue")
    ),
    ListBerita: defineAsyncComponent(() =>
      import("components/web/home/ListBerita.vue")
    ),
    LayananHome: defineAsyncComponent(() =>
      import("components/web/home/LayananHome.vue")
    ),
  },
});
</script>
