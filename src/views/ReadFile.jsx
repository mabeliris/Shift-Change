//cargar un archivo 
//se muestra archivo seleccionado

//leer el archivo .dat

//seleccionar columnas
// previsualiar el archivo como tabla al oprimir el boton 
//la tabla corresponde a un componente tabla de mui 
//se vera la tabla en el componente Preview


import React, { useState } from 'react';


function ReadFile() {
      
     

     const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        // procesar los datos del archivo .dat según su estructura
        // y convertirlos en un formato que puedas usar en la tabla.
        // Por ejemplo, si los datos son texto, puedes parsearlos como una cadena.
        // Si son binarios, debes interpretarlos adecuadamente.

        // Ejemplo: Supongamos que los datos son texto y están separados por líneas:
        const data = new TextDecoder().decode(bufferArray).split('\n');
        console.log(bufferArray);
        resolve(data);
        this.setState({ file: data });
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      // Aquí puedes hacer algo con los datos leídos, como mostrarlos en la tabla.
      //tabla mui
    });


  

  return (
    <div>
      
    </div>
  );
}

export default ReadFile;

