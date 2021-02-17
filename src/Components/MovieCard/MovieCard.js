import React from 'react'
import { Card, Carousel } from "react-bootstrap";
import RatingOfMovie from '../RATING/Rating'
import AddModaleMovie from '../AddModalMovie/AddModaleMovie'
import './MovieCard.css'


const MovieCard = ({ movie, addCard, AddMovie }) => {
    return (
        <div>
            {addCard ?

                <Card className="moviebtn">
                    {/* insert of ad movie card  */}
                    <Card.Body>
                        <Card.Title className="btn">
                            <AddModaleMovie AddMovie={AddMovie} />
                        </Card.Title>
                    </Card.Body>
                </Card>
                :
                <Card className="styleCard">
                    {/* inserts images caroussel */}
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={movie.myImage}
                                alt={movie.myImage}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={movie.myImage1}
                                alt={movie.myImage1}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={movie.myImage2}
                                alt={movie.myImage2}
                            />
                        </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                        <Card.Title className="styleTitle">{movie.title}</Card.Title>
                        <RatingOfMovie filterRating={false} movieRating={movie.Rating} />
                    </Card.Body>
                </Card>

            }
        </div>
    )
}

export default MovieCard;


