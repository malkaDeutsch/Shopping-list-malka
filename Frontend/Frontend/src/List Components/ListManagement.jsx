import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';

import SelectInput from './SelectInput'
import InputProduct from './InputProduct'
import ButtonAddProduct from './ButtonAddProduct';
// import ProductsTable from './ProductsTable';
import {getCategoriesList} from '../ProductsUtils.js'
import { useSelector } from 'react-redux';
import Table from './Table.jsx';

export default function ListManagement() {

  const [selectedCategory, setSelectedCategory] = useState("כללי");
  const [categories, setCategories] = useState([]);
  const [productName , setProductName] = useState("");




  const getCategories = async ()=>{
    const response =  await getCategoriesList();
    console.log(response);
    const jsonArray = Object.values(response);
    console.log("jsonArray:  ",jsonArray);
    setCategories(jsonArray);
  }

  useEffect(()=>{
    getCategories();
  },[])


  return (
    <>
  
 
    <h2>רשימת קניות</h2>
    <SelectInput categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
    <InputProduct   productName={productName} setProductName={setProductName} />
    <ButtonAddProduct  selectedCategory={selectedCategory} productName={productName} />
    <Table  categories={categories}   />

   
    </>
  )
}
