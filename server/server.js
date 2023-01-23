const express = require('express')
const app = express()

//middleware?
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// require('dotenv').config()? DO I NEED THIS?
const port = 8000

// CORS - Cross Origin Resource Sharing
const cors = require('cors')
app.use(cors({origin: 'http://localhost:3000'}))

// config
require('./config/mongoose.config')

// routes
require ('./routes/Movie.routes')(app)

app.listen(port, ()=> {console.log(`Server is up and running on ${port}`)})