import { useState ,useEffect } from 'react';
// import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

// import CollapsibleTable from './CollapsibleTable';
// import CustomizedDialogs from './CustomizedDialogs';

import {getCategoriesList} from '../ProductsUtils'


export default function SelectInput(props) {


    const handleChange = (event) => {
      props.setSelectedCategory(props.categories[event.target.value].name);
      }


    

  return (
    <>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">קטגוריה</InputLabel>
      <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={props.selectedCategory}
      label="category"
      onChange={(e)=> handleChange(e)}
    >
      {props.categories.map((category, index) => (
        <MenuItem value={index}>{category.name}</MenuItem>
      ))}
    </Select>
      </FormControl>
      </Box>
    </>
  )
}
