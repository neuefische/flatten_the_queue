import { Router } from 'express'
import MOCK_DATA from '../mockdata/testdata.json'

const router = Router()

router.get('/nearby', (req, res, next) => {
  res.json(MOCK_DATA)
})

export default router
