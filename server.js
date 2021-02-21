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
server.listen(3001, () => {
  console.log('JSON Server is running')
})