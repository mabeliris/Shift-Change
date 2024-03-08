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
    //console.log(evt.target.result);
    const data= evt.target.result;
    getColumns(data)
  };
  reader.readAsText(file);
}

//crear funcion que reciba el texto
//obtener la informacion del texto  (array u obj)
// tenemos 3 objetos según la Mabe operador, ubicación y bus
// Las claves de 
function getColumns (data){
  const lineas = data.split('\n');

  // Inicializamos los arreglos para almacenar las columnas y los arreglos están vacíos

  const operadores = [];
  const buses = [];
  const ubicaciones = [];
  let seccionDatos = false;
  // Recorremos cada línea y extraemos las tres columnas
  lineas.forEach(linea => {
    console.log(linea)
    // identificar los 3 datos más que pensar en separar columnas
    // Verificamos si hemos llegado a la sección de datos
/*if (linea.includes('Camiones:') || linea.includes
('Auxiliar:')) {
seccionDatos = true;
return; // Pasamos a la siguiente línea sin pro
cesarla*/
} 
)  
}

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