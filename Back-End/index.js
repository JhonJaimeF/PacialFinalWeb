const express = require('express')
const cors= require('cors')

const app = express()


// Connect DB
require("./config/connectDB")


app.set('PORT',process.env.PORT || 3000 )
app.use(express.json())
app.use(cors())

app.use('/movie',require('./routes/movie'))
app.use('/ticket',require('./routes/ticket'))
app.use('/hall',require('./routes/hall'))

app.listen(app.get('PORT'), () => console.log(`Server Ready at http://localhost:${app.get('PORT')}`))