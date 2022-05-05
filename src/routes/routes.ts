// import path from 'path'
import { Router } from 'express'
import { homeController } from '../controllers/homeController'
import { pixelTracker } from '../controllers/pixelTrackerController'
import { robots } from '../controllers/robotsController'

const router = Router()

router.get('/', homeController)
router.get('/pixel.png', pixelTracker)
router.get('/robots.txt', robots)

router.get('*', function (req, res) {
  res.status(404).json('File not found')
})

export default router
