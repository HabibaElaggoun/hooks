import React from 'react'
import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard'


const MovieList = ({movies}) => {
  return (
    <div className='movielist'>
        {movies.map((el)=> <MovieCard el={el} key={el.id}/>)}
    </div>
  )
}

export default MovieList