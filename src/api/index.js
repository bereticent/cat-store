import axios from 'axios'
export function getMain() {
  return axios.get('/api2/main')  // 返回一个promise对象
}

export function getTypes() {
  return axios.get('/api2/types')
}
