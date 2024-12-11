const Hall = require('../models/hall'); // Ajusta la ruta según tu estructura de carpetas
module.exports = {

    // Obtener todas las salas
'getAllHalls' : async (req, res) => {
    try {
      const halls = await Hall.find().populate('movie tiket');
      res.status(200).json(halls);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las salas', error });
    }
  },
  
  // Obtener una sala por ID
  'getHallById' : async (req, res) => {
    try {
      const { id } = req.params;
      const hall = await Hall.findById(id).populate('movie tiket');
      if (!hall) {
        return res.status(404).json({ message: 'Sala no encontrada' });
      }
      res.status(200).json(hall);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la sala', error });
    }
  },
  
  // Crear una nueva sala
  'createHall' : async (req, res) => {
    try {
      const { externalId, capacity, percent, movie, tiket } = req.body;
      const newHall = new Hall({ externalId, capacity, percent, movie, tiket });
      await newHall.save();
      res.status(201).json(newHall);
    } catch (error) {
      res.status(400).json({ message: 'Error al crear la sala', error });
    }
  },
  
  // Actualizar una sala por ID
  'updateHall' : async (req, res) => {
    try {
      const { id } = req.params;
      const { externalId, capacity, percent, movie, tiket } = req.body;
      const updatedHall = await Hall.findByIdAndUpdate(
        id,
        { externalId, capacity, percent, movie, tiket },
        { new: true, runValidators: true }
      );
      if (!updatedHall) {
        return res.status(404).json({ message: 'Sala no encontrada' });
      }
      res.status(200).json(updatedHall);
    } catch (error) {
      res.status(400).json({ message: 'Error al actualizar la sala', error });
    }
  }
}
