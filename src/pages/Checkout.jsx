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
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import { useSnackbar } from "notistack";
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
const Checkout = () => {
  const classes = useStyles();

  const [address, setAddress] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [productTotalPrice, setProductTotalPrice] = useState(0);
  const [removeItemId, setRemoveItemId] = useState({});
  const { addList, updatelist, removelist, removeAll, list } =
    useContext(CartContext);
  const [open, setOpen] = React.useState(false);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleSnakbarOpen = (msg, vrnt) => {
    let duration;
    if (vrnt === "error") {
      duration = 3000;
    } else {
      duration = 1000;
    }
    enqueueSnackbar(msg, {
      variant: vrnt,
      autoHideDuration: duration,
    });
  };

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
  const validation = () => {
    let isError = false;

    if (!address.trim()) {
      handleSnakbarOpen("Please enter shipping address", "error");
      document.getElementById("address").focus();
      return (isError = true);
    }

    return isError;
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      let err = validation();

      if (err) {
        return;
      } else {
        let uuid = uuidv4();
        let splitId = uuid.split("-");
        let newUUID = splitId.join("");
        let cartData = [];
        list.map((item) => {
          cartData.push({
            name: item.title,
            qty: item.quantity,
            unit_price: item.price,
            sub_total: item.quantity * item.price,
          });
        });
        const cardJSON = JSON.stringify(cartData);
        console.log("cartData", cartData);
        console.log("cartData", cardJSON);
        let data = {
          store_id: "1953_939",
          store_password: "Password100@",
          order_id: newUUID,
          bill_amount: productTotalPrice,
          currency: "IQD",
          cart: cardJSON,
          // cart: [{ name: "Scarf", qty: 1, unit_price: 5000, sub_total: 5000 }],
        };
        console.log("data", data);
        let response = await axios({
          method: "post",
          url: "https://staging-apigw-merchant.fast-pay.iq/api/v1/public/pgw/payment/initiation",
          data: data,
          headers: { "content-type": "application/json" },
        });
        console.log("response", response);
        console.log("response", response);
        console.log("status", response.status);
        console.log("redirect_uri", response.data.data.redirect_uri);
        if (response.status === 200) {
          removeAll();
          window.location.href = response.data.data.redirect_uri;
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <Grid item md={3} style={{ padding: "20px", background: "#f3f3f3" }}>
        <Grid container>
          <Grid item md={12}>
            <p style={{ fontSize: "30px", fontWeight: 500 }}>Order Summary</p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Items {list.length}
            </p>
          </Grid>
          <Grid item xs={6}>
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
              <p style={{ fontSize: "18px", fontWeight: 500 }}>Total Cost</p>
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
            onClick={submit}
          >
            CheckOut
          </Button>
        </div>
      </Grid>
    </div>
  );
};

export default Checkout;
