export const state = () => ({
  data: {}
})

export const mutations = {
  setCard(state, data) {
    state.data = data
  }
}

export const actions = {
  async fetch({commit}, slug) {
    const data = await this.$axios.$get(`posts/slug:${slug}?fields=featured_image,title,author,content,date`);
    commit('setCard', data)
  }
}

export const getters = {
  data: s => s.data
}
