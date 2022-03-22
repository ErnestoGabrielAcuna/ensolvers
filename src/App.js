import React, { Fragment, useEffect, useState } from 'react';
import Navbar from './Components/Navbar'
import Folderlist from './Components/Folderslist'


function App() {
  const[folders, setFolders] = useState([])
  useEffect(()=>{
    const getFolders=()=>{
        fetch("http://localhost:9090/api")
        .then(res => res.json())
        .then(res => setFolders(res))
        console.log(folders)
    }
    getFolders()
  },[])
  return (
    <Fragment>
      <Navbar brand="Ensolvers app"></Navbar>
      <div className='container'>
        <div className='row'>
          <div className='col-7'></div>
            <h1 style={{textAlign:'center'}}>Folder List</h1>
            <Folderlist folders={folders} setFolders={setFolders}/>
          <div className='col-5'></div>
        </div>
      </div>


    </Fragment>
  );
}

export default App;
