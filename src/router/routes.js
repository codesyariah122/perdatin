const routes = [
  {
    path: "/",
    component: () => import("layouts/WebLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/login",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      { path: "", component: () => import("pages/auth/AuthLogin.vue") },
    ],
  },
  {
    path: "/forgot",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      { path: "", component: () => import("pages/auth/AuthForgot.vue") },
    ],
  },
  {
    path: "/register",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      { path: "", component: () => import("pages/auth/AuthRegister.vue") },
    ],
  },
  {
    path: "/berita",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      { path: "", component: () => import("pages/berita/BeritaPage.vue") },
    ],
  },
  {
    path: "/gallery",
    component: () => import("layouts/WebLayout.vue"),
    children: [{ path: "", component: () => import("pages/GalleryPage.vue") }],
  },
  {
    path: "/event",
    component: () => import("layouts/WebLayout.vue"),
    children: [{ path: "", component: () => import("pages/EventPage.vue") }],
  },
  {
    path: "/register-success",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      { path: "", component: () => import("pages/auth/RegisterSuccess.vue") },
    ],
  },
  {
    path: "/reset-success",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      { path: "", component: () => import("pages/auth/ResetSuccess.vue") },
    ],
  },
  {
    path: "/bank-data-penelitian",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      { path: "", component: () => import("pages/BankDataPenelitian.vue") },
    ],
  },
  {
    path: "/pengaduan-perdatin",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/layanan-anggota/PengaduanAnggota.vue"),
      },
    ],
  },
  {
    path: "/tentang/pesan",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      { path: "", component: () => import("pages/tentang/PesanKetua.vue") },
    ],
  },
  {
    path: "/tentang/programprioritas",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/tentang/ProgramPrioritas.vue"),
      },
    ],
  },
  {
    path: "/tentang/ketuaperdatin",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/tentang/KetuaPerdatin.vue"),
      },
    ],
  },
  {
    path: "/tentang/adrt",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/tentang/AdRt.vue"),
      },
    ],
  },
  {
    path: "/tentang/pengurus",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/tentang/Pengurus.vue"),
      },
    ],
  },
  {
    path: "/tentang/pengurus-cabang",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/tentang/PengurusCabang.vue"),
      },
    ],
  },
  {
    path: "/tentang/pengurus-kati",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/tentang/PengurusKati.vue"),
      },
    ],
  },
  {
    path: "/tentang/sejarah",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      { path: "", component: () => import("pages/tentang/Sejarah.vue") },
    ],
  },
  {
    path: "/tentang/seminat",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      { path: "", component: () => import("pages/tentang/Seminat.vue") },
    ],
  },
  {
    path: "/tentang/keseminatan/:id",
    props: true,
    component: () => import("layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        name: "Keseminatan",
        component: () => import("pages/tentang/Keseminatan.vue"),
      },
    ],
  },
  {
    path: "/tentang/strukturorganisasi",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/tentang/StrukturOrganisasi.vue"),
      },
    ],
  },
  {
    path: "/tentang/visimisi",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      { path: "", component: () => import("pages/tentang/VisiMisi.vue") },
    ],
  },
  {
    path: "/tentang/cabang-perdatin",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      { path: "", component: () => import("pages/tentang/CabangPerdatin.vue") },
    ],
  },
  {
    path: "/berita",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      { path: "", component: () => import("pages/berita/BeritaPage.vue") },
    ],
  },
  {
    path: "/event",
    component: () => import("layouts/WebLayout.vue"),
    children: [{ path: "", component: () => import("pages/event/Event.vue") }],
  },
  {
    path: "/event/:id",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      { path: "", component: () => import("pages/event/EventDetail.vue") },
    ],
  },
  {
    path: "/gallery",
    component: () => import("layouts/WebLayout.vue"),
    children: [{ path: "", component: () => import("pages/GalleryPage.vue") }],
  },
  {
    path: "/berita/:id",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      { path: "", component: () => import("pages/berita/BeritaDetail.vue") },
    ],
  },
  {
    path: "/user",
    component: () => import("layouts/WebLayout.vue"),
    children: [
      { path: "", component: () => import("pages/profile/ProfileUser.vue") },
    ],
  },
  // {
  //   path: "/account",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
