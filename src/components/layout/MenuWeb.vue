<template>
  <q-page-sticky v-if="$q.screen.gt.sm" expand position="top">
    <q-toolbar
      class="q-py-sm justify-between bg-white"
      style="border-bottom: 0.5px solid #eee"
    >
      <div class="q-mr-lg">
        <div class="row items-center">
          <div class="col-12">
            <div class="row">
              <q-btn
                round
                dense
                flat
                :ripple="false"
                size="19px"
                color="black"
                class="btn--no-hover"
                no-caps
              >
                <img
                  src="~assets/images/logo/logo_perdatin.png"
                  style="height: 50px"
                  fit="fill"
                />
              </q-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-auto">
        <div
          class="GL__toolbar-link q-gutter-md text-body2 text-weight-bold row items-center justify-center no-wrap"
        >
          <router-link class="link-style text-black menu_font_size" to="/"
            >Home</router-link
          >
          <q-btn dense flat>
            <div class="row items-center no-wrap">
              <a
                href="javascript:void(0)"
                class="text-black text-capitalize text-bold q-mr-xs menu_font_size q-pl-xs"
              >
                Tentang
              </a>
              <q-icon
                name="arrow_drop_down"
                size="16px"
                style="margin-left: -2px"
              />
            </div>
            <q-menu auto-close>
              <q-list dense style="min-width: 100px">
                <q-item clickable class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    ><router-link class="link-style" to="/tentang/pesan"
                      >Pesan Ketua Umum</router-link
                    ></q-item-section
                  >
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    ><router-link class="link-style" to="/tentang/adrt"
                      >AD/ART</router-link
                    ></q-item-section
                  >
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    ><router-link class="link-style" to="/tentang/visimisi"
                      >Visi Misi</router-link
                    ></q-item-section
                  >
                </q-item>
                <!-- <q-item clickable class="GL__menu-link">
                <q-item-section class="menu_child_font_size"
                  ><router-link
                    class="link-style"
                    to="/tentang/programprioritas"
                    >Program Prioritas</router-link
                  ></q-item-section
                >
              </q-item> -->
                <q-item clickable class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    ><router-link class="link-style" to="/tentang/pengurus"
                      >Pengurus Pusat</router-link
                    ></q-item-section
                  >
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    ><router-link
                      class="link-style"
                      to="/tentang/pengurus-cabang"
                      >Pengurus Cabang</router-link
                    ></q-item-section
                  >
                </q-item>
                <!-- <q-item clickable class="GL__menu-link">
                <q-item-section class="menu_child_font_size"
                  ><router-link class="link-style" to="/tentang/pengurus"
                    >Pengurus Kati</router-link
                  ></q-item-section
                >
              </q-item> -->
                <!-- <q-item clickable class="GL__menu-link">
                <q-item-section class="menu_child_font_size"
                  ><router-link
                    class="link-style"
                    to="/tentang/strukturorganisasi"
                    >Struktur Organisasi</router-link
                  ></q-item-section
                >
              </q-item> -->
                <!-- <q-item clickable class="GL__menu-link">
                <q-item-section class="menu_child_font_size"
                  ><router-link
                    class="link-style"
                    to="/tentang/strukturorganisasi"
                    >Sebaran Anggota</router-link
                  ></q-item-section
                >
              </q-item> -->
                <q-item clickable class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    ><router-link class="link-style" to="/tentang/sejarah"
                      >Sejarah Perdatin</router-link
                    ></q-item-section
                  >
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    ><router-link class="link-style" to="/tentang/ketuaperdatin"
                      >Ketua Dari Masa Ke Masa</router-link
                    ></q-item-section
                  >
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn dense flat>
            <div class="row items-center no-wrap">
              <a
                href="javascript:void(0)"
                class="text-black text-capitalize text-bold q-mr-xs menu_font_size q-pl-xs"
              >
                Program
              </a>
              <q-icon
                name="arrow_drop_down"
                size="16px"
                style="margin-left: -2px"
              />
            </div>
            <q-menu auto-close>
              <q-list dense style="min-width: 100px">
                <q-item clickable class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    ><router-link class="link-style" to="/tentang/pesan"
                      >Pendidikan dan Pelatihan</router-link
                    ></q-item-section
                  >
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    ><router-link class="link-style" to="/tentang/adrt"
                      >SKP Online</router-link
                    ></q-item-section
                  >
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    ><router-link class="link-style" to="/tentang/visimisi"
                      >Advokasi</router-link
                    ></q-item-section
                  >
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn dense flat>
            <div class="row items-center no-wrap">
              <a
                href="javascript:void(0)"
                class="text-black text-capitalize text-bold q-mr-xs menu_font_size q-pl-xs"
              >
                Layanan Anggota
              </a>
              <q-icon
                name="arrow_drop_down"
                size="16px"
                style="margin-left: -2px"
              />
            </div>
            <q-menu auto-close>
              <q-list dense style="min-width: 100px">
                <q-item clickable class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    ><router-link class="link-style" to="/tentang/pesan"
                      >Registrasi Keanggotaan</router-link
                    ></q-item-section
                  >
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    ><router-link class="link-style" to="/tentang/adrt"
                      >Tabungan Solidaritas</router-link
                    ></q-item-section
                  >
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    ><router-link class="link-style" to="/tentang/visimisi"
                      >P2KB Perdatin</router-link
                    ></q-item-section
                  >
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    ><router-link class="link-style" to="/pengaduan-perdatin"
                      >Pengaduan</router-link
                    ></q-item-section
                  >
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    ><router-link class="link-style" to="/bank-data-penelitian"
                      >Penelitian</router-link
                    ></q-item-section
                  >
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn dense flat>
            <div class="row items-center no-wrap">
              <a
                href="javascript:void(0)"
                class="text-black text-capitalize text-bold q-mr-xs menu_font_size q-pl-xs"
              >
                Seminat
              </a>
              <q-icon
                name="arrow_drop_down"
                size="16px"
                style="margin-left: -2px"
              />
            </div>
            <q-menu>
              <q-list dense style="min-width: 100px">
                <q-item clickable v-close-popup class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    ><router-link class="link-style" to="/tentang/seminat"
                      >Tentang Seminat</router-link
                    ></q-item-section
                  >
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    >Daftar Seminat</q-item-section
                  >
                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" />
                  </q-item-section>
                  <q-menu auto-close anchor="top end" self="top start">
                    <q-list dense>
                      <q-item
                        v-for="item in list_keseminatan"
                        :key="item.id"
                        dense
                        clickable
                        class="GL__menu-link"
                      >
                        <q-item-section class="menu_child_font_size"
                          ><router-link
                            class="link-style"
                            :to="{
                              name: 'Keseminatan',
                              params: { id: item.id },
                            }"
                            >{{ item.nama }}</router-link
                          ></q-item-section
                        >
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn dense flat>
            <div class="row items-center no-wrap">
              <a
                href="javascript:void(0)"
                class="text-black text-capitalize text-bold q-mr-xs menu_font_size q-pl-xs"
              >
                Kolegium
              </a>
              <q-icon
                name="arrow_drop_down"
                size="16px"
                style="margin-left: -2px"
              />
            </div>
            <q-menu auto-close>
              <q-list dense style="min-width: 100px">
                <q-item clickable class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    ><a
                      class="link-style"
                      target="_blank"
                      href="https://kati.or.id/"
                      >Tentang Kolegium</a
                    ></q-item-section
                  >
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    ><router-link class="link-style" to="/tentang/pengurus-kati"
                      >Pengurus</router-link
                    ></q-item-section
                  >
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section class="menu_child_font_size"
                    ><router-link class="link-style" to="/tentang/adrt"
                      >Pengajuan Serkom Kolegium</router-link
                    ></q-item-section
                  >
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <router-link
            class="link-style text-black menu_font_size q-pl-xs"
            to="/event"
            >Event</router-link
          >
          <router-link
            class="link-style text-black menu_font_size q-pl-xs"
            to="/berita"
            >Berita</router-link
          >
          <router-link
            class="link-style text-black menu_font_size q-pl-xs"
            to="/gallery"
            >Galeri</router-link
          >

          <div class="row">
            <div>
              <router-link
                v-if="!isUserLoggedIn"
                class="link-style text-black menu_font_size"
                to="/login"
                ><q-btn
                  class="q-ml-lg q-px-lg q-py-sm text-bold"
                  unelevated
                  color="primary"
                  label="Login"
              /></router-link>

              <div
                v-else
                class="q-pl-sm q-gutter-sm row items-center no-wrap q-pl-lg"
              >
                <q-btn dense flat no-wrap>
                  <q-avatar rounded size="20px">
                    <q-icon name="fa-solid fa-user" size="sm" />
                  </q-avatar>
                  <q-icon name="arrow_drop_down" size="16px" />

                  <q-menu auto-close>
                    <q-list dense>
                      <q-item class="GL__menu-link-signed-in">
                        <q-item-section>
                          <div>
                            Signed in as
                            <strong>{{ store.user?.nama }}</strong>
                          </div>
                        </q-item-section>
                      </q-item>
                      <q-separator />
                      <q-item clickable class="GL__menu-link">
                        <q-item-section>
                          <router-link
                            class="link-style text-black menu_font_size"
                            to="/user"
                            >Your profile</router-link
                          ></q-item-section
                        >
                      </q-item>
                      <q-separator />
                      <q-item @click="logOut" clickable class="GL__menu-link">
                        <q-item-section>Sign out</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-toolbar>
  </q-page-sticky>
  <q-page-sticky v-else expand position="top">
    <q-toolbar
      class="q-py-md q-px-md justify-center bg-white"
      style="border-bottom: 0.5px solid #eee"
    >
      <q-btn
        flat
        round
        dense
        icon="menu"
        class="q-mr-sm"
        @click="icon = true"
      />
      <div
        class="text-bold"
        clickable
        style="cursor: pointer"
        @click="icon = true"
      >
        Menu
      </div>
      <q-space />
    </q-toolbar>
    <q-dialog v-model="icon" full-width>
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Perdatin</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div class="row">
            <q-list bordered class="rounded-borders" style="width: 100%">
              <router-link
                class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                role="listitem"
                tabindex="0"
                to="/"
                ><div class="q-focus-helper" tabindex="-1"></div>
                <div
                  class="q-item__section column q-item__section--main justify-center text-bold"
                >
                  Home
                </div></router-link
              >

              <q-expansion-item
                class="text-bold"
                expand-separator
                label="Tentang"
                default-opened
              >
                <router-link
                  class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                  role="listitem"
                  tabindex="0"
                  to="/tentang/pesan"
                  style="padding-left: 72px"
                  ><div class="q-focus-helper" tabindex="-1"></div>
                  <div
                    class="q-item__section column q-item__section--main justify-center"
                  >
                    Pesan Ketua Umum
                  </div></router-link
                >
                <router-link
                  class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                  role="listitem"
                  tabindex="0"
                  to="/tentang/adrt"
                  style="padding-left: 72px"
                  ><div class="q-focus-helper" tabindex="-1"></div>
                  <div
                    class="q-item__section column q-item__section--main justify-center"
                  >
                    AD/ART
                  </div></router-link
                >
                <router-link
                  class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                  role="listitem"
                  tabindex="0"
                  to="/tentang/visimisi"
                  style="padding-left: 72px"
                  ><div class="q-focus-helper" tabindex="-1"></div>
                  <div
                    class="q-item__section column q-item__section--main justify-center"
                  >
                    Visi Misi
                  </div></router-link
                >
                <router-link
                  class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                  role="listitem"
                  tabindex="0"
                  to="/tentang/pengurus"
                  style="padding-left: 72px"
                  ><div class="q-focus-helper" tabindex="-1"></div>
                  <div
                    class="q-item__section column q-item__section--main justify-center"
                  >
                    Pengurus Pusat
                  </div></router-link
                >
                <router-link
                  class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                  role="listitem"
                  tabindex="0"
                  to="/tentang/pengurus"
                  style="padding-left: 72px"
                  ><div class="q-focus-helper" tabindex="-1"></div>
                  <div
                    class="q-item__section column q-item__section--main justify-center"
                  >
                    Pengurus Cabang
                  </div></router-link
                >
                <router-link
                  class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                  role="listitem"
                  tabindex="0"
                  to="/tentang/sejarah"
                  style="padding-left: 72px"
                  ><div class="q-focus-helper" tabindex="-1"></div>
                  <div
                    class="q-item__section column q-item__section--main justify-center"
                  >
                    Sejarah Perdatin
                  </div></router-link
                >
                <router-link
                  class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                  role="listitem"
                  tabindex="0"
                  to="/tentang/ketuaperdatin"
                  style="padding-left: 72px"
                  ><div class="q-focus-helper" tabindex="-1"></div>
                  <div
                    class="q-item__section column q-item__section--main justify-center"
                  >
                    Ketua Dari Masa Ke Masa
                  </div></router-link
                >
              </q-expansion-item>

              <q-expansion-item
                class="text-bold"
                expand-separator
                label="Program"
              >
                <router-link
                  class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                  role="listitem"
                  tabindex="0"
                  to="/tentang/pesan"
                  style="padding-left: 72px"
                  ><div class="q-focus-helper" tabindex="-1"></div>
                  <div
                    class="q-item__section column q-item__section--main justify-center"
                  >
                    Pendidikan dan Pelatihan
                  </div></router-link
                >
                <router-link
                  class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                  role="listitem"
                  tabindex="0"
                  to="/tentang/pesan"
                  style="padding-left: 72px"
                  ><div class="q-focus-helper" tabindex="-1"></div>
                  <div
                    class="q-item__section column q-item__section--main justify-center"
                  >
                    SKP Online
                  </div></router-link
                >
                <router-link
                  class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                  role="listitem"
                  tabindex="0"
                  to="/tentang/pesan"
                  style="padding-left: 72px"
                  ><div class="q-focus-helper" tabindex="-1"></div>
                  <div
                    class="q-item__section column q-item__section--main justify-center"
                  >
                    Advokasi
                  </div></router-link
                >
              </q-expansion-item>

              <q-expansion-item
                class="text-bold"
                expand-separator
                label="Layanan Anggota"
              >
                <router-link
                  class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                  role="listitem"
                  tabindex="0"
                  to="/tentang/pesan"
                  style="padding-left: 72px"
                  ><div class="q-focus-helper" tabindex="-1"></div>
                  <div
                    class="q-item__section column q-item__section--main justify-center"
                  >
                    Registrasi Keanggotaan
                  </div></router-link
                >
                <router-link
                  class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                  role="listitem"
                  tabindex="0"
                  to="/tentang/pesan"
                  style="padding-left: 72px"
                  ><div class="q-focus-helper" tabindex="-1"></div>
                  <div
                    class="q-item__section column q-item__section--main justify-center"
                  >
                    Tabungan Solidaritas
                  </div></router-link
                >
                <router-link
                  class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                  role="listitem"
                  tabindex="0"
                  to="/tentang/pesan"
                  style="padding-left: 72px"
                  ><div class="q-focus-helper" tabindex="-1"></div>
                  <div
                    class="q-item__section column q-item__section--main justify-center"
                  >
                    P2KB Perdatin
                  </div></router-link
                >
                <router-link
                  class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                  role="listitem"
                  tabindex="0"
                  to="/pengaduan-perdatin"
                  style="padding-left: 72px"
                  ><div class="q-focus-helper" tabindex="-1"></div>
                  <div
                    class="q-item__section column q-item__section--main justify-center"
                  >
                    Pengaduan
                  </div></router-link
                >
                <router-link
                  class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                  role="listitem"
                  tabindex="0"
                  to="/bank-data-penelitian"
                  style="padding-left: 72px"
                  ><div class="q-focus-helper" tabindex="-1"></div>
                  <div
                    class="q-item__section column q-item__section--main justify-center"
                  >
                    Penelitian
                  </div></router-link
                >
              </q-expansion-item>

              <q-expansion-item
                class="text-bold"
                expand-separator
                label="Seminat"
              >
                <router-link
                  class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                  role="listitem"
                  tabindex="0"
                  to="/tentang/visimisi"
                  style="padding-left: 72px"
                  ><div class="q-focus-helper" tabindex="-1"></div>
                  <div
                    class="q-item__section column q-item__section--main justify-center"
                  >
                    Tentang Seminat
                  </div></router-link
                >
                <q-expansion-item
                  :header-inset-level="1"
                  expand-separator
                  label="Daftar Seminat"
                  default-opened
                >
                  <router-link
                    class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                    role="listitem"
                    tabindex="0"
                    to="/tentang/visimisi"
                    style="padding-left: 100px"
                    ><div class="q-focus-helper" tabindex="-1"></div>
                    <div
                      class="q-item__section column q-item__section--main justify-center"
                    >
                      Seminat Pusat
                    </div></router-link
                  >
                  <router-link
                    class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                    role="listitem"
                    tabindex="0"
                    to="/tentang/visimisi"
                    style="padding-left: 100px"
                    ><div class="q-focus-helper" tabindex="-1"></div>
                    <div
                      class="q-item__section column q-item__section--main justify-center"
                    >
                      Seminat Cabang
                    </div></router-link
                  >
                  <router-link
                    class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                    role="listitem"
                    tabindex="0"
                    to="/tentang/visimisi"
                    style="padding-left: 100px"
                    ><div class="q-focus-helper" tabindex="-1"></div>
                    <div
                      class="q-item__section column q-item__section--main justify-center"
                    >
                      Seminat Kolegium
                    </div></router-link
                  >
                </q-expansion-item>
              </q-expansion-item>

              <q-expansion-item
                class="text-bold"
                expand-separator
                label="Kolegium"
              >
                <router-link
                  class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                  role="listitem"
                  tabindex="0"
                  to="/tentang/visimisi"
                  style="padding-left: 72px"
                  ><div class="q-focus-helper" tabindex="-1"></div>
                  <div
                    class="q-item__section column q-item__section--main justify-center"
                  >
                    Tentang Kolegium
                  </div></router-link
                >
                <router-link
                  class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                  role="listitem"
                  tabindex="0"
                  to="/tentang/visimisi"
                  style="padding-left: 72px"
                  ><div class="q-focus-helper" tabindex="-1"></div>
                  <div
                    class="q-item__section column q-item__section--main justify-center"
                  >
                    Pengurus
                  </div></router-link
                >
                <router-link
                  class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                  role="listitem"
                  tabindex="0"
                  to="/tentang/visimisi"
                  style="padding-left: 72px"
                  ><div class="q-focus-helper" tabindex="-1"></div>
                  <div
                    class="q-item__section column q-item__section--main justify-center"
                  >
                    Pengajuan Serkom Kolegium
                  </div></router-link
                >
              </q-expansion-item>

              <router-link
                class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                role="listitem"
                tabindex="0"
                to="/tentang/visimisi"
                ><div class="q-focus-helper" tabindex="-1"></div>
                <div
                  class="q-item__section column q-item__section--main justify-center text-bold"
                >
                  Event
                </div></router-link
              >

              <router-link
                class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                role="listitem"
                tabindex="0"
                to="/berita"
                ><div class="q-focus-helper" tabindex="-1"></div>
                <div
                  class="q-item__section column q-item__section--main justify-center text-bold"
                >
                  Berita
                </div></router-link
              >
              <router-link
                class="q-item q-item-type row no-wrap q-item--dense q-item--clickable q-link cursor-pointer q-focusable q-hoverable app-menu-entry non-selectable"
                role="listitem"
                tabindex="0"
                to="/gallery"
                ><div class="q-focus-helper" tabindex="-1"></div>
                <div
                  class="q-item__section column q-item__section--main justify-center text-bold"
                >
                  Galeri
                </div></router-link
              >
            </q-list>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page-sticky>
