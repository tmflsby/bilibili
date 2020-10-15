import { headerBackgroundApi, getSearchDefaultWordsApi } from "@/api";
import * as TYPE from "../constantType/headerType";

const state = {
  headerBackground: "",
  headerBackgroundLogo: "",
  headerBackgroundName: "",
  headerBackgroundUrl: "",
  searchDefaultWords: "",
  searchDefaultShow: ""
}

const getters = {
  headerBackground: state => state.headerBackground,
  headerBackgroundLogo: state => state.headerBackgroundLogo,
  headerBackgroundName: state => state.headerBackgroundName,
  headerBackgroundUrl: state => state.headerBackgroundUrl,
  searchDefaultWords: state => state.searchDefaultWords,
  searchDefaultShow: state => state.searchDefaultShow
}

const actions = {
  async headerBackground({ commit }) {
    const result = await headerBackgroundApi()
    const headerBackground = result.data[0].pic
    const headerBackgroundLogo = result.data[0].litpic
    const headerBackgroundName = result.data[0].name
    const headerBackgroundUrl = result.data[0].url
    commit(TYPE.HEADER_BACKGROUND, { headerBackground, headerBackgroundLogo, headerBackgroundName, headerBackgroundUrl })
  },
  async getSearchDefaultWords({ commit }) {
    const result = await getSearchDefaultWordsApi()
    const searchDefaultWords = result[0].word
    const searchDefaultShow = result[0].show
    commit(TYPE.SEARCH_DEFAULT_WORDS, { searchDefaultWords, searchDefaultShow })
  }
}

const mutations = {
  [TYPE.HEADER_BACKGROUND](state, { headerBackground, headerBackgroundLogo, headerBackgroundName, headerBackgroundUrl }) {
    state.headerBackground = headerBackground
    state.headerBackgroundLogo = headerBackgroundLogo
    state.headerBackgroundName = headerBackgroundName
    state.headerBackgroundUrl = headerBackgroundUrl
  },
  [TYPE.SEARCH_DEFAULT_WORDS](state, { searchDefaultWords, searchDefaultShow }) {
    state.searchDefaultWords = searchDefaultWords
    state.searchDefaultShow = searchDefaultShow
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
