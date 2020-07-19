<template>
  <v-app>
    <AppBar />
    <AppContent />
    <AppFooter />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppBar from "@/components/AppBar.vue";
import AppContent from "@/components/AppContent.vue";
import AppFooter from "@/components/AppFooter.vue";

export default Vue.extend({
  name: "App",

  components: {
    AppFooter,
    AppBar,
    AppContent
  },

  data: () => ({
    //
  })
});
</script>
