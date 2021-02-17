import React, { useState } from 'react'
import FilterByName from './FilterByName/FilterByName'
import FilterByRating from './RATING/Rating'
import MovieList from './MovieList/MovieList'
import  MoviesData  from './MovieData'
// import Navbar from "./Header/navbar"
import Footer from './Footer/Footer'


const MovieApp = () => {
 
    const [movies, setMovies] = useState(MoviesData);
    const [search, setSearch] = useState("");
    const [rating, setRating] = useState(1);

    const AddMovie = (newMovie) => {
        setMovies([...movies, newMovie])
      }
      
     
    return (
        <div className="movieApps"> 
            <div style={{ width: "1500px",  height: "70px",backgroundColor:"#000033"   ,display: "flex" ,flexWrap: "wrap" ,justifyContent:"space-around" ,alignItems:"center",}}>
                <h1 style={{letterSpacing:"-8px" , fontSize:"60px" ,textShadow:"2px 2px 5px #00e6e6" , color:"#000066"}}>TUNFLEX</h1>
                <FilterByRating  filterRating ={true}   rating={rating}  setRating={setRating}/>
                <FilterByName setSearch={setSearch} />
            </div>
             <div>
            <MovieList movies={movies} search={search}  rating={rating}  AddMovie={AddMovie}/>
            </div>
            <div style={{marginTop:"170px"}}>
               <Footer />
               </div>
        </div>
    )
}

export default MovieApp;
