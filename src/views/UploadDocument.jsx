import BackButton from './BackButton';
import React, { useState, useEffect } from 'react';
import ButtonUploadFile from './ButtonUploadFile';
import ButtonPreviewFile from './ButtonPreviewFile';
import ReadFile from './ReadFile';

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
      const data = evt.target.result;
      getColumns(data);
    };
    reader.readAsText(file);
  }

  function getColumns(data) {
    const lineas = data.split('\n');

    const operadores = [];
    const buses = [];
    const ubicaciones = [];
    let seccionDatos = false;

    lineas.forEach(linea => {
      if (linea.includes('Oper Alineado')) {
        seccionDatos = true;
        return;
      }

      if (seccionDatos && linea.trim() !== '') {
        const columnas = linea.split(/[\s_:.]{2,}/); // Split por dos o más espacios en blanco
        const operador = columnas[0];
        const ubicacion = columnas[7];
        const bus = columnas[7];

        operadores.push(operador);
        ubicaciones.push(ubicacion);
        buses.push(bus);
      }
    });

    console.log("Operadores:", operadores);
    console.log("Ubicaciones:", ubicaciones);
    console.log("Buses:", buses);
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
        <ButtonPreviewFile />
      </form>
    </>
  );
}

export default UploadDocument;
