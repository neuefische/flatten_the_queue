import { Router } from 'express'

const router = Router()

router.get('/:id', (req, res, next) => {
  res.json({ id })
})

export default router
