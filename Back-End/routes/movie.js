const routes = require('express').Router();

const {
    getAllMovies,
    getMovieById,
    createMovie,
} = require("../controller/controller-movie");

routes.post("",createMovie),
    routes.get("/",getAllMovies),
    routes.get("/:id", getMovieById)

module.exports = routes;