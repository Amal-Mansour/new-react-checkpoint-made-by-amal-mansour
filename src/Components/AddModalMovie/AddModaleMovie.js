import React, { useState } from 'react'
import { Form, Modal, Button, } from "react-bootstrap";
import Augustin1 from "../../assets/addmovie1.jpg";
import Augustin2 from "../../assets/addmovie2.jpg";
import Augustin3 from "../../assets/addmovie3.jpg"



const AddModaleMovie = ({ AddMovie }) => {

    const [show, setShow] = useState(false)
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState(1)

    
    const handleClose = () => { setShow(false) }
    const handleShow = () => { setShow(true) }



    return (
        <div className="addcard">

            <span style={{ fontSize: "60px", marginTop: "180px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} onClick={handleShow}>[ + ]</span>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie :</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group >
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter movie title "
                            onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="number"
                            placeholder="Enter movie rating .." min="1" max="5"
                            onChange={(e) => setRating(e.target.value)}/>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                     </Button>
                    <Button variant="primary"
                        onClick={() => { AddMovie({ id: Math.random(), myImage: Augustin1, myImage1: Augustin2, myImage2: Augustin3, title, Rating: rating }); handleClose() }}>
                        Add Movie
                     </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default AddModaleMovie
