const mongoose = require('mongoose');
const { Schema } = mongoose;

const hallSchema = new Schema({
  externalId: { 
    type: String, 
    required: true, 
    unique: true 
  },
  capacity: {
    type: Number,
    required: true,
  },
  percent: {
    type: String,
    required: true,
  },
  movie: {
    type: Schema.Types.ObjectId,
    ref: 'Movie',
    required: true,
  },
  tiket: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Ticket',
    }
  ],
});

const Hall = mongoose.model('Hall', hallSchema);

module.exports = Hall;
