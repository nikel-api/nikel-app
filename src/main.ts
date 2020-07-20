import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    searchType: "courses",
    searchCache: [],
    searchSelect: null
  }
});

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
