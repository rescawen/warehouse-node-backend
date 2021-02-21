const express = require('express')
const jsonServer = require('json-server')
const api = require('./api')

setInterval(api.getManufacturers, 300000)

// const server = jsonServer.create()
// const router = jsonServer.router(require('./db.js')())
// const middlewares = jsonServer.defaults()

// server.use(middlewares)
// server.use(router)
// const PORT = process.env.PORT || 3001
// server.listen(PORT, () => {
//   console.log('JSON Server is running')
// })

const server = express()
const router = jsonServer.router(require('./db.js')())
const middlewares = jsonServer.defaults()

server.use(express.static('build'))
server.use(middlewares)
server.use(router)
const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  console.log('JSON Server is running')
})