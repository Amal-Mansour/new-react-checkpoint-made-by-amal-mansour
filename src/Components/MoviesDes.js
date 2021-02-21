import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MovieData from './MovieData'
import {Button} from 'react-bootstrap'

const MoviesDes = ({ match }) => {
    const [movie, setMovie] = useState({})

    useEffect(() => {
        setMovie(MovieData.find(movie => movie.id === +match.params.id))

    }, [match.params.id])
    return (
        <div >
            {/* image caroussel et div pur la description et la url vedio */}

            <div className="description-style">
                <h1 style={{color:"white" ,marginTop:"30px"}}>SYNOPSIS ET DÉTAILS:</h1>
                <p>{movie.description}</p>
            </div>

            <div className="style-trailer">
                <div>
                    
                
                <iframe style={{ border: '1px solid aqua', borderRadius: '15px', marginBottom: '10px' }} width="800" height="450" src={movie.Url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen > </iframe>
                </div>

                <div className="style-button">
                <Button variant="success">Watch Movie</Button>

                <Button variant="primary">Download link</Button>

                <Link to="/"><Button variant="danger">Go back </Button></Link>
                </div>

            </div>

        </div>
    )
}

export default MoviesDes
