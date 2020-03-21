import { Router } from 'express'

const router = Router()

router.get('/', (req, res, next) => {
  res.json({ demo: 'works' })
})

export default router
