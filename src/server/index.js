require('dotenv').load();
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa();
const PORT = 1337;
const indexRoutes = require('./routes/index')
const moviesRoutes = require('./routes/movies')

app.use(bodyParser())
app.use(indexRoutes.routes())
app.use(moviesRoutes.routes())

const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})

module.exports = server;