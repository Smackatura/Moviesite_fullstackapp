import {useState, useEffect } from 'react'
import axios from 'axios'

const MovieList = () => {

	const [movies, setMovies] = useState([])

	useEffect(()=> {

		axios.get('http://localhost:8000/api/v1/movies')
		.then((MovieList)=> {
		setMovies(MovieList.data.movies)
		})
		.catch((err)=> {
		console.log(err)
		})
	}, [])
	return (
		<div>
			<h3>Movies List:</h3>
			<ul>
				{
					movies.map((item,idx)=>(
						<li key={idx}>{item.title}</li>
					))
				}
			</ul>
		</div>
		// video 2hr 3min mark 
		//the video : 
		// https://www.youtube.com/watch?v=_qTGkkZLvqA&t=2158s
  )
}

export default MovieList