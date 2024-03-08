
import { Stack, Chip, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  color: #c2c2c2;
`;

const StyledContainer = styled(Container)`
  padding: 20px;
  background-color: #252525;
  border-radius: 10px;
  color: #e46545; /* Cambia el color de la fuente aquí */
  float: left; /* Mueve el contenedor hacia la izquierda */
`;

const StyledChip = styled(Chip)`
  margin-bottom: 10px;
  margin-right: auto; /* Mueve los chips hacia la izquierda */
  clear: both; /* Asegura que los chips no se superpongan con el contenedor */
  border: 2px solid #e46545; /* Cambia el color del borde aquí */
  border-radius: 10px; /* Ajusta el radio de borde según lo desees */
  padding: 8px 12px; /* Ajusta el relleno del chip según lo desees */
  width: 180px;
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const StyledImage = styled.img`
  width: 200px; /* Define el tamaño de la imagen */
  height: auto; /* Altura automática para mantener la proporción */
  display: center; /* Para centrar la imagen horizontalmente */
  margin:  40px; /* Centra la imagen horizontalmente */
  margin-left: center;
`;

function Home() {
  return (

    <>
      <TitleContainer>
        <h1 className='titulo'>Cambio de Turnos</h1>
      </TitleContainer>
      <ImageContainer>
        {/* Aquí puedes poner tu imagen */}
        <StyledImage src="src/assets/Bhp_logo_PNG1-1.png" alt="Descripción de la imagen" />
      </ImageContainer>
      <StyledContainer>
        <Stack direction="column" spacing={2}>
          <StyledChip label="Turno Actual" component={Link} to="#basic-chip" variant="outlined" clickable className="chip" />
          <StyledChip label="Turno Anterior" component={Link} to="#basic-chip" variant="outlined" clickable className="chip" />
          <StyledChip label="Subir Archivo" component={Link} to="/UploadDocument" variant="outlined" clickable className="chip" />
        </Stack>
      </StyledContainer>
      <Container className='container-end' style={{ position: 'fixed', bottom: 0, left: 1200, textAlign: 'rigth', padding: '10px' }}>
        <Stack direction="" spacing={10}>
          <Chip label="Salir" component={Link} to="#basic-chip" variant="outlined" clickable className="chip" />
        </Stack>
      </Container>
    </>
  );
};
export default Home;