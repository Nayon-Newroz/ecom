import React, { useState, useEffect, useContext } from "react";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { CartContext } from "../context/CartContext";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const useStyles = makeStyles({
  input: {
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
});
const CartItems = () => {
  const classes = useStyles();

  const [address, setAddress] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [productTotalPrice, setProductTotalPrice] = useState(0);
  const [removeItemId, setRemoveItemId] = useState({});
  const { addList, updatelist, removelist, list } = useContext(CartContext);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setRemoveItemId("");
  };

  const removeDialog = (id) => {
    handleClickOpen();
    setRemoveItemId(id);
  };
  const modifyArray = (value, row) => {
    console.log("value", value);
    console.log("row", row);

    let newObject;
    if (!value) {
      console.log("if");
      newObject = { ...row, quantity: 0 };
    } else {
      console.log("else");
      newObject = { ...row, quantity: parseInt(value) };
    }
    console.log("newObject", newObject);
    updatelist(newObject);
  };
  const increaseQuantity = (qty, row) => {
    let newqty = parseInt(qty) + 1;
    console.log("qty", qty, "newqty", newqty);
    modifyArray(newqty, row);
  };
  const decreaseQuantity = (qty, row) => {
    let newqty = parseInt(qty) - 1;
    console.log("qty", qty, "newqty", newqty);
    if (newqty > 0) {
      modifyArray(newqty, row);
    }
  };
  const fnTotalPrice = () => {
    let total = 0;

    list.map((item) => {
      return (total += item.quantity * item.price);
    });
    console.log("total", total);
    setProductTotalPrice(total);
  };
  useEffect(() => {
    fnTotalPrice();
  }, [list]);
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={9} style={{ padding: "20px", background: "#fff" }}>
            <Grid container>
              <Grid item md={6}>
                <p style={{ fontSize: "30px", fontWeight: 500 }}>
                  Shopping Cart
                </p>
              </Grid>
              <Grid item md={6}>
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: 500,
                    textAlign: "right",
                  }}
                >
                  {list.length} Items
                </p>
              </Grid>
            </Grid>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Product Details</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Total</TableCell>
                    <TableCell align="right">Remove</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list &&
                    list.map((row, i) => (
                      <TableRow
                        key={i}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>
                          <img
                            src={row.img}
                            alt=""
                            width="80px"
                            height="80px"
                          />
                        </TableCell>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>
                          {" "}
                          <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Grid>
                              <IconButton
                                onClick={() =>
                                  decreaseQuantity(row.quantity, row)
                                }
                              >
                                <RemoveIcon />
                              </IconButton>
                            </Grid>
                            <Grid>
                              {" "}
                              <TextField
                                id="outlined-basic"
                                className={classes.input}
                                variant="outlined"
                                size="small"
                                style={{ width: "50px" }}
                                type="number"
                                value={row.quantity}
                                onChange={(e) => {
                                  modifyArray(e.target.value, row);
                                }}
                              />
                            </Grid>
                            <Grid>
                              <IconButton
                                aria-label="AddIcon"
                                onClick={() =>
                                  increaseQuantity(row.quantity, row)
                                }
                              >
                                <AddIcon />
                              </IconButton>
                            </Grid>
                          </Grid>
                        </TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">
                          {row.quantity * row.price}
                        </TableCell>
                        <TableCell align="right">
                          <IconButton
                            aria-label="delete"
                            color="secondary"
                            onClick={() => removeDialog(row.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <br />
            <Button
              variant="contained"
              disableElevation
              style={{
                background: "none",
                textTransform: "none",
                fontSize: "16px",
                color: "#3498DB",
              }}
              component={Link}
              to="/"
              startIcon={<KeyboardBackspaceIcon fontSize="large" />}
            >
              Continue Shopping
            </Button>
          </Grid>
          <Grid item md={3} style={{ padding: "20px", background: "#f3f3f3" }}>
            <Grid container>
              <Grid item md={12}>
                <p style={{ fontSize: "30px", fontWeight: 500 }}>
                  Order Summary
                </p>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={6}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Items {list.length}
                </p>
              </Grid>
              <Grid item md={6}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    textAlign: "right",
                  }}
                >
                  TK. {productTotalPrice}
                </p>
              </Grid>
            </Grid>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Shipping Address
              </p>
              <TextField
                style={{ marginBottom: "20px" }}
                id="address"
                size="small"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Promo Code
              </p>
              <TextField
                style={{ marginBottom: "20px" }}
                id="promo-code"
                size="small"
                fullWidth
                variant="outlined"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <Button
                variant="contained"
                disableElevation
                style={{
                  background: "#FC2861",
                  textTransform: "none",
                  fontSize: "16px",
                  color: "#fff",
                  width: "180px",
                  // margin: "auto",
                  // display: "block",
                  textAlign: "center",
                }}
              >
                Apply
              </Button>
            </div>
            <br />
            <hr />
            <div>
              <Grid container>
                <Grid item md={6}>
                  <p style={{ fontSize: "18px", fontWeight: 500 }}>
                    Total Cost
                  </p>
                </Grid>
                <Grid item md={6}>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      textAlign: "right",
                    }}
                  >
                    Tk. {productTotalPrice}
                  </p>
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                disableElevation
                style={{
                  // background: "#FC2861",
                  textTransform: "none",
                  fontSize: "16px",
                  color: "#fff",

                  // margin: "auto",
                  // display: "block",
                  textAlign: "center",
                  marginTop: "6px",
                }}
                component={Link}
                to="message"
              >
                CheckOut
              </Button>
            </div>
          </Grid>
        </Grid>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Remove Alart?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to remove this Item ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} style={{ color: "#AAB7B8" }}>
              Cancel
            </Button>
            <Button
              autoFocus
              onClick={() => {
                removelist(removeItemId);
                handleClose();
              }}
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};

export default CartItems;
