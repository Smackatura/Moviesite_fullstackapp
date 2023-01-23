//import controller functions
const MovieController = require('../controllers/Movie.controllers')


// Routes - before we connect our backend to the front end to render the results we should test each route using postman
module.exports = (app) =>{
// Create
app.post('/api/v1/movies/add', MovieController.addMovie )
// getAll
app.get('/api/v1/movies/', MovieController.getAll)
// getOne
app.get('/api/v1/movies/:id', MovieController.getOneMovie)
// update
app.put('/api/v1/movies/:id', MovieController.updateMovie)
// delete
app.delete('/api/v1/delete/:id', MovieController.deleteMovie)
}
