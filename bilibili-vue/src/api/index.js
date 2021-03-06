import serviceRequest from "./serviceRequest";
import * as URL from "./urlConfig";

export const headerBackgroundApi = () => serviceRequest(URL.headerBackground)

export const getSearchDefaultWordsApi = () => serviceRequest(URL.getSearchDefaultWords)

export const bannerApi = () => serviceRequest(URL.banner)

export const rankingApi = () => serviceRequest(URL.ranking)

export const promoteApi = () => serviceRequest(URL.promote)

export const promoteAdApi = () => serviceRequest(URL.promoteAd)

export const dingApi = () => serviceRequest(URL.ding)

export const regionRankingApi = (tid) => serviceRequest(URL.regionRanking, {params: {tid}})
