import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import{getAllProducts} from '../ProductsUtils.js'
export default function Table(props) {

    const dispatch = useDispatch()
    const [productsList , setProductsList] = useState();
    const [sortedProductByCategories , setSortedProductByCategories] = useState("");

    const getProductsFromServer= async ()=>{
        const resp = await getAllProducts(dispatch);
        setProductsList(resp)
    }
    useEffect(()=>{
            getProductsFromServer()
    },[])
  return (
  <>
  {props.categories?.map((category)=>
          <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{category.name}</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={"hkjkj"}
        label="category"
      >
        {productsList?.map((prod) => 

         {
            if(prod.category=== category.name) 
            
            
            return <MenuItem >{prod.name}&emsp;&emsp;{prod.quantity}</MenuItem>}
        )}
      </Select>
            </FormControl>
            </Box>
  
  
  )}




    </>
  )
}

{/* {props.categories?.map((category) => {
        return (<div>
            <ul>
        {category.name}
        {productsFromStore?.map((product) => {
// if(product.name === category.name)
<li>{product.name}</li>
    })}
    </ul>

    </div>);
    })} {props.categories?.map((category) => {
        return <div>
            <ul>
            {category.name}
        </ul>
        { productsFromStore?.map((product) => {
            return product.name === category.name? <li>{product.name}</li>
        })}
        </div>
    }
    )
    } */}
