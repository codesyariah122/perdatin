<script setup>
import { useContentStore } from "stores/contents.js";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { date } from "quasar";

const props = defineProps({
  months: {
    type: Array,
  },
});
const news = ref([]);
const images = ref([]);
const route = useRoute();
const id = route.params.id;
const beritaContents = useContentStore();

async function detailBerita() {
  const { data } = await beritaContents.webContents(`/web/berita/${id}`);
  if (data.berita) news.value = data.berita;
  if (data.list_image) images.value = data.list_image;
}

function convertDate(val) {
  return val !== null
    ? date.formatDate(val, "DD MMMM YYYY", {
        months: props.months,
      })
    : console.log("Date is error");
}

onMounted(() => {
  detailBerita();
});
</script>

<template>
  <div class="row justify-start items-start">
    <div class="col-12">
      <h1 class="text-weight-medium text-h4 text-capitalize">
        {{ news.judul }}
      </h1>
      <span class="text-weight-medium"
        >Oleh Perdatin | <time>{{ convertDate(news.created_at) }}</time></span
      >
    </div>
    <div class="col-12 q-mt-lg items-center">
      <q-img :src="news.foto_url" spinner-color="primary" class="image"></q-img>
    </div>
    <div class="col-12 q-mt-lg">
      <div class="content-news" v-html="news.html"></div>
    </div>

    <div class="col-12 q-mt-md q-mb-lg">
      <hr class="text-grey" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.image {
  width: 80%;
  height: auto;
  background-size: cover;
  cursor: pointer;
  margin: 5px;
  border-radius: 3px;
  border: 1px solid lightgray;
  object-fit: contain;
}

.content-news {
  width: 100%;
}
.content-news :deep(img) {
  width: 100%;
  border-radius: 5px;
}
.content-news :deep(p) {
  font-size: 18px;
  line-height: 31px;
  word-spacing: 3px;
  text-align: left;
}
@media (min-width: 992px) {
  .image {
    width: 100%;
    height: auto;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid lightgray;
    object-fit: contain;
  }
  .content-news {
    width: 100%;
  }

  .content-news :deep(img) {
    width: 90%;
    margin-left: 3rem;
    border-radius: 12px;
  }

  .content-news :deep(p) {
    font-size: 18px;
    line-height: 35px;
    word-spacing: 2px;
    text-align: left;
  }
}
</style>
