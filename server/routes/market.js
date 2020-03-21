import { Router } from 'express'
import MOCK_DATA from '../mockdata/testdata.json'
const router = Router()
const https = require('https')
import axios from 'axios'

router.get('/nearby', async (req, res, next) => {
  const { lat, lng } = await getCoordinates(req.query.address)
  const places = await placeSearch(lat, lng)
  console.log(places)
})

export default router

async function getCoordinates(query) {
  const coordinates = await axios.get(
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${query}&inputtype=textquery&fields=geometry&key=AIzaSyB-ksg4SiiLPpU4Xm7V5yt34E1C8SKdiLk`
  )
  return coordinates.data.candidates[0].geometry.location
}

async function placeSearch(latitude, longitude, radius = 5000) {
  const places = await axios.get(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&types=supermarket&key=AIzaSyD7MB-Afk1X3Buu0brPpYO3SK_2DILXtYQ`
  )
  return places.data.results
}
