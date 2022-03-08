const jsonserver = require('json-server')
const server = jsonserver.create()
const router = jsonserver.router('dataMarioBros.json')
const middlewares = jsonserver.defaults()
server.use(middlewares)
server.use(router)
const port = process.env.PORT || 4005
server.listen(port, () => {
    console.log('Json Server is running');
})