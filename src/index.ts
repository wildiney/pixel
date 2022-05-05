import http from 'http'
import express from 'express'

import routes from './routes/routes'

const port = process.env.PORT_APP || 8002
const app = express()
const server = http.createServer(app)

// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded())
app.use(express.json())

app.use('/', routes)

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at port ${port}`)
})
