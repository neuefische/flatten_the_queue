import { Router } from 'express'
import MOCK_DATA from '../mockdata/testdata.json'
import axios from 'axios'
import { spawn } from 'child_process'

const { GAPIKEY } = process.env

const router = Router()
const https = require('https')

/* 
[{"name":"Lidl","id":"ChIJiyY_mbyFsUcRUnTY2vvE3gw","street":"Behringstra\u00dfe 154","city":"Hamburg","current_popularity":1000},{"name":"ALDI Hamburg-Bahrenfeld","id":"ChIJgZqGDZWFsUcRMoj-OHgDLgE","street":"Bahrenfelder Kirchenweg 80","city":"Hamburg","current_popularity":1000},{"name":"REWE","id":"ChIJJ9JyqsCFsUcR9XjndPhq30g","street":"Von-Sauer-Stra\u00dfe 11-13","city":"Hamburg","current_popularity":1000}]
*/

router.get('/nearby', async (req, res, next) => {
  const { input, radius } = req.query
  const markets = await getPlaces(input, radius)
  res.json(markets)
})

export default router

function getPlaces(input, radius) {
  return (
    getCoordinates(input)
      //.then(coordinates => placeCalculation(coordinates))
      .then(({ lat, lng }) => placeSearch(lat, lng, radius))
      .then(places =>
        places.map(place => {
          const [street, city] = place.vicinity.split(',')
          return {
            name: place.name,
            id: place.id,
            street: street.trim(),
            city: city.trim(),
            load: Math.floor(1 + Math.random() * 100),
            time_spent: Math.floor(5 + Math.random() * 40),
          }
        })
      )
      .catch(err => {
        console.log(err)
        return []
      })
  )
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

// async function placeCalculation(data) {
//   let largeDataSet = []
//   // spawn new child process to call the python script
//   const python = spawn('python3', ['script3.py', JSON.stringify(data)])
//   // collect data from script
//   python.stdout.on('data', function(data) {
//     console.log('Pipe data from python script ...')
//     largeDataSet.push(data)
//   })
//   // in close event we are sure that stream is from child process is closed
//   await python.on('close', code => {
//     console.log(`child process close all stdio with code ${code}`)
//     // send data to browser
//     largeDataSet = JSON.parse(largeDataSet.join(''))
//     console.log(largeDataSet)
//   })
//   return largeDataSet
// }
