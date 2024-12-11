const mongoose = require('mongoose');

const {Schema} = mongoose;

const SchemaMovie = new Schema({
  externalId: { 
    type: Number, 
    unique: true 
  },
  name :{
    type: String,
    required: true,
  },
  url :{
    type: String,
    required : true,
  },
  
})

const Movie = mongoose.model('Movie',SchemaMovie,);
module.exports = Movie;