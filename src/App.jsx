import './App.css'
import Home from './views/Home';
import UploadDocument from './views/UploadDocument';
import Preview from './views/Preview';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MonitorView from './views/MonitorView';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {useState} from 'react';

// Define el tema personalizado con el fondo deseado
const theme = createTheme({
  palette: {
    background: {
      default: '#252525'
    },
  },
});

function App() {

  const [data, setData] = useState (null);



  return (
    

    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reinicia los estilos del navegador */}
      {/* Tu contenido de la aplicación aquí */
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="UploadDocument" element={<UploadDocument setData= {setData}/>} />
              <Route path="/Preview" element={<Preview data={data} />} />
              <Route path="/Monitor" element={<MonitorView data={data} />} />
            
          </Routes>
        </BrowserRouter>
      }
    </ThemeProvider>
  )

};
export default App
