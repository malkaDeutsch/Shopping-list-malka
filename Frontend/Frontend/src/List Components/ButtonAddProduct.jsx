import {useState , Fragment} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {addProductWithCategory} from '../ProductsUtils.js'
import { useDispatch } from 'react-redux';

export default function ButtonAddProduct(props) {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd =  async () => {
    if(props.productName!=="")
   await addProductWithCategory(props.productName , props.selectedCategory,comments,dispatch)
    setOpen(false);


  }
  return (
    <Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
הוסף מוצר
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>הוספת מוצר</DialogTitle>
        <DialogContent>
          <DialogContentText>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;אם ברצונך להוסיף הערה, זה המקום:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="הערה"
            type="email"
            fullWidth
            variant="standard"
            // value={""}
            onChange={(e)=> setComments(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button onClick={handleAdd}>הוסף</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}