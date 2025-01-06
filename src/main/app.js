import express from 'express'
import { initializeApp } from '../infra/helper/app-data-source.js'
const app = express()
const port = process.env.PORT

initializeApp(() => {
  console.log('testtttt')
  app.listen(port, () => { console.log("server running") })
})