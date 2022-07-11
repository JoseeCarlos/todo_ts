import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const NewTask = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [task, setTask] = useState({
        id: Math.random().toString(36).substring(2, 15),
        name: '',
        description: '',
        completed: false,
        steps: []
    });
    
    const addTask = (task: any) => {
        var data = JSON.parse(localStorage.getItem("todo")!);
        if(name!=='' && description!==''){

            task.name = name
            task.description = description
            data.push(task);
            console.log(data)
            localStorage.setItem("todo", JSON.stringify(data));
            window.location.reload();
        }
        else
            alert('Ingrese un nombre y una descripción')
        
    }

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Agregar Nuevo Task
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Agrega Nuevo Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label htmlFor="">Nombre</label>
            <input type="text" onChange={(e) => setName(String(e.target.value)) } />
            <label htmlFor="">Descripcion</label>
            <textarea name="" id="" onChange={(e) => setDescription(String(e.target.value))}></textarea>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={()=> addTask(task)}>Guardar</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

