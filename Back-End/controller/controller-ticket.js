const Tiket = require('../models/ticket'); // Ajusta la ruta según tu estructura de carpetas

module.exports = {

    'getAllTikets' : async (req, res) => {
  try {
    const tikets = await Tiket.find().populate('Hall');
    res.status(200).json(tikets);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los tickets', error });
  }
},

// Obtener un ticket por ID
'getTiketById' : async (req, res) => {
  try {
    const { id } = req.params;
    const tiket = await Tiket.findById(id).populate('Hall');
    if (!tiket) {
      return res.status(404).json({ message: 'Ticket no encontrado' });
    }
    res.status(200).json(tiket);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el ticket', error });
  }
},

// Crear un nuevo ticket
'createTiket' : async (req, res) => {
  try {
    const { externalId, Hall, chairs, price } = req.body;
    const newTiket = new Tiket({ externalId, Hall, chairs, price });
    await newTiket.save();
    res.status(201).json(newTiket);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el ticket', error });
  }
},

// Actualizar un ticket por ID
'updateTiket' : async (req, res) => {
  try {
    const { id } = req.params;
    const { externalId, Hall, chairs, price } = req.body;
    const updatedTiket = await Tiket.findByIdAndUpdate(
      id,
      { externalId, Hall, chairs, price },
      { new: true, runValidators: true }
    );
    if (!updatedTiket) {
      return res.status(404).json({ message: 'Ticket no encontrado' });
    }
    res.status(200).json(updatedTiket);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el ticket', error });
  }
},

// Eliminar un ticket por ID
'deleteTiket' : async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTiket = await Tiket.findByIdAndDelete(id);
    if (!deletedTiket) {
      return res.status(404).json({ message: 'Ticket no encontrado' });
    }
    res.status(200).json({ message: 'Ticket eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el ticket', error });
  }
}

}
