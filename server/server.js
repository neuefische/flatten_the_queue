import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
const server = express()

const { DB_URL, PORT = 3333 } = process.env

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => console.log('MongoDB ready.'))

server.listen(PORT, () => console.log(`Server ready on port ${PORT}`))
server.use(express.json())
server.use(cors())
server.set('json spaces', 2)

import demoRoute from './routes/demo'
import marketRoute from './routes/market'
import mockRoute from './routes/mock'
server.use('/demo', demoRoute)
server.use('/market', marketRoute)
server.use('/mock', mockRoute)
