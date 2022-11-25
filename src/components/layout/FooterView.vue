<template>
  <div class="q-mt-lg">
    <div class="my-footer q-pa-md text-left">
      <div class="row">
        <!-- footer branding content -->
        <div class="col-12 col-md-6 col-lg-3 q-px-md-xl q-py-xl">
          <q-btn
            round
            dense
            flat
            :ripple="false"
            size="19px"
            color="black"
            class="q-ml-none btn--no-hover"
            no-caps
          >
            <img src="~assets/images/logo/brand.svg" />

            <div class="text-h5 text-bold">PERDATIN</div>
          </q-btn>

          <p
            class="q-mt-md"
            style="color: #3d3d3d !important; font-size: 14px; font-weight: 600"
          >
            Perhimpunan Dokter Spesialis Anestesiologi dan Terapi Intensif
            Indonesia (PERDATIN) adalah wadah bagi dokter-dokter spesialis
            anestesi di Indonesia untuk saling berinteraksi dan tukar menukar
            informasi seputar perkembangangan Ilmu Anestesiologi, Ilmu
            Kedokteran Rawat Intensif (Critical Care Medicine) dan Ilmu
            Kedokteran Gawat Darurat (Emergency Medicine).
          </p>
          <br />

          <div style="color: #4b5563 !important; font-weight: bold">
            Jl. Cempaka Putih Tengah II No. 2A Kel. Cempaka Putih Tengah Kec.
            Cempaka Putih Tengah Jakarta Pusat 10510
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3 q-px-md-xl q-py-xl">
          <h5
            class="text-bold text-uppercase"
            style="color: #374151 !important"
          >
            Kontak
          </h5>
          <ul>
            <li>
              <a
                style="
                  color: #3d3d3d !important;
                  font-size: 15px;
                  font-weight: 500;
                "
                href="tel:+62246580019"
              >
                Telepon (021) 21473847
              </a>
            </li>
            <li>
              <a
                style="
                  color: #3d3d3d !important;
                  font-size: 15px;
                  font-weight: 500;
                "
                href=""
              >
                Fax (021) 21473847
              </a>
            </li>
            <li>
              <a
                style="
                  color: #3d3d3d !important;
                  font-size: 15px;
                  font-weight: 500;
                "
                href="tel:62246593452"
              >
                Call Center 021-3904441 ext 2437
              </a>
            </li>
            <li>
              <a
                style="
                  color: #3d3d3d !important;
                  font-size: 15px;
                  font-weight: 500;
                "
                href="mailto:pp.perdatin@gmail.com"
              >
                Email pp.perdatin@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div class="col-12 col-md-6 col-lg-3 q-px-md-xl q-py-xl">
          <h5
            class="text-bold text-uppercase"
            style="color: #374151 !important"
          >
            Social Media
          </h5>
          <ul>
            <!-- <li>
              <a
                style="color: #374151 !important"
                href="https://www.facebook.com/perdatindkijakarta"
              >
                <q-icon name="fa-brands fa-square-facebook" size="md" />
                <span class="text-center q-ml-md">Perdatin Jaya</span>
              </a>
            </li> -->
            <li>
              <a
                style="color: #374151 !important"
                href="https://twitter.com/pperdatin"
              >
                <q-icon name="fa-brands fa-square-youtube" size="md" />
                <span class="text-center q-ml-md">@pperdatin</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                style="color: #374151 !important"
                href="https://www.instagram.com/pp_perdatin/"
              >
                <q-icon name="fa-brands fa-square-instagram" size="md" />
                <span class="text-center q-ml-md">@pp_perdatin</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="col-12 col-md-6 col-lg-3 q-px-md-xl q-py-xl">
          <h5
            class="text-bold text-uppercase"
            style="color: #374151 !important"
          >
            Menu
          </h5>
          <div class="row">
            <div class="col-12 col-md-6">
              <ul>
                <li>
                  <a href="/" style="color: #374151 !important"> Home </a>
                </li>
                <li>
                  <a href="/events" style="color: #374151 !important">
                    Katalog Kelas
                  </a>
                </li>
                <li>
                  <a href="/auth/registrasi" style="color: #374151 !important">
                    Daftar
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-6">
              <ul>
                <li>
                  <a href="/auth/login" style="color: #374151 !important">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/ppkc/berita" style="color: #374151 !important">
                    Berita
                  </a>
                </li>
                <li>
                  <a href="/ppkc/testimoni" style="color: #374151 !important">
                    Testimoni
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="row">
            <div>
              <ul>
                <li>
                  <a
                    href="http://perdatin.org/"
                    style="color: #374151 !important"
                  >
                    Situs Resmi Perdatin
                    <q-icon name="fa-solid fa-link" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright text-center q-py-md">
      <div class="container">
        &copy;Copyright {{ new Date().getFullYear() }}
        <a target="_blank" href="https://perdatin.halomedika.com">Perdatin</a>.
        All Rights Reserved
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="sass" scoped>
.my-footer
  background-color: #f9f9f9
  ul
    list-style-type: none
    margin: 0
    padding: 0
  li
    margin-top: 12px
  a
    color: black!important
    font-weight: 500
    text-decoration: none
    cursor: pointer
  h5
    margin-top: 0
.footer-copyright
  background-color: #EBEBEB!important
  color: #004899 !important
  a
    color: black!important
    font-weight: 500
    text-decoration: none
    cursor: pointer
</style>
