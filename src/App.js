import React, { Fragment, useEffect, useState } from 'react';
import Navbar from './Components/Navbar'
import Folderlist from './Components/Folderslist'
import Form from './Components/Form';


function App() {
  const [foldersx, setFolder] = useState({
    
    folder: ''
    
    
  })
  const[folders, setFolders] = useState([])
  const [listUpdated, setListUpdated] = useState(false)
 
  useEffect(()=>{
    const getFolders=()=>{
        fetch("http://localhost:9090/api")
        .then(res => res.json())
        .then(res => setFolders(res))
        
    }
    getFolders()
    setListUpdated(false)
   
  },[listUpdated])
  return (
    <Fragment>
      <Navbar brand="Ensolvers app"></Navbar>
      <div className='container'>
        <div className='row'>
          <div className='col-7'></div>
            <h1 style={{textAlign:'center'}}>Folder List</h1>
            <Folderlist  folders={folders}   setListUpdated={setListUpdated} />
          <div className='row-2'></div>
          <Form foldersx={foldersx} setFolder={setFolder}/>
        </div>
      </div>


    </Fragment>
  );
}

export default App;
