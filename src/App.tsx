import React from 'react';
import Box from '@mui/material/Box'
// import './App.css';
// import Test from './components/test-ts';
import UserPage from './components/page';

function App() {

  return (
    <Box
      component="form"
      sx={{ backgroundColor: '#F39189', }} // css styling
      // mt={2}
      noValidate
      autoComplete="off"
    >
      <UserPage />
    </Box>
  );
}

export default App;
