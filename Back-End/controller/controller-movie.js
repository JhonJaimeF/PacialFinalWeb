const Movie = require('../models/movie'); 

module.exports = {
    
  'getAllMovies' : async (req, res) => {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las películas', error });
    }
  },
  
  // Obtener una película por ID
  'getMovieById' : async (req, res) => {
    try {
      const { id } = req.params;
      const movie = await Movie.findById(id);
      if (!movie) {
        return res.status(404).json({ message: 'Película no encontrada' });
      }
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la película', error });
    }
  },
  
  // Crear una nueva película
  'createMovie' : async (req, res) => {
    try {
      const { externalId, name, url } = req.body;
      const newMovie = new Movie({ externalId, name, url });
      await newMovie.save();
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(400).json({ message: 'Error al crear la película', error });
    }
  }
  
}