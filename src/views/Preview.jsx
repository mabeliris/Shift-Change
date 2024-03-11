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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Preview({data}) { 
  console.log (data,"AQUIIIII")


  return (
    <>
      <h1>Este es vista previa</h1>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Operdor</TableCell>
            <TableCell align="right">Bus</TableCell>
            <TableCell align="right">Ubicación</TableCell>
            <TableCell align="right">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((datos) => (
            <TableRow
              key={datos.operador}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {datos.operador}
              </TableCell>
              <TableCell align="right">{datos.operador}</TableCell>
              <TableCell align="right">{datos.bus}</TableCell>
              <TableCell align="right">{datos.ubicacion}</TableCell>
              <TableCell align="right">{datos.bus}</TableCell>
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
        