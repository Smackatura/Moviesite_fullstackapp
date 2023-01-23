import {useState} from 'react'
import axios from 'axios'


const NewMovie = () => {

    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")
    const [boxArt, setBoxArt] = useState("")
    const [rating, setRating] = useState("")
    const [release, setRelease] = useState("")
    const [director, setDirector] = useState("")
    // const [like, setLike] = useState("")
    // const [stared, setStars] = useState("")
    // const [errors, setErrors] = useState({})

    const genres = [
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
    ]

    // const stars = [
    //     'One Star',
    //     'Two Stars',
    //     'Three Stars',
    //     'Three and a Half Stars',
    //     'Four Stars',
    //     'Four and a Half Stars',
    //     'Five Stars'
    // ]

    const ratings = [
        'G',
        'PG',
        'PG-13',
        'NC-17',
        'R',
        'M'
    ]

// start handle functions
// 1
    const handleTitle = (e)=> {
        if(!e.target.value.trim()){
            return
        }
        setTitle (e.target.value)
    }
//2
    const handleGenre = (e)=> {
        if(!e.target.value.trim()){
            return
        }
        setGenre (e.target.value)
    }
//3
    const handleBoxArt = (e)=> {
        if(!e.target.value.trim()){
            return
        }
        setBoxArt (e.target.value)
    }
//4
    const handleRating = (e)=> {
        if(!e.target.value.trim()){
            return
        }
        setRating (e.target.value)
    }
//5
    const handleRelease = (e)=> {
        if(!e.target.value.trim()){
            return
        }
        setRelease (e.target.value)
    }
//6
    const handleDirector = (e)=> {
        if(!e.target.value.trim()){
            return
        }
        setDirector (e.target.value)
    }
// in order to render the submit data we have to make our movie object
    const submitHandler = (e) => {
        e.preventDefault()
        const movie = {
            title,
            genre,
            boxArt,
            rating,
            release,
            director
        }
        axios.post("http://localhost:8000/api/v1/movies", movie)
        .then((movie)=> {
            console.log(movie)
        })
        .catch((err)=>{
            console.log(err)
            // setErrors(err)
        })
    }
// end handle functions

    return (
        <div>
        <h3>Add New Movie</h3>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="">Title</label>
                <input onChange={handleTitle} type="text" value={title}/>
            </div>
            <div>
                <label htmlFor="">Genre</label>
                <select onChange={handleGenre}>
                    <option value={genre}>-- Select a Genre --</option>
                    {
                    genres.map((item,idx)=> (
                        <option key = {idx} value = {item}>{item}</option>
                    ))
                    }
                </select>
            </div>
            <div>
                <label htmlFor="">Box Art</label>
                <input onChange={handleBoxArt} type="text" value={boxArt}/>
            </div>
            <div>
                <label htmlFor="">Rating</label>
                <select onChange={handleRating}>
                    <option value={rating}>-- Choose Rating --</option>
                    {
                    ratings.map((item,idx)=> (
                        <option key={idx} value={item}>{item}</option>
                    ))
                    }
                </select>
            </div>
            <div>
                <label htmlFor="">Release</label>
                <input onChange={handleRelease} type="text" value={release}/>
            </div>
            <div>
                <label htmlFor="">Director</label>
                <input onChange={handleDirector} type="text" value={director}/>
            </div>
            {/* <div>
                <label htmlFor="">Like(thumbs up)</label>
                <input onChange={} type="checkbox" value=""/>
            </div> */}
            {/* <div>
                <label htmlFor="">Stared</label>
                <select>
                    <option value="">-- How many Stars? --</option>
                    {
                    stars.map((item,idx)=> (
                        <option key = {idx} value = {item}>{item}</option>
                    ))
                    }
                </select>
            </div> */}
            <div>
                <button type="submit">Create Movie</button>
            </div>
        </form>
        </div>
    )
}

export default NewMovie