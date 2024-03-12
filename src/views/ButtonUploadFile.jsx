import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Button2 = styled(Button)({
  backgroundColor: '#ed6c04',
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
});

function ButtonUploadFile({ handleFileChange }) {
  return (
    <Button2
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Subir Archivo
      <VisuallyHiddenInput type="file" onChange={handleFileChange}/>
    </Button2>
  );
}
export default ButtonUploadFile;


    
