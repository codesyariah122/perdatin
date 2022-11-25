<template>
  <div class="q-px-xl">
    <q-skeleton
      v-if="loading"
      width="100%"
      :height="carousel_height"
    ></q-skeleton>
    <div v-else class="row">
      <div class="col">
        <h4 class="text-center text-bold">Profile</h4>

        <div class="row q-my-lg">
          <div class="col-12 col-lg-4">
            <div class="row">
              <q-img
                :src="result.photo"
                fit="cover"
                style="height: 100px"
                width="100px"
              />
              <div class="q-ml-lg text-bold text-h5">
                <div>{{ result.nama }}</div>
                <div>{{ result.no_npa }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <q-card style="width: 100%">
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="mails" label="Identitas" />
              <q-tab name="invoice" label="Invoice" />
              <!-- <q-tab name="movies" label="Pendidikan" /> -->
              <!-- <q-tab name="movies" label="Pekerjaan" /> -->
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="mails">
                <div class="row q-pa-lg">
                  <div class="col-12">
                    <div class="row">
                      <div class="col-12 col-md-4">
                        <div class="text-h6 text-bold">Cabang Perdatin</div>
                        <div>
                          <p class="text-body1 content-desc">
                            {{ result.propinsi_name }}
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-md-4">
                        <div class="text-h6 text-bold">Jenis Anggota</div>
                        <div>
                          <p class="text-body1 content-desc">
                            {{ result.jenis_anggota_nama }}
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-md-4">
                        <div class="text-h6 text-bold">Nama</div>
                        <div>
                          <p class="text-body1 content-desc">
                            {{ result.nama }}
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-md-4">
                        <div class="text-h6 text-bold">Email</div>
                        <div>
                          <p class="text-body1 content-desc">
                            {{ result.email }}
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-md-4">
                        <div class="text-h6 text-bold">Tempat Lahir</div>
                        <div>
                          <p class="text-body1 content-desc">
                            {{ result.tempat_lahir }}
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-md-4">
                        <div class="text-h6 text-bold">Tanggal Lahir</div>
                        <div>
                          <p class="text-body1 content-desc">
                            {{ getConvertDate(result.tanggal_lahir) }}
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-md-4">
                        <div class="text-h6 text-bold">Jenis Kelamin</div>
                        <div>
                          <p class="text-body1 content-desc">
                            {{ result.jenis_kelamin_nama }}
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-md-4">
                        <div class="text-h6 text-bold">Agama</div>
                        <div>
                          <p class="text-body1 content-desc">
                            {{ result.agama_nama }}
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-md-4">
                        <div class="text-h6 text-bold">No KTP</div>
                        <div>
                          <p class="text-body1 content-desc">
                            {{ result.no_ktp }}
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-md-4">
                        <div class="text-h6 text-bold">Alamat Lengkap</div>
                        <div>
                          <p class="text-body1 content-desc">
                            {{ result.address }}
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-md-4">
                        <div class="text-h6 text-bold">Kota/Kabupaten</div>
                        <div>
                          <p class="text-body1 content-desc">
                            {{ result.kabupaten_name }}
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-md-4">
                        <div class="text-h6 text-bold">Kecamatan</div>
                        <div>
                          <p class="text-body1 content-desc">
                            {{ result.kecamatan }}
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-md-4">
                        <div class="text-h6 text-bold">Kelurahan</div>
                        <div>
                          <p class="text-body1 content-desc">
                            {{ result.kelurahan }}
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-md-4">
                        <div class="text-h6 text-bold">No Telepon</div>
                        <div>
                          <p class="text-body1 content-desc">
                            {{ result.phone }}
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-md-4">
                        <div class="text-h6 text-bold">No STR</div>
                        <div>
                          <p class="text-body1 content-desc">
                            {{ result.str }}
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-md-4">
                        <div class="text-h6 text-bold">Perguruan Tinggi</div>
                        <div>
                          <p class="text-body1 content-desc">
                            {{ result.perguruan_tinggi }}
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-md-4">
                        <div class="text-h6 text-bold">Tahun Lulus</div>
                        <div>
                          <p class="text-body1 content-desc">
                            {{ result.tahun_lulus }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </q-tab-panel>

              <q-tab-panel name="invoice">
                <InvoiceAnggota />
              </q-tab-panel>

              <q-tab-panel name="movies">
                <div class="text-h6">Movies</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, defineAsyncComponent } from "vue";
import { api } from "boot/axios";
import { useAuthStore } from "stores/auth.store";
import { date } from "quasar";

export default defineComponent({
  name: "ProfileUser",
  components: {
    InvoiceAnggota: defineAsyncComponent(() =>
      import("components/web/profile/InvoiceAnggota.vue")
    ),
  },
  setup() {
    return {
      tab: ref("mails"),
    };
  },
  data() {
    return {
      loading: true,
      result: {},
    };
  },
  created() {
    this.carousel_height = window.innerHeight - 120 + "px";
  },
  mounted() {
    this.loadData();
  },

  methods: {
    getConvertDate(waktu) {
      if (waktu) {
        return date.formatDate(waktu, "DD MMMM YYYY", {
          months: [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
          ],
        });
      } else {
        return "";
      }
    },
    loadData() {
      const authStore = useAuthStore();

      console.log("data token");
      console.log(authStore.getToken);

      api.defaults.headers.common["Authorization"] =
        "Bearer " + authStore.getToken;
      api
        .get("/web/user")
        .then((response) => {
          this.result = response.data.user;
          console.log(this.result);

          this.loading = false;
        })
        .catch(() => {
          console.log("error");
          // const $q = useQuasar();
          // $q.notify({
          //   color: "negative",
          //   position: "top",
          //   message: "Loading failed",
          //   icon: "report_problem",
          // });
        })
        .finally(() => {});
    },
  },
});
</script>

<style scoped>
.content-desc {
  white-space: pre-wrap;
  font-weight: 500;
  line-height: 31px;
}
</style>
