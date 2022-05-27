import './App.css';
import {movies} from './data'
import MovieList from './Components/MovieList/MovieList';
import AddMovie from './Components/AddMovie/AddMovie';
import { useState } from 'react';
import Filter from './Components/Filter/Filter';


function App  () {
  const [moviesM, setMoviesM] = useState(movies)
  const getNewMovie=(newM)=>{setMoviesM([...moviesM, {...newM,id:moviesM.length}])}
  const [filterName, setFilterName] = useState("")

  return (
    <div className="App"> 
    
    <h1> Movie App</h1> 
        <Filter setFilterName={setFilterName}/>
    <br/>
        <AddMovie getNewMovie={getNewMovie} />
    <br/>
        <MovieList movies={moviesM.filter((el)=>el.Title.toLocaleLowerCase().includes(filterName.trim().toLocaleLowerCase()))}/>
     </div>

  );
}

export default App;
