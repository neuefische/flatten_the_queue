import axios from 'axios'

export function getDemo() {
  return axios.get('/demo')
}

export function getNearbyMarkets(address) {
  return axios.get(`/market/nearby?address=${address}`)
}
