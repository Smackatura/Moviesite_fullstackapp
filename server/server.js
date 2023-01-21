const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')

require('./config/mongoose.config')
//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// middleware cors - Cross Origin Resource Sharing
app.use(cors({
    origin: 'http://localhost:3000'
}))

require ('./routes/Movie.routes')(app)

app.listen(port, ()=> {
    console.log(`Server is up and running on ${port}`)
})