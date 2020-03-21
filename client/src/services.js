import axios from 'axios'

export function getDemo() {
  return axios.get('/demo')
}

export function getNearbyMarkets(input, radius) {
  return axios.get(`/market/nearby?input=${input}&radius=${radius}`)
}
