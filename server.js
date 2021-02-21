const jsonServer = require('json-server')
const api = require('./api')
// api.getManufacturers()

setInterval(api.getManufacturers, 300000)
// setInterval(api.getManufacturers, 10)

const server = jsonServer.create()
const router = jsonServer.router(require('./db.js')())
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  console.log('JSON Server is running')
})