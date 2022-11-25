<template>
  <div class="q-pa-md">
    <div class="row justify-content-start items-start pages--header">
      <div class="col-12 pages__header-title">
        <h1 class="text-h5 text-weight-bold">Event</h1>
        <h4 class="text-h6">Event Perdatin</h4>
      </div>
      <div class="col-12 pages__header-filter">
        <div class="row justify-content-center items-center q-gutter-lg">
          <div class="col-1">
            <h5>Filter</h5>
          </div>
          <div class="col-3">
            <q-select v-model="model" :options="options" label="Standard" />
          </div>
          <div class="col-3">
            <q-select v-model="model" :options="options" label="Standard" />
          </div>
          <div class="col-4">Menampilkan {{ items }} pelatihan</div>
        </div>
      </div>
    </div>
    <div class="row justify-content-start items-start pages--contents q-gutter">
      <div v-for="i in items" :key="i" class="col-4">
        <q-card class="my-card" style="max-width: 21rem">
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%)"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Cafe Basilico</div>
              <div
                class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
              >
                <q-icon name="place" />
                250 ft
              </div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">$・Italian, Cafe</div>
            <div class="text-caption text-grey">
              Small plates, salads & sandwiches in an intimate setting.
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat color="primary"> Reserve </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, ref } from "vue";
import { api } from "boot/axios";
import { useQuasar } from "quasar";

export default defineComponent({
  setup() {
    const stars = ref(4);
    const $q = useQuasar();
    const eventLists = ref([]);
    const model = ref(null);
    const items = ref(3);
    const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
    onMounted(() => {
      getListEvents();
    });

    async function getListEvents() {
      await api
        .get(
          "/web/event/page?keyword=&start=20&jenis_pelatihan=&bulan_pelatihan="
        )
        .then(({ data }) => {
          console.log(data.list_kegiatan_terdekat.length);
          if (data.list_kegiatan_terdekat.length > 0) {
            eventLists.value = data.list_kegiatan_terdekat;
          }
        })
        .catch((err) => console.log(err));
    }

    return {
      eventLists,
      stars,
      items,
      model,
      options,
    };
  },
});
</script>

<style lang="sass" scoped>
.pages--header
  margin-top: 2rem
  margin-left: 5rem
  .pages__header-title
    h4
      margin-top: -.5rem
  .pages__header-filter
    margin-bottom: 3rem

.pages--contents
  margin-left: 5rem
</style>
