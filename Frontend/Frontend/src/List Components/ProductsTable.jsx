// import {useState, useEffect , Fragment, useCallback} from 'react';
// import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// import {getAllProducts} from '../ProductsUtils.js'
// import { useDispatch } from 'react-redux';

// function createData( categories, productByCategory) {
//   return {
//     name: categories,
//     history: productByCategory?.map((p) => {
//       return {
//         name: p.name,
//         quantity: p.quantity,
//         comments: p.comments}
//     })
//   };
// }

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] =useState(false);


//   return (
//     <Fragment>
//       {/* כאן מתחיל חלוקת הקטגוריות */}
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {/* {row.name} */}
//         </TableCell>
//         {/* <TableCell align="right">{row.history.name}</TableCell>
//         <TableCell align="right">{row.history.quantity}</TableCell>
//         <TableCell align="right">{row.history.comments}</TableCell> */}
//       </TableRow>
//       {/* כאן מסתיים חלוקת הקטגוריות */}
//                   {/* כאן מתחיל תוכן הקטגוריה */}
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//             {props.categories?.map((c) => {
//                   return <Typography variant="h6" gutterBottom component="div">
//                 {c.name}
//                   </Typography>
//                 })}
              
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>שם המוצר</TableCell>
//                     <TableCell>כמות</TableCell>
//                     <TableCell align="right">הערה</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row?.history.map((historyRow,index) => (
//                     <TableRow key={index}>
//                       <TableCell component="th" scope="row">
//                         {historyRow.name}
//                       </TableCell>
//                       <TableCell>{historyRow.quantity}</TableCell>
//                       <TableCell align="right">{historyRow.comments}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//             {/* כאן נגמר תוכן הקטגוריה */}
//           </Collapse>
//         </TableCell>
//       </TableRow>
      
//     </Fragment>
//   );
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };
// const rows = (categories, products) => {
//   return categories.map((category) => {
//     createData(category.name, products?.filter((product) => product.category === category))
//   })};

// export default function ProductsTable(props) {
//  const dispatch = useDispatch()
//   const [productsList , setProductsList] = useState([]);
//   const productsFromStore = useSelector((store) => store.products);
//   const [sortedProductByCategories , setSortedProductByCategories] = useState("");


//   const getProductsList = async ()=>{
//     const response = await getAllProducts(dispatch);
//     console.log("list before cast: ", response)
//     const jsonProducts = Object.values(response);
//     console.log("jsonArray:  ",jsonProducts);
//     setProductsList(jsonProducts);
//   }
//   useEffect(()=>{
//     getProductsList();
//   },[])
//   const renderRows = useCallback(() => {
//     return rows(props.categories, productsFromStore).map((row) => (
//       <Row key={row?.name} row={row} />
//     ))
//   }, [props.categories, productsFromStore])
//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell>קטגוריה</TableCell>
//             <TableCell align="right">כמות</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {renderRows()}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }