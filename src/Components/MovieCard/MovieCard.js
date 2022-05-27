import React from 'react'
import './MovieCard.css'
import Stars from "react-rating-stars-component";


const MovieCard = ({el}) => {
  return (
    
    
    <div class="card">
            <img src={el.PosterURL} width="300" alt=""/>
        
      <div class="descriptions">
                <h3 className='title'> {el.Title} </h3>
                <p className='description'>{el.Description} </p>
                  
                <button> 
                  <Stars count={7} edit={false} value={el.Rating}  />
                </button>

               
      </div>
    </div>
  )
}

export default MovieCard