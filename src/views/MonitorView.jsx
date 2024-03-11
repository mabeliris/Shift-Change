//Imports

import { useState } from "react";
import { useEffect } from 'react';

function MonitorView({data}){
 //Variables de Estado
 const [dataShow, setDataShow] = useState([]);
 //Funciones 
 useEffect(() => {
    console.log("ARCHIVO de monitor", data)
    let arrayDeData=data.slice(0,21)
    setDataShow(arrayDeData);

    
   }, []);

 //Return (seria como el html)
   return(
      <> 
       <h1>Este es  el monitor</h1>
        {dataShow.map((tabla) => (
            <h1 key= {tabla}>{tabla}</h1>
          ))}
      </>
   );

}

export default MonitorView;