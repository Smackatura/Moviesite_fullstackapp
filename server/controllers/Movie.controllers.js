const Movie = require('../models/Movie.model')

//creating an object to export our controllers to other files
//doing it this way in case we want to add more routes later on
module.exports = {

    addMovie: (req,res) => {
        Movie.create(req.body)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    },

    getAll: (req,res) => {
        Movie.find(req.body)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    },

getOneMovie: (req,res) => {
        Movie.findById(req.body)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    },

updateMovie: (req,res) => {
        Movie.updateOne({_id:req.params.id},req.body)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    },

deleteMovie: (req,res) => {
        Movie.deleteOne({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}