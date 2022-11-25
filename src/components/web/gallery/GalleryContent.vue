<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div
    class="row justify-content-start items-start q-col-gutter-x-sm pages--contents"
  >
    <div
      v-for="(item, idx) in props.galleries"
      :key="idx"
      class="col-4 q-mb-md portfolio-item"
    >
      <div class="portfolio-img">
        <q-img :src="item.alamat" style="height: 250px; max-width: 350px">
          <template v-if="loading" v-slot:loading>
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
        style="left: 8px !important"
      >
        <button
          @click="getCarousel(item.id)"
          class="portfolio-lightbox no-shadow no-border preview-link"
          style="right: 9rem; background-color: transparent; cursor: pointer"
        >
          <q-icon name="content_copy" size="lg"></q-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  galleries: {
    type: Array,
  },
  showCarousel: {
    type: Boolean,
  },
  carousel: {
    type: Boolean,
  },
  galleri: {
    type: Object,
  },
  loading: {
    type: Boolean,
  },
});

const emit = defineEmits(["get-carousel"]);

const getCarousel = (val) => {
  emit("get-carousel", val);
};
</script>
