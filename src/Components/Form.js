import React from 'react';

const Form = ({ foldersx, setFolder }) => {

    const handleChange = e => {
        setFolder({
            ...foldersx,
            [e.target.name]: e.target.value
        })
    }
    console.log(foldersx)

    let { folder } = foldersx

    console.log(folder)

    const handleSubmit = () => {

        //validación de los datos
        if (folder === '') {
            alert('Defina el nombre de la nueva carpeta')
            return
        }

        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(foldersx)
        }
        fetch('http://localhost:9090/api', requestInit)
            .then(res => res.json())
            .then(res => console.log(res))

        //reiniciando state de libro
        setFolder({
            folder: '',

        })



    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Create Folder</label>
                <input  name="folder" onChange={handleChange} type="text" id="title" className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;