</template>

<script>
import { defineComponent, ref } from "vue";
import { fabGithub } from "@quasar/extras/fontawesome-v6";
import { useAuthStore } from "stores/auth.store";
import { computed } from "vue";
import { api } from "boot/axios";

const stringOptions = [
  "quasarframework/quasar",
  "quasarframework/quasar-awesome",
];

export default defineComponent({
  setup() {
    const store = useAuthStore();

    const text = ref("");
    const options = ref(null);
    const filteredOptions = ref([]);
    const search = ref(null); // $refs.search

    function filter(val, update) {
      if (options.value === null) {
        // load data
        setTimeout(() => {
          options.value = stringOptions;
          search.value.filter("");
        }, 2000);
        update();
        return;
      }

      if (val === "") {
        update(() => {
          filteredOptions.value = options.value.map((op) => ({ label: op }));
        });
        return;
      }

      update(() => {
        filteredOptions.value = [
          {
            label: val,
            type: "In this repository",
          },
          {
            label: val,
            type: "All GitHub",
          },
          ...options.value
            .filter((op) => op.toLowerCase().includes(val.toLowerCase()))
            .map((op) => ({ label: op })),
        ];
      });
    }

    return {
      fabGithub,

      text,
      options,
      filteredOptions,
      search,

      filter,
      store,
      isUserLoggedIn: computed(() => store.isLoggedIn),
      icon: ref(false),
    };
  },

  data() {
    return {
      list_keseminatan: [],
    };
  },

  mounted() {
    this.getKeseminatan();
  },

  methods: {
    logOut() {
      const authStore = useAuthStore();
      authStore.logout();
    },

    getKeseminatan() {
      api
        .get("/web/keseminatan")
        .then((response) => {
          this.list_keseminatan = response.data.list_data;
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

<style lang="sass" scoped>
.link-style
  text-decoration: none
  color: inherit

.menu_font_size
  font-size: 1.2em

.menu_child_font_size
  font-size: 1.1em

.GL
  &__select-GL__menu-link
    .default-type
      visibility: hidden

    &:hover
      background: #0366d6
      color: white
      .q-item__section--side
        color: white
      .default-type
        visibility: visible

  &__toolbar-link
    a
      color: white
      text-decoration: none
      &:hover
        opacity: 0.7

  &__menu-link:hover
    background: #0366d6
    color: white

  &__menu-link-signed-in,
  &__menu-link-status
    &:hover
      & > div
        background: white !important

  &__menu-link-status
    color: $blue-grey-6
    &:hover
      color: $light-blue-9

  &__toolbar-select.q-field--focused
    width: 450px !important
    .q-field__append
      display: none
</style>
