import { promoteApi, promoteAdApi } from "@/api";
import * as TYPE from "../constantType";

const state = {
  promoteTitleList: {},
  promoteList: [],
  promoteAdList: []
}

const getters = {
  promoteTitleList: state => state.promoteTitleList,
  promoteList: state => state.promoteList,
  promoteAdList: state => state.promoteAdList
}

const actions = {
  async promote({ commit }) {
    const result = await promoteApi()
    const promoteList = result.data
    const promoteTitleList = promoteList.shift()
    commit(TYPE.PROMOTE, { promoteTitleList, promoteList })
  },
  async promoteAd({ commit }) {
    const result = await promoteAdApi()
    const promoteAdList = result.data
    commit(TYPE.PROMOTE_AD, { promoteAdList })
  }
}

const mutations = {
  [TYPE.PROMOTE](state, { promoteTitleList, promoteList }) {
    state.promoteTitleList = promoteTitleList
    state.promoteList = promoteList
  },
  [TYPE.PROMOTE_AD](state, { promoteAdList }) {
    state.promoteAdList = promoteAdList
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
