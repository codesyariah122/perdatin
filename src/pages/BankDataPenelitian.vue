<template>
  <div class="q-pa-xl">
    <q-skeleton
      v-if="loading"
      width="100%"
      :height="carousel_height"
    ></q-skeleton>
    <div v-else class="row q-px-md-xl">
      <div class="col">
        <h4 class="text-center text-bold">
          BANK DATA KARYA TULIS ILMIAH PERDATIN
        </h4>

        <q-table
          ref="tableRef"
          title="Bank Data Penelitian"
          :dense="$q.screen.lt.md"
          :rows="rows"
          :columns="columns"
          row-key="name"
          v-model:pagination="pagination"
          :loading="loading"
          :filter="filter"
          binary-state-sort
          @request="onRequest"
          :wrap-cells="true"
          table-header-style="font-size: 20px;"
        >
          <template v-slot:top-right>
            <q-input
              outlined
              dense
              debounce="300"
              v-model="filter"
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn
                dense
                round
                flat
                color="grey"
                @click="openWebsite(props)"
                icon="link"
              ></q-btn>
            </q-td>
          </template>
        </q-table>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "boot/axios";
import { ref, onMounted } from "vue";

const columns = [
  {
    name: "no",
    required: true,
    label: "No",
    align: "left",
    field: (row) => row.no,
    format: (val) => `${val}`,
    sortable: false,
    style: "font-size:15px; font-weight:500;",
    headerStyle: "font-size:16px;font-weight:bold;",
    classes: "scroll",
    headerClasses: "scroll",
  },
  {
    name: "judul",
    required: true,
    label: "Judul",
    align: "left",
    field: (row) => row.judul,
    format: (val) => `${val}`,
    sortable: false,
    style: "width: 800px;font-size:15px; font-weight:500;",
    headerStyle: "width: 500px;font-size:16px;font-weight:bold;",
    classes: "scroll",
    headerClasses: "scroll",
  },
  {
    name: "author",
    align: "center",
    label: "Author",
    field: "author",
    field: (row) => row.author,
    format: (val) => `${val}`,
    sortable: false,
    style: "width: 500px;font-size:15px; font-weight:500;",
    headerStyle: "width: 500px;font-size:16px;font-weight:bold;",
  },
  {
    name: "actions",
    label: "Actions",
    field: "",
    align: "center",
    style: "width: 500px;font-size:15px; font-weight:500;",
    headerStyle: "width: 500px;font-size:16px;font-weight:bold;",
  },
];

export default defineComponent({
  name: "TentangBankDataPenelitian",
  components: {},
  setup() {
    const tableRef = ref();
    const rows = ref([]);
    const filter = ref("");
    const loading = ref(false);
    const pagination = ref({
      sortBy: "desc",
      descending: false,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 10,
    });

    function onRequest(props) {
      const { page, rowsPerPage, sortBy, descending } = props.pagination;
      const filter = props.filter;

      loading.value = true;

      api
        .get(
          "/web/bank-data-penelitian/list?page=" +
            page +
            "&item_per_page=" +
            rowsPerPage +
            "&keyword=" +
            filter
        )
        .then((res) => {
          // update rowsCount with appropriate value
          pagination.value.rowsNumber = res.data.total;

          // clear out existing data and add new
          rows.value.splice(0, rows.value.length, ...res.data.list_data);

          // don't forget to update local pagination object
          pagination.value.page = page;
          pagination.value.rowsPerPage = rowsPerPage;
          pagination.value.sortBy = sortBy;
          pagination.value.descending = descending;

          // ...and turn of loading indicator
          loading.value = false;
        })
        .catch(() => {
          console.log("error");
        })
        .finally(() => {});
    }

    onMounted(() => {
      // get initial data from server (1st page)
      tableRef.value.requestServerInteraction();
    });

    return {
      tableRef,
      filter,
      loading,
      pagination,
      columns,
      rows,

      onRequest,
    };
  },
  data() {
    return {
      result: [],
    };
  },
  created() {
    this.carousel_height = window.innerHeight - 120 + "px";
  },
  mounted() {
    this.loadData();
  },

  methods: {
    openWebsite(props) {
      console.log(props.row.link_website);
      window.open(props.row.link_website, "_blank");
    },
    loadData() {
      // api
      //   .get("/web/cabang-perdatin")
      //   .then((response) => {
      //     this.result = response.data.list_data;
      //     console.log(this.result);
      //     this.loading = false;
      //   })
      //   .catch(() => {
      //     console.log("error");
      //   })
      //   .finally(() => {});
    },
  },
});
</script>

<style lang="sass" scoped>
.content-desc
  white-space: pre-wrap
  font-weight: 500
  line-height: 31px

.my-card
  width: 100%
  max-width: 250px
  background-color: #3788b9

.scroll
  overflow: hidden

tr:nth-child(odd)
  background-color: #f2f2f2 !important
</style>
