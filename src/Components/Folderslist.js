import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import  Modal  from "react-bootstrap/Modal";

const Folderslist = ({ folders, setListUpdated }) => {
    const [task, setTask] = useState([])

    const getTask = (id) => {
        fetch("http://localhost:9090/api/task"+id.target.id)
            .then(res => res.json())
            .then(res => setTask(res))
            setShow(true)
    }
    const saveCheck=(id)=>{
        fetch("http://localhost:9090/api/task"+id.target.id,{
            'method': 'PUT'
            
        })
            .then(res => res.json())
            .then(res => setTask(res))
            setShow(true)
    }
    const handleDelete = (id) => {
       

        fetch('http://localhost:9090/api/' + id.target.id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => console.log(res))

        setListUpdated(true)

    }
    const[show, setShow]= useState(false);
    const handleClose = ()=> setShow(false);
    const handleShow=()=>setShow()

    const modal = (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>To-Do List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    
                    <table className="table1">
                    <thead>
                        
    
                    </thead>
                    <tbody>
                        {
                            task.map(task => (
                                <tr key={task.idtasks}>
    
                                    <td> 
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            onClick={saveCheck}
                                            defaultValue=""
                                            id={task.idtasks}
                                            defaultChecked={task.taskscheck}
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            {task.task}
                                        </label>
                                    </div>
                                    </td>
                                   
                                    <td >
                                        <a id={task.idtasks} href="#" >Edit</a>
                                    </td>
                                </tr>
                            ))
    
                        }
                    </tbody>
                </table> 
                }

            </Modal.Body>
        </Modal>
    );

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>

                        <th> Folders</th>

                    </tr>

                </thead>
                <tbody>
                    {
                        folders.map(folder => (
                            <tr key={folder.idfolders}>

                                <td> {folder.folder}</td>
                                <td >
                                    <a id={folder.idfolders} href="#" onClick={getTask} >View Items</a>
                                </td>
                                <td >
                                    <a id={folder.idfolders} onClick={handleDelete} href="#" >Remove</a>
                                </td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>


            {modal}
        </div>

    );
}

export default Folderslist;

