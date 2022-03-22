import React from "react";
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Folderslist = ({ folders, setFolders }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:9090/api", {
            'method':'POST',
            'headers':{'Content-Type': 'application/json'},
            'body':JSON.stringify(data)
        })
        .then(resp=>resp.json())
        .then(json=>{
            console.log(json);
            setFolders(json);
        })
    };
    console.log(errors);
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
                        folders.map(item => (
                            <tr key={item.idfolders}>

                                <td> {item.folder}</td>
                                <td >
                                    <a href="#" >View Items</a>
                                </td>
                                <td >
                                    <a href="#" >Remove</a>
                                </td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Control type="text" placeholder="New Folder" {...register("folder", {})} style={{ maxWidth: "350px" }} />
                <Button variant="primary" type="submit">
                Create
                </Button>

            </Form>
            

        </div>

    );
}

export default Folderslist;

