const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(require('./db.js')())
const middlewares = jsonServer.defaults()

server.use(middlewares)

// server.get('/https://bad-api-assignment.reaktor.com/v2/products/beanies', (req, res) => {
//   res.jsonp(req.query)
//   console.log(req.query)
//   console.log('asdasdas')
// })

server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})