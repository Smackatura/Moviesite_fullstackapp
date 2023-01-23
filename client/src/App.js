import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import NewMovie from "./components/NewMovie";
import MovieUpdate from "./components/MovieUpdate";
import MovieInfo from "./components/MovieInfo";
import MovieList from './components/MovieList';

const App = () => {
  return (
	<div className="App">
      <BrowserRouter>
      <Routes>

		{/* Default navigate to movies */}
		<Route path="/" element={<Navigate to="/movies"/>}/>
		{/* read all */}
		<Route element={<MovieList />} path="/movies/" />
		{/* create */}
		<Route element={<NewMovie/>} path="/movies/add"/>
		{/* read one */}
		<Route element={<MovieInfo />} path="/movies/:id" />
		{/* edit one */}
		<Route element={<MovieUpdate />} path="/movies/:id/edit" />
		{/* <Route delete /> */}
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
