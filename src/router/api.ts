import { Router } from 'express'

const router = Router()

router.get('/xx', (req, res) => {
  res.json({
    code: 1,
    msg: 'Hello for access node api',
    response: {},
  })
})

export default router
