import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'


 const MovieList = ({movies, search ,rating ,AddMovie}) => {

   
    
    return (
        <div className="movieList">

            {movies
            .filter(movie =>
                movie.title.toLowerCase().includes(search.toLowerCase())
                && movie.Rating >= rating
              )
            
            .map(movie =>
                <MovieCard   movie={movie}  key={movie.id} />

               
            )}
                    <MovieCard className="addMovieBtn" addCard={true} AddMovie={AddMovie} />
 
        </div>
    )
}

export default MovieList;