import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Button3 = styled(Button)({
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

function ButtonPreviewFile() {
  return (
    <Stack spacing={2} direction="row">
      <Button3 variant="contained">Previsualizar</Button3>
    </Stack>
  );
}

export default ButtonPreviewFile;