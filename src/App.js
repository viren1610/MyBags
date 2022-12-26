import {  Button, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect } from 'react';
import theme from './Styles/theme';
import Appbarfn from './Components/AppBar';

function App() {
useEffect (()=>{
document.title="Home"
},[])

  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="xl" sx={{background:"#fff"}}>
      <Appbarfn/>





    <Button variant='contained' size='large'>Text</Button>
    </Container>

    </ThemeProvider>
   


  );
}

export default App;
