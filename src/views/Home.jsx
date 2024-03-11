import { useState, useEffect } from 'react'; // Importar los hooks useState y useEffect
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
  width: 400px; /* Define el tamaño de la imagen */
  height: auto; /* Altura automática para mantener la proporción */
  display: center; /* Para centrar la imagen horizontalmente */
  margin:  40px; /* Centra la imagen horizontalmente */
  margin-left: center;
`;

function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Actualizar la fecha cada segundo

    return () => clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonta
  }, []); // Dependencia vacía para que el useEffect solo se ejecute una vez

  return (
    <>
      <TitleContainer>
      <h1 className='titulo' style={{ textAlign: 'center',marginTop:'20px', marginLeft: '350px', marginBottom: '70px', color: '#c2c2c2' }}>Cambio de Turnos</h1>    
      </TitleContainer>
      <div style={{ display: 'flex', alignItems: 'center' }}>
  <StyledContainer>
    <Stack direction="column" spacing={2}>
      <StyledChip label="Turno Actual" component={Link} to="#basic-chip" variant="outlined" clickable className="chip" style={{
        fontSize: '24px', color: '#d9d9d9', borderColor: '#E35302',
        borderWidth: '2px', width: '250px', padding: '30px 0px'
      }} />
      <StyledChip label="Turno Anterior" component={Link} to="#basic-chip" variant="outlined" clickable className="chip" style={{
        fontSize: '24px', color: '#d9d9d9', borderColor: '#E35302',
        borderWidth: '2px', width: '250px', padding: '30px 0px'
      }} />
      <StyledChip label="Subir Archivo" component={Link} to="/UploadDocument" variant="outlined" clickable className="chip" style={{
        fontSize: '24px', color: '#d9d9d9', borderColor: '#E35302',
        borderWidth: '2px', width: '250px', padding: '30px 0px'
      }} />
    </Stack>
  </StyledContainer>
  <ImageContainer style={{ marginLeft: '20px' }}>
    <StyledImage src="src/assets/Bhp_logo_PNG1-1.png" alt="Descripción de la imagen" style={{ direction: 'column', marginBottom: '50px' }} />
  </ImageContainer>
</div>

      <Container className='container-end' style={{ position: 'fixed', bottom: 30, left: 1000, textAlign: 'rigth', padding: '10px' }}>
        <Stack direction="" spacing={0}>
          <Chip label="Salir" component={Link} to="#basic-chip" variant="outlined" clickable className="chip" style={{
            fontSize: '24px', color: '#d9d9d9', borderColor: '#E35302',
            borderWidth: '2px', width: '250px',padding: '30px 0px'
          }} />
          
        </Stack>
      </Container>
      <p style={{ fontSize: '24px', color: '#c2c2c2',  position: 'fixed', top:'570px', bottom: 10, left: 950, textAlign: 'rigth' }}>Fecha: {currentDate.toLocaleDateString()} Hora: {currentDate.toLocaleTimeString()}</p>
    </>
  );
};

export default Home;
