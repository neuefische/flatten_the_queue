import { Router } from 'express'
import MOCK_DATA from '../mockdata/testdata.json'
import axios from 'axios'

const { GAPIKEY } = process.env

const router = Router()
const https = require('https')

router.get('/nearby', async (req, res, next) => {
  const { input, radius } = req.query
  const markets = await getPlaces(input, radius)
  res.json(markets)
})

export default router

function getPlaces(input, radius) {
  return getCoordinates(input)
    .then(({ lat, lng }) => placeSearch(lat, lng, radius))
    .then(places =>
      places.map(place => {
        const [street, city] = place.vicinity.split(',')
        return {
          name: place.name,
          id: place.id,
          street: street.trim(),
          city: city.trim(),
        }
      })
    )
    .catch(err => {
      console.log(err)
      return []
    })
}

function getCoordinates(input) {
  return axios
    .get(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=textquery&fields=geometry&key=${GAPIKEY}`
    )
    .then(coordinates => {
      return coordinates.data.status === 'OK'
        ? coordinates.data.candidates[0].geometry.location
        : { lat: 1, lng: 1 }
    })
    .catch(err => {
      console.log(err)
      return { lat: 1, lng: 1 }
    })
}

function placeSearch(latitude, longitude, radius = 1000) {
  return axios
    .get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&types=grocery_or_supermarket&key=${GAPIKEY}`
    )
    .then(places => places.data.results)
}
