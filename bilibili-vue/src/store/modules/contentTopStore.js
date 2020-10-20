import { bannerApi, rankingApi } from "@/api";
import * as TYPE from "../constantType";

const state = {
  bannerList: [],
  rankingList: []
}

const getters = {
  bannerList: state => state.bannerList,
  rankingList: state => state.rankingList
}

const actions = {
  async banner({ commit }) {
    const result = await bannerApi()
    const bannerList = result.data
    commit(TYPE.BANNER, { bannerList })
  },
  async ranking({ commit }) {
    const result = await rankingApi()
    const { list }  = result.data
    const rankingList = []
    for (let i = 0; i < list.length; i += 6) {
      rankingList.push(list.slice(i, i + 6));
    }
    rankingList.pop()
    commit(TYPE.RANKING, { rankingList })
  }
}

const mutations = {
  [TYPE.BANNER](state, { bannerList }) {
    state.bannerList = bannerList
  },
  [TYPE.RANKING](state, { rankingList }) {
    state.rankingList = rankingList
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
