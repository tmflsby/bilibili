import { dingApi } from "@/api";
import * as TYPE from "../constantType";

const state = {
  sortKeys: ['douga', 'bangumi', 'guochuang', 'teleplay', 'movie', 'music', 'dance', 'game', 'technology', 'life', 'kichiku', 'fashion', 'ent'],
  sortIds: [1,2,3,4,5,6,7,8,9,10,11,12,13],
  sortValues: ['动画', '番剧', '国创', '剧集', '电影', '音乐', '舞蹈', '游戏', '科技', '生活', '鬼畜', '时尚', '娱乐'],
  contentRows: [],
  contentRankings: [],
  contentRanking: {}
}

const getters = {
  sortKeys: state => state.sortKeys,
  sortIds: state => state.sortIds,
  sortValues: state => state.sortValues,
  contentRows: state => state.contentRows,
  contentRankings: state => state.contentRankings,
  contentRanking: state => state.contentRanking
}

const actions = {
  async ding({ commit }) {
    const result = await dingApi()
    const contentRows = []
    for (let i = 0; i < state.sortKeys.length; i++) {
      let category = state.sortKeys[i]
      let rowItem = {
        category,
        categoryId: state.sortIds[i],
        name: state.sortValues[i],
        b_id: `b_${category}`,
        item: Object.values(result[category])
      }
      contentRows.push(rowItem)
    }
    console.log(contentRows)
    commit(TYPE.CONTENT_ROW, { contentRows })
  },
  // async contentRanking({ commit }) {
  //   const result = await rankingApi()
  //   console.log(result)
  // }
}

const mutations = {
  [TYPE.CONTENT_ROW](state, { contentRows }) {
    state.contentRows = contentRows
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
