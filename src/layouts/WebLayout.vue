<template>
  <q-layout view="lHh lpr lFf">
    <!-- <HeaderView /> -->
    <q-page-container>
      <q-page v-if="$q.screen.gt.sm" style="padding-top: 66px">
        <router-view />
        <MenuView />
      </q-page>
      <q-page v-else style="padding-top: 54px">
        <router-view />
        <MenuView />
      </q-page>
    </q-page-container>
    <FooterView />
  </q-layout>
</template>

<script>
// import HeaderView from "components/layout/HeaderWeb.vue";
import FooterView from "components/layout/FooterView.vue";
import MenuView from "components/layout/MenuWeb.vue";

export default {
  name: "MyLayout",
  components: {
    // HeaderView,
    FooterView,
    MenuView,
  },
};
</script>
