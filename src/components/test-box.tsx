import * as React from 'react';
import Box from '@mui/material/Box';

const TestBox = ()=> {
  return (
    <Box
      sx={{
        width: '90%',
        height: 150,
        textAlign: 'center',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7]},
      }}>
    </Box>
  )
}

export default TestBox