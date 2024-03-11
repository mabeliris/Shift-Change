import BackButton from './BackButton';
import React, { useState, useEffect } from 'react';
import ButtonUploadFile from './ButtonUploadFile';
import ButtonPreviewFile from './ButtonPreviewFile';
import ReadFile from './ReadFile';
import { Link } from 'react-router-dom';

function UploadDocument({setData}) {
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
      const data = evt.target.result;
      getColumns(data);
    };
    reader.readAsText(file);
  }

  function getColumns(data) {
    const lineas = data.split('\n');

    const datosLineal = []
    let seccionDatos=false;
    lineas.forEach(linea => {
      if (linea.includes('Oper Alineado')) {
        seccionDatos = true;
        return;
      }

      if (seccionDatos && linea.trim() !== '') {
        console.log(linea);
        const resultadoLinea = {
        //  turno : '', 
          operador:'',
          ubicacion:'',
          bus : '',
        }
        //resultadoLinea.turno=linea.slice(18,20)  
        resultadoLinea.operador= linea.slice(9,27)
        resultadoLinea.ubicacion=linea.slice(98,114)
        resultadoLinea.bus=linea.slice(114,124)
        datosLineal.push(resultadoLinea)
        // agregar un trim para eliminar espacios
        // depurar el objeto 
        // mostrar información
      }     
      //        
    });
   console.log(datosLineal)
   setData(datosLineal)

    
  }

  useEffect(() => {
    console.log("ARCHIVO", selectedFile)
    if (selectedFile !== null) {
      printFile(selectedFile);
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
        <ButtonUploadFile handleFileChange={handleFileChange} />
        <ReadFile setSelectedFile={setSelectedFile} handleFileChange={handleFileChange} />
        {fileUploaded && <p>{uploadMessage}</p>}
        {selectedFile ? <p>Archivo seleccionado: {selectedFile.name}</p> : <p>Ningún archivo seleccionado</p>}
        <BackButton />
        <Link to="/Preview">
         <ButtonPreviewFile />
        </Link>
        
      </form>
    </>
  );
}

export default UploadDocument;

//LDW0911 OPER1              20083231   NINGUNA               NINGUNA    Demora     SIN OPERADOR   SLM3175N        BUS01     COMEDOR CM2  