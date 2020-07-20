<template>
  <v-app-bar app elevate-on-scroll>
    <v-toolbar-title class="hidden-sm-and-down font-weight-bold"
      >Nikel App
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Search bar -->
    <v-autocomplete
      solo
      autofocus
      v-model="model"
      hide-details
      :items="items"
      item-text="name"
      :placeholder="searchLabel()"
      :search-input.sync="search"
      prepend-inner-icon="fas fa-search"
      return-object
    ></v-autocomplete>

    <v-spacer></v-spacer>

    <!-- Theme toggle button -->
    <v-btn @click="toggleTheme" icon>
      <v-icon v-if="$vuetify.theme.dark">
        fas fa-moon
      </v-icon>
      <v-icon v-else>
        fas fa-sun
      </v-icon>
    </v-btn>

    <!-- Github button -->
    <v-btn href="https://github.com/nikel/nikel-app" icon>
      <v-icon>
        fab fa-github
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<!-- This is still a shitty mess -->
<script>
export default {
  name: "AppBar",

  data: () => ({
    limit: 10,
    entries: [],
    model: null,
    search: null
  }),

  computed: {
    items() {
      return this.entries.map(entry => {
        const name = entry.name;
        return Object.assign({}, entry, { name });
      });
    }
  },

  mounted() {
    if (localStorage.themeDark) {
      this.$vuetify.theme.dark = localStorage.themeDark === "true";
    }
  },

  watch: {
    search(val) {
      fetch(`https://nikel.ml/api/courses?name=${val}&limit=${this.limit}`)
        .then(res => res.json())
        .then(res => {
          this.entries = res["response"];
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  methods: {
    searchLabel() {
      const currType = this.$store.state.searchType;
      return `Search ${currType.charAt(0).toUpperCase() + currType.slice(1)}`;
    },

    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.themeDark = this.$vuetify.theme.dark;
    }
  }
};
</script>
