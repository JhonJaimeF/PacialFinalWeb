const mongoose = require('mongoose');
const Hall = require('./hall');

const {Schema} = mongoose;

const SchemaTiket = new Schema({
  externalId: { 
    type: Number, 
    unique: true 
  },
  Hall: {
    type: Schema.Types.ObjectId,
      ref: 'hall'
  },
  chairs :{
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  } 
})


const Tikect = mongoose.model('Tiket',SchemaTiket,);
module.exports = Tikect;