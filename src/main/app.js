import express from 'express'
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send("OI")
})

app.listen(port, () => {
  console.log("server running")
})