import { dingApi } from "@/api";
import * as TYPE from "../constantType";

const state = {
  sortKeys: ['douga', 'bangumi', 'guochuang', 'teleplay', 'movie', 'music', 'dance', 'game', 'technology', 'life', 'kichiku', 'fashion', 'ent'],
  contentRows: [],
}

const getters = {
  sortKeys: state => state.sortKeys,
  contentRows: state => state.contentRows,
}

const actions = {
  async ding({ commit }) {
    const result = await dingApi()
    const contentRows = []
    for (let i = 0; i < state.sortKeys.length; i++) {
      let category = state.sortKeys[i]
      let title = "", titleLink = "", rankingLink = ""

      switch (category) {
        case 'douga':
          title = '动画'
          titleLink = 'https://www.bilibili.com/v/douga'
          rankingLink = 'https://www.bilibili.com/v/popular/rank/douga'
          break
        case 'bangumi':
          title = '番剧'
          titleLink = 'https://www.bilibili.com/anime'
          rankingLink = 'https://www.bilibili.com/v/popular/rank/bangumi'
          break
        case 'guochuang':
          title = '国创'
          titleLink = 'https://www.bilibili.com/guochuang'
          rankingLink = 'https://www.bilibili.com/v/popular/rank/guochuang'
          break
        case 'music':
          title = '音乐'
          titleLink = 'https://www.bilibili.com/v/music/'
          rankingLink = 'https://www.bilibili.com/v/popular/rank/music'
          break
        case 'dance':
          title = '舞蹈'
          titleLink = 'https://www.bilibili.com/v/dance'
          rankingLink = 'https://www.bilibili.com/v/popular/rank/dance'
          break
        case 'game':
          title = '游戏'
          titleLink = 'https://www.bilibili.com/v/game'
          rankingLink = 'https://www.bilibili.com/v/popular/rank/game'
          break
        case 'technology':
          title = '知识'
          titleLink = 'https://www.bilibili.com/v/technology'
          rankingLink = 'https://www.bilibili.com/v/popular/rank/technology'
          break
        case 'life':
          title = '生活'
          titleLink = 'https://www.bilibili.com/v/life'
          rankingLink = 'https://www.bilibili.com/v/popular/rank/life'
          break
        case 'kichiku':
          title = '鬼畜'
          titleLink = 'https://www.bilibili.com/v/kichiku'
          rankingLink = 'https://www.bilibili.com/v/popular/rank/kichiku'
          break
        case 'fashion':
          title = '时尚'
          titleLink = 'https://www.bilibili.com/v/fashion'
          rankingLink = 'https://www.bilibili.com/v/popular/rank/fashion'
          break
        case 'ent':
          title = '娱乐'
          titleLink = 'https://www.bilibili.com/v/ent'
          rankingLink = 'https://www.bilibili.com/v/popular/rank/ent'
          break
        case 'movie':
          title = '电影'
          titleLink = 'https://www.bilibili.com/movie'
          rankingLink = 'https://www.bilibili.com/v/popular/rank/movie'
          break
        case 'teleplay':
          title = '电视剧'
          titleLink = 'https://www.bilibili.com/tv'
          rankingLink = 'https://www.bilibili.com/v/popular/rank/tv'
          break
        default:
          title =""
          titleLink = ""
          rankingLink = ''
      }

      contentRows.push({
        b_id: `b_${category}`,
        item: Object.values(result[category]),
        category,
        title,
        titleLink,
        rankingLink
      })
    }
    console.log(contentRows)
    commit(TYPE.CONTENT_ROW, { contentRows })
  },
  async changDing({ commit }, category) {
    const result = await dingApi()
    const contentRows = state.contentRows
    for (let i = 0; i < contentRows.length; i++) {
      if (contentRows[i].category === category) {
        contentRows[i].item = Object.values(result[category])
      }
    }
    commit(TYPE.CONTENT_ROW, { contentRows })
  }
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
