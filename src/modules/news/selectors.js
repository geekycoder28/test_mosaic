export const selectNewsState = (state) => state.news
export const selectNewsList = (state) => state.news.listNews
export const selectTotalListSize = (state) => state.news.totalResults
export const selectPage = (state) => state.news.page
export const selectError = (state) => state.news.error
export const selectLoading = (state) => state.news.loading
export const selectSources = (state) => state.news.sources
