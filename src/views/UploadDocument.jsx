import BackButton from './BackButton';
import React, { useState } from 'react';
import ButtonUploadFile from './ButtonUploadFile';
import ButtonPreviewFile from './ButtonPreviewFile';
import ReadFile from './ReadFile';
import { useEffect } from 'react';

function UploadDocument() {
    const [fileUploaded, setFileUploaded] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadMessage, setUploadMessage] = useState('');

  function handleFileChange(event) {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(file);    
  } 
  
  function printFile(file) {
  const reader = new FileReader();
  reader.onload = (evt) => {
    console.log(evt.target.result);
    const data= evt.target.result;
  };
  reader.readAsText(file);
}

//crear funcion que reciba el texto
//obtener la informacion del texto  (array u obj)


  useEffect(() => {
   console.log("ARCHIVO", selectedFile)
   if(selectedFile!==null){
    printFile(selectedFile)
   }
   
  }, [selectedFile]);
  
  function handleSubmit(event) {
     event.preventDefault();
     
     setTimeout(() => {
      setFileUploaded(true);
      setUploadMessage('¡Archivo subido correctamente!');
    }, 2000);
  }

  return (
    <>
      <h1>Cambio de turno</h1>
      <form onSubmit={handleSubmit}> 
             
        <ButtonUploadFile handleFileChange={handleFileChange}/>
        <ReadFile setSelectedFile={setSelectedFile} handleFileChange={handleFileChange} />
        {fileUploaded && <p>{uploadMessage}</p>}
        {selectedFile ? <p>Archivo seleccionado: {selectedFile.name}</p> : <p>Ningún archivo seleccionado</p>}
        <BackButton/>
        <ButtonPreviewFile/>
      </form>
      
    </>
  );
}

export default UploadDocument;