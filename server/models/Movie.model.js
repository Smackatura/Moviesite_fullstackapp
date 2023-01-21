const mongoose = require('mongoose')


// Schema (Blueprint for data)

const MovieSchema = mongoose.Schema({
    title: {
        type: String
    },
    genre: {
        type: String,
        enum: [
            'Comedy',
            'Drama',
            'Horror',
            'Sci-fi',
            'Fantasy',
            'Action',
            'Family',
            'Animated',
            'Documentary',
            'International',
            'Mystery'
        ],
    },
    boxArt: {
        type: String
    },
    rating: {
        type: String,
        enum: ['G', 'PG', 'PG-13', 'NC-17', 'R', 'M']
    },
    release: {
        type: Number
    },
    director: {
        type: String
    }
    // like: {
    //     type: Boolean
    // },
    // stars: {
    //     type: String,
    //     enum: [
    //         'One Star',
    //         'Two Stars',
    //         'Three Stars',
    //         'Three and a Half Stars',
    //         'Four Stars',
    //         'Four and a Half Stars',
    //         'Five Stars' ]
    // }
}, {timestamps : true})

// Model

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie;