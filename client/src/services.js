import axios from 'axios'

export function getDemo() {
  return axios.get('/demo')
}
