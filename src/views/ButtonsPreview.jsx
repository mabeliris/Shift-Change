import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const OrangeButton= styled(Button)({
   backgroundColor: '#ed6c04',
   fontFamily:'Roboto',
     '&:hover': {
    backgroundColor: '#5b5b5b',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
})

const DeleteButton= styled(Button)({
   
   borderColor: '#ed6c04',
   fontFamily:'Roboto',
     '&:hover': {
    backgroundColor: '#5b5b5b',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#d9d9d9',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
})

function ButtonsPreview() {
  return (
    <Stack direction="row" spacing={2}>
      <Link to="/UploadDocument">
      <DeleteButton variant="outlined" startIcon={<DeleteIcon />}>
        Eliminar
      </DeleteButton>
      </Link>
      <OrangeButton variant="contained" endIcon={<SendIcon />}>
        Enviar
      </OrangeButton>
    </Stack>
  );
}
export default ButtonsPreview;