export const state = () => ({
  dark: true,
  loaded: false,
  intro: true,
  nav: true
})

export const mutations = {
  toggleState (state, key) {
    state[key] = !state[key]
  },
  toggleStates (state, keys) {
    keys.map((key) => {
      state[key] = !state[key]
    })
  },
  setState (state, change) {
    state[change[0]] = change[1]
  }
}
