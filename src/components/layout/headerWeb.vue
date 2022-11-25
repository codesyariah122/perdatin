<template>
  <q-header
    reveal
    reveal-offset="0"
    class="text-black"
    style="background: #fff"
  >
    <div class="row q-px-lg q-pt-lg q-pb-sm items-center">
      <div class="col-12 col-md-4">
        <div class="row items-center">
          <div class="col-12">
            <div class="row justify-center">
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
                  style="height: 100px"
                  fit="fill"
                />
              </q-btn>
            </div>
          </div>
        </div>
      </div>
      <div v-if="$q.screen.gt.sm" class="col-none col-md-4">
        <div class="row float-right">
          <div>
            <q-input dense outlined v-model="text" label="Search" />
          </div>
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
                  <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
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
                      <q-item-section>Your profile</q-item-section>
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
      <div v-if="$q.screen.gt.sm" class="col-none col-md-4 order-first">
        <!-- <div class="row q-gutter-md">
          <a
            style="color: #374151 !important"
            href="https://twitter.com/pperdatin"
          >
            <q-icon name="fa-brands fa-square-youtube" size="md" />
            <span class="text-center q-ml-md">@pperdatin</span>
          </a>
          <a
            target="_blank"
            style="color: #374151 !important"
            href="https://www.instagram.com/pp_perdatin/"
          >
            <q-icon name="fa-brands fa-square-instagram" size="md" />
            <span class="text-center q-ml-md">@pp_perdatin</span>
          </a>
        </div> -->
      </div>
    </div>
  </q-header>
</template>

<script>
import { defineComponent, ref } from "vue";
import { fabGithub } from "@quasar/extras/fontawesome-v6";
import { useAuthStore } from "stores/auth.store";
import { computed } from "vue";

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
    };
  },

  methods: {
    logOut() {
      const authStore = useAuthStore();
      authStore.logout();
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
