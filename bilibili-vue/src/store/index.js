import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

import headerStore from "./modules/headerStore";

export default new Vuex.Store({
  state: {

  },
  getters: {

  },
  modules: {
    headerStore
  }
})
