<template>
  <div class="">
    <q-skeleton
      v-if="loading"
      width="100%"
      :height="carousel_height"
    ></q-skeleton>
    <q-carousel
      :height="carousel_height"
      animated
      navigation
      v-model="slide"
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        v-for="item in list_slider"
        :key="item.id"
        :name="item.id"
        :img-src="item.foto_url"
        fit="fill"
      />
    </q-carousel>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { api } from "boot/axios";
import { useQuasar } from "quasar";

export default {
  name: "CarouselHeader",
  setup() {
    return {
      q: useQuasar(),
    };
  },

  data() {
    return {
      slide: ref(1),
      autoplay: ref(true),
      list_slider: [],
      loading: null,
    };
  },
  created() {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    // this.carousel_height = window.innerHeight - 100 + "px";

    console.log(this.q.screen.gt.sm);
    if (this.q.screen.gt.sm) {
      this.carousel_height = (window.innerWidth * 6.5) / 16 + "px";
    } else {
      this.carousel_height = (window.innerWidth * 9) / 16 + "px";
    }

    this.paralax_height = (window.innerWidth * 9) / 16;
  },
  mounted() {
    this.imageSlider();
  },

  methods: {
    async imageSlider() {
      this.loading = true;
      await api
        .get("/web/slider")
        .then(({ data }) => {
          if (data.list_data.length > 0) {
            this.list_slider = data.list_data;
            this.loading = false;
          }
        })
        .catch((e) => {
          console.error(e.message);
          this.triggerNotification("negative", e.message);
        });
    },

    triggerNotification(type, msg) {
      this.q.notify({
        type: type,
        message: msg,
      });
    },
  },
};
</script>
