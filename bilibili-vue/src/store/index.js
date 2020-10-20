import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

import headerStore from "./modules/headerStore";
import contentTopStore from "./modules/contentTopStore";

export default new Vuex.Store({
  state: {

  },
  getters: {

  },
  modules: {
    headerStore,
    contentTopStore
  }
})
