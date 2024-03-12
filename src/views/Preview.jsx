//Imports
import React from 'react';
import ButtonsPreview from "./ButtonsPreview";
import BackButton from './BackButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Preview({ data }) {
  console.log(data, "AQUIIIII")

  const filtroDatos = data.filter(valor=>(valor.operador !== '' || valor.ubicacion !== '' || valor.bus !== ''));

  return (
    <>
      <h1>Turno: </h1>
      <TableContainer component={Paper} style={{ maxHeight: '400px', overflow: 'scroll'}} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell align="right">Operador</TableCell>
              <TableCell align="right">Bus</TableCell>
              <TableCell align="right">Ubicación</TableCell>
              <TableCell align="right">Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtroDatos.map((datos) => (
              <TableRow
                key={datos.operador}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{datos.operador}</TableCell>
                <TableCell align="right">{datos.bus}</TableCell>
                <TableCell align="right">{datos.ubicacion}</TableCell>
                <TableCell align="right">{
                  function (){
                    console.log(datos);
                    if (datos.operador.trim() !== '' && datos.ubicacion.trim() !== '' && datos.bus.trim() !== ''){
                      return <span>Check</span>
                    }
                    else {
                      return <span>Alerta</span>
                    }
                  }()
                }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <BackButton />
      <ButtonsPreview />
    </>
  );
}

export default Preview;
