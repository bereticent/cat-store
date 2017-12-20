// import Vue from 'vue'
import {
  RECEIVE_MAIN,
  RECEIVE_TYPES
} from './types'
export default {
  [RECEIVE_MAIN] (state, {main}) {
    state.main = main
  },

  [RECEIVE_TYPES] (state, {types}) {
    state.types = types
  },
}
