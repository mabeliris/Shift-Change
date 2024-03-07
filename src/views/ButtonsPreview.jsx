import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const OrangeButton= styled(Button)({
   backgroundColor: '#ed6c04',
})
function ButtonsPreview() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Eliminar
      </Button>
      <OrangeButton variant="contained" endIcon={<SendIcon />}>
        Enviar
      </OrangeButton>
    </Stack>
  );
}
export default ButtonsPreview;