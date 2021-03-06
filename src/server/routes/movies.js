const Router = require('koa-router');
const queries = require('../db/queries/movies');

const router = new Router();
const BASE_URL = `/api/v1/movies`;
router.get(BASE_URL, async (ctx) => {
    try {
        const movies = await queries.getAllMovies();
        ctx.body = {
            status: 'success',
            data: movies
        };
    } catch (err) {
        console.log(err)
    }
})

router.get(`${BASE_URL}/:movieId`, async (ctx) => {
    try {
        const { movieId } = ctx.params
        const movie = await queries.getSingleMovie(movieId);
        if (movie.length) {
            ctx.body = {
                status: 'success',
                data: movie
            };
        } else {
            ctx.status = 404;
            ctx.body = {
                status: 'error',
                message: 'That movie does not exist.'
            };
        }
    } catch (err) {
        console.log(err)
    }
})

router.post(`${BASE_URL}`, async ctx => {
    try {
        const movie = await queries.addMovie(ctx.request.body)
        if (movie.length) {
            ctx.status = 201
            ctx.body = {
                status: 'success',
                data: movie
            }
        } else {
            ctx.status = 400
            ctx.message = 'Something went wrong'
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;