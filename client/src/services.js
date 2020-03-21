import axios from 'axios'

export function getDemo() {
  return axios.get('/demo')
}

export function getUser(id) {
  return axios.get('/user/' + id)
}

export function createUser() {
  return axios.post('/user')
}
