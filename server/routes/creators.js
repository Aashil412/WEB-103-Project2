import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'

import getGifts from '../controller/creator.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', getGifts.getGifts)

router.get('/:giftId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/careers.html'))
})

export default router
