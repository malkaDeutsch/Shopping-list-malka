import { useState }  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputProduct(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="שם המוצר" variant="filled" required onChange={(e)=> props.setProductName(e.target.value) }/>
    </Box>
  );
}