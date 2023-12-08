export default {
  state: {
    collapse: false
  },
  mutations: {
    setCollapse(state) {
      state.collapse = !state.collapse
    }
  }
}