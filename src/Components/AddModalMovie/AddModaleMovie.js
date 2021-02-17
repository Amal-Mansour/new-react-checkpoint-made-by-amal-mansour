
import React, { useState } from 'react'
import { Form, Modal, Button, } from "react-bootstrap";
import Regard from  "../../assets/regarde moi.jpg";
import Millefeuille from  "../../assets/millefeulle.jpg";
import Zeineb from "../../assets/zeineb.jpg";
// import Augustin1  from "../../assets/Saint_August.jpg";
// import Augustin2 from  "../../assets/Saint_Augusti.jpg";
// import Augustin3 from "../../assets/Saint_d'Augustin.jpg"

import './AddModaleMovie.css'

const AddModaleMovie = ({ AddMovie }) => {

    const [show, setShow] = useState(false)
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState(1)

    const handleClose = () => { setShow(false) }
    const handleShow = () => { setShow(true) }
   
    

    return (   
        <div  className='styleCard' >

            <span style={{ fontSize: "45px", cursor: "pointer",display:"flex" ,flexDirection:"column",justifyContent:"center" ,alignItems:"center"}} onClick={handleShow}>[ + ]</span>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie :</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group >
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter movie title "
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="number"
                            placeholder="Enter movie rating .." min="1" max="5"
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary"
                        onClick={() => { AddMovie({ id: Math.random(), myImage:Regard ,myImage1:Millefeuille,myImage2:Zeineb,title, Rating:rating }); handleClose() }}>
                        Add Movie
            </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default AddModaleMovie
