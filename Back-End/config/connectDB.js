const mongoose = require('mongoose')

//const URI = process.env.URI;
const URI = "mongodb+srv://jhonjaime01:eMG62K0TtTIh1Dfa@cluster0.n1dpq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.set('strictQuery', false)

mongoose.connect(URI)
    .then(()=>console.log('Connect DB Success'))
    .catch((err)=>console.log('Connect DB Fail ' + err))

module.exports = mongoose