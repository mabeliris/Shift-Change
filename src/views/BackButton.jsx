//Imports
import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function BackButton(){
 //Variables de Estado
   function handleGoBack (){
    // Puedes utilizar window.history para retroceder en la historia del navegador
    window.history.back();
  };

  return (
    <IconButton aria-label="back" onClick={handleGoBack}>
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackButton;

