import * as types from '../mutation-types'

export default {
  [types.OPEN_DRAWER] (state, payload) {
    console.log('OPEN_DRAWER')
    state.drawer = true
  },

  [types.CLOSE_DRAWER] (state, payload) {
    console.log('CLOSE_DRAWER')
    state.drawer = false
  }
}
