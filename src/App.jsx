import './App.css'
import Home from './views/Home';
import UploadDocument from './views/UploadDocument'
import Preview from './views/Preview'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MonitorView from './views/MonitorView';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Define el tema personalizado con el fondo deseado
const theme = createTheme({
  palette: {
    background: {
      default: '#252525'
    },
  },
});

function App() {

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reinicia los estilos del navegador */}
      {/* Tu contenido de la aplicación aquí */
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="UploadDocument" element={<UploadDocument />} />
            <Route path="Preview" element={<Preview />} />
            <Route path="Monitor" element={<MonitorView />} />

          </Routes>
        </BrowserRouter>}
    </ThemeProvider>



  )

};
export default App
