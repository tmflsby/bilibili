import serviceRequest from "./serviceRequest";
import * as URL from "./urlConfig";

export const headerBackgroundApi = () => serviceRequest(URL.headerBackground)

export const getSearchDefaultWordsApi = () => serviceRequest(URL.getSearchDefaultWords)

export const rankingApi = () => serviceRequest(URL.ranking)
