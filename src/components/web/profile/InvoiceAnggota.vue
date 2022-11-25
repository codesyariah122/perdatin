<template>
  <div class="">
    <q-skeleton
      v-if="loading"
      width="100%"
      :height="carousel_height"
    ></q-skeleton>
    <div v-else class="row">
      <div class="col">
        <q-table
          ref="tableRef"
          title="Invoice"
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
              placeholder="Cari No Invoice"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
          <template v-slot:body-cell-status="props">
            <q-td :props="props">
              <q-badge
                class="q-pa-sm text-bold"
                :color="getInvoiceColor(props.row.status)"
              >
                {{ getInvoiceStatus(props.row.status) }}
              </q-badge>
            </q-td>
          </template>
          <template v-slot:body-cell-foto_url="props">
            <q-td :props="props">
              <q-img
                :src="props.row.foto_url"
                fit="cover"
                style="height: 100px"
                width="100px"
              />
            </q-td>
          </template>
          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn
                v-if="props.row.status == 1"
                dense
                round
                flat
                color="grey"
                @click="showUploadPembayaran(props.row.id)"
                icon="more_vert"
              ></q-btn>
            </q-td>
          </template>
        </q-table>

        <q-dialog v-model="prompt" persistent>
          <q-card style="min-width: 350px">
            <q-card-section>
              <div class="text-h6">Upload bukti pembayaran</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-file autofocus outlined v-model="bukti_pembayaran">
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
              <q-btn flat label="Cancel" v-close-popup />
              <q-btn flat label="Kirim" @click="uploadBuktiPembayaran()" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { api } from "boot/axios";
import { useAuthStore } from "stores/auth.store";
import { useQuasar } from "quasar";
import { Notify } from "quasar";

function getKategori(id) {
  console.log("kategori");
  console.log(id);
  if (id == 1) {
    return "Pembayaran Iuran pendaftaran Anggota";
  } else if (id == 2) {
    return "Pembayaran Tasbol";
  } else if (id == 3) {
    return "Pembayaran perpanjangan Iuran Anggota";
  }
}

function getStatus(id) {
  if (id == 1) {
    return "Menunggu Pembayaran Anggota";
  } else if (id == 2) {
    return "Menunggu Konfirmasi Pembayaran Iuran";
  } else if (id == 3) {
    return "Terverifikasi";
  }
}

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
    name: "invoice_no",
    required: true,
    label: "No Invoice",
    align: "left",
    field: (row) => row.invoice_no,
    format: (val) => `${val}`,
    sortable: false,
    style: "width: 800px;font-size:15px; font-weight:500;",
    headerStyle: "width: 500px;font-size:16px;font-weight:bold;",
    classes: "scroll",
    headerClasses: "scroll",
  },
  {
    name: "tahun",
    align: "center",
    label: "Tahun",
    field: "tahun",
    field: (row) => row.tahun,
    format: (val) => `${val}`,
    sortable: false,
    style: "width: 500px;font-size:15px; font-weight:500;",
    headerStyle: "width: 500px;font-size:16px;font-weight:bold;",
  },
  {
    name: "nominal",
    align: "center",
    label: "Nominal",
    field: "nominal",
    field: (row) => row.nominal,
    format: (val) => `Rp. ${new Intl.NumberFormat("id-ID").format(val)}`,
    sortable: false,
    style: "width: 500px;font-size:15px; font-weight:500;",
    headerStyle: "width: 500px;font-size:16px;font-weight:bold;",
  },
  {
    name: "no_va",
    align: "center",
    label: "No VA",
    field: "no_va",
    field: (row) => row.no_va,
    format: (val) => `${val}`,
    sortable: false,
    style: "width: 500px;font-size:15px; font-weight:500;",
    headerStyle: "width: 500px;font-size:16px;font-weight:bold;",
  },
  {
    name: "kategori",
    align: "center",
    label: "Kategori",
    field: "kategori",
    field: (row) => row.kategori,
    format: (val) => `${getKategori(val)}`,
    sortable: false,
    style: "width: 500px;font-size:15px; font-weight:500;",
    headerStyle: "width: 500px;font-size:16px;font-weight:bold;",
  },
  {
    name: "status",
    align: "center",
    label: "Status",
    field: "status",
    field: (row) => row.status,
    format: (val) => `${getStatus(val)}`,
    sortable: false,
    style: "width: 500px;font-size:15px; font-weight:500;",
    headerStyle: "width: 500px;font-size:16px;font-weight:bold;",
  },
  {
    name: "foto_url",
    align: "center",
    label: "Foto Bukti Bayar",
    field: "foto_url",
    field: (row) => row.foto_url,
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
  name: "InvoiceAnggota",
  components: {},
  setup() {
    const authStore = useAuthStore();
    const $q = useQuasar();

    const tableRef = ref();
    const rows = ref([]);
    const filter = ref("");

    const invoiceId = ref("");
    const bukti_pembayaran = ref("");

    const loading = ref(false);
    const pagination = ref({
      sortBy: "desc",
      descending: false,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 10,
    });

    function showUploadPembayaran(id) {
      invoiceId.value = id;
      console.log(invoiceId.value);
      this.prompt = true;
    }

    function uploadBuktiPembayaran() {
      if (!bukti_pembayaran.value) {
        Notify.create({
          message: "Mohon lampirkan bukti pembayaran",
          type: "negative",
        });
        return;
      }

      this.prompt = false;

      $q.loading.show();

      var bodyFormData = new FormData();
      if (bukti_pembayaran.value != null)
        bodyFormData.append("photo", bukti_pembayaran.value);

      api
        .put("/web/invoice/buktibayar/" + invoiceId.value, bodyFormData)
        .then((response) => {
          $q.loading.hide();
          console.log(response);

          Notify.create({
            message:
              "Bukti pembayaran anda telah dikirim. Mohon menunggu verifikasi dari Pengurus ke Email Anda",
            type: "info",
          });

          tableRef.value.requestServerInteraction();
        })
        .catch((error) => {
          $q.loading.hide();

          Notify.create({
            message: "Gagal mengirim bukti pembayaran. Coba lagi",
            type: "negative",
          });
        });
    }

    function onRequest(props) {
      const { page, rowsPerPage, sortBy, descending } = props.pagination;
      const filter = props.filter;

      loading.value = true;

      api.defaults.headers.common["Authorization"] =
        "Bearer " + authStore.getToken;
      api
        .get(
          "/web/invoice/list?page=" +
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
      bukti_pembayaran,
      invoiceId,

      onRequest,
      uploadBuktiPembayaran,
      showUploadPembayaran,
    };
  },
  data() {
    return {
      result: [],
      prompt: false,
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
    getInvoiceStatus(id) {
      if (id == 1) {
        return "Menunggu Pembayaran Anggota";
      } else if (id == 2) {
        return "Menunggu Konfirmasi Pembayaran";
      } else if (id == 3) {
        return "Terverifikasi";
      }
    },

    getInvoiceColor(id) {
      if (id == 1) {
        return "red";
      } else if (id == 2) {
        return "orange";
      } else if (id == 3) {
        return "green";
      }
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
