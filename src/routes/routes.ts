// import path from 'path'
import { Router } from 'express'
import { pixelTracker } from '../controllers/pixelTrackerController'
import { robots } from '../controllers/robotsController'

const router = Router()

router.get('/pixel.png', pixelTracker)
router.get('/robots.txt', robots)

router.get('*', function (req, res) {
  res.status(404).json('File not found')
})

export default router
