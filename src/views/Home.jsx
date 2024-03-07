import { Stack, Chip, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="title-container">
        <h1 className='titulo'>Cambio de Turnos</h1>
      </div>
      <Container className='container'>
        <Stack direction="column" spacing={2}>
          <Chip label="Turno Actual" component={Link} to="#basic-chip" variant="outlined" clickable className="chip" />
          <Chip label="Turno Anterior" component={Link} to="#basic-chip" variant="outlined" clickable className="chip" />
          <Chip label="Subir Archivo" component={Link} to="/UploadDocument" variant="outlined" clickable className="chip" />
        </Stack>
      </Container>
    </>
  );
};

export default Home;