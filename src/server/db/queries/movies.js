const knex = require('../connection');

function getAllMovies () {
    return knex('movies')
        .select('*');
}

function getSingleMovie (movieId) {
    return knex('movies')
        .select('*')
        .where({ id: parseInt(movieId) });
}

function addMovie (movie) {
    return knex('movies')
        .insert(movie)
        .returning('*')
}
module.exports = {
    getAllMovies, getSingleMovie, addMovie
};