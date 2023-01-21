import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import NewMovie from "./components/NewMovie"
import EditMovie from "./components/EditOne"
import ViewOne from "./components/ViewOne"
import MovieList from './components/MovieList';

function App() {
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
		<Route element={<ViewOne />} path="/movies/:id" />
		{/* edit one */}
		<Route element={<EditMovie />} path="/movies/:id/edit" />
		{/* <Route delete /> */}
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
