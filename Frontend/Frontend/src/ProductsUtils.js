import axios from "axios";


const url = 'http://localhost:3000'


const getCategoriesList = async () => {
    const response = await axios.get(`${url}/categories`)
    console.log(response.data);
    return response.data;
  }

// const getTotal = async (dispatch) => {
//     const response = await axios.get(`${url}/total`)
//     console.log(response.data);
//     return response.data;
//   }

const getAllProducts = async (dispatch) => {
    const response = await axios.get(`${url}/products`)
    console.log("data:",response.data);
    // dispatch({type: "SET_TOTAL", payload:response.data.length});
    dispatch({type: "SET_PRODUCTS", payload:response.data});
    return response.data;
}

const addProductWithCategory=async (name,category, comments,dispatch) =>{
    const response = await axios.post(`${url}/products`,{name,category,comments}).then(async (response) => {
        console.log(response.data);
       await getAllProducts(dispatch);
       })





}
export {getAllProducts , addProductWithCategory  , getCategoriesList}