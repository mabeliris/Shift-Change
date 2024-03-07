import './App.css'
import Home from './views/Home'; 
import UploadDocument from './views/UploadDocument'
import Preview from './views/Preview'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MonitorView from './views/MonitorView';

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>          
          <Route path="UploadDocument" element={<UploadDocument />}/>
          <Route path="Preview" element={<Preview />} />
          <Route path="Monitor" element={<MonitorView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
  
}
export default App
