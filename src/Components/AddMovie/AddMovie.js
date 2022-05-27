import {Modal, Button} from 'react-bootstrap'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './add.css'


const AddMovie = ({getNewMovie}) => {

    const [show, setShow] = useState(false);
    const [newMovie, setNewMovie] = useState({
          Title: "",
          Description:"",
          Rating: 0,
          PosterURL:"",
         })
    
    const handleClick=()=>{

          if(newMovie.Title){
             getNewMovie(newMovie);
             setNewMovie({
              Title: "",
              Description:"",
              Rating: 0,
              PosterURL:"",  
               });
             handleClose()
              }
          else {alert("Title is required")}
            }
    const handleChange=(e)=>{
         // console.log(e.target.name, e.target.value)
       setNewMovie({...newMovie,[e.target.name]:e.target.value})
        }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
      <Button className='butt' variant="primary" onClick={handleShow}> Add Film</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <input type="text" name="Title" placeholder="Title.." onChange={handleChange}/> 
         <input type="text" name="Description" placeholder="Desc.." onChange={handleChange}/>
         <input type="url" name="PosterURL" placeholder="URL.." onChange={handleChange}/>
         <input type="number" name="Rating" placeholder="Rate.." onChange={handleChange}/>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  
    </div>
  )
}

export default AddMovie
  
