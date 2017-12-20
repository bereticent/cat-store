import {getMain, getTypes} from '../api'
import {
  RECEIVE_MAIN,
  RECEIVE_TYPES
} from './types'

const RESULT_OK = 0;
export default {
  reqMain ({commit}, callback) {
    getMain().then(response => {
      const result = response.data;
      if (result.code === RESULT_OK) {
        const main = result.data;
        // 更新状态
        commit(RECEIVE_MAIN, {main});

        // 数据得到并更新了对应的状态, 通知调用者
        callback && callback()
      }
    })
  },
  reqTypes ({commit}, callback) {
    getTypes().then(response => {
      const result = response.data; // {code: 0, data: goods}
      if(result.code===RESULT_OK) {
        const types = result.data;
        // 更新状态
        commit(RECEIVE_TYPES, {types});

        callback && callback()
      }
    })
  }
}
