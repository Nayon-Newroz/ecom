import React, { useContext } from "react";
import Desktop from "../assets/images/Desktop.jpg";
import Laptop from "../assets/images/Laptop.jpg";
import Samsung from "../assets/images/Samsung.jpg";
import Ipad from "../assets/images/Ipad.jpg";
import Iphone from "../assets/images/Iphone.png";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { CartContext } from "../context/CartContext";

import Container from "@mui/material/Container";

import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: "center",
    width: "95%",
    margin: "auto",
    background: "#fff",
    padding: "20px 10px",
    borderRadius: "10px",
    boxSizing: "border-box",
    transition: ".5s",
    "&:hover": {
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
  cardButton: {
    background: "#FC2861 !important",
    textTransform: "none !important",
    fontSize: "16px",
    color: "#fff !important",
    margin: "auto",
    display: "block",
    textAlign: "center",
    // borderRadius: "0px",
    // borderRadius: "10px !important",
  },
}));

const Product = () => {
  const classes = useStyles();
  const data = [
    {
      id: 1,
      title: "Hp Laptop",
      price: 55000,
      quantity: 1,
      des: " There are many variations of items.",

      img: Laptop,
    },
    {
      id: 2,
      title: "Samsung Phone",
      price: 70000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Samsung,
    },
    {
      id: 3,
      title: "Ipad Pro",
      price: 60000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Ipad,
    },
    {
      id: 4,
      title: "Desktop Computer",
      price: 80000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Desktop,
    },
    {
      id: 5,
      title: "Iphone 13 pro",
      price: 120000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Iphone,
    },
    {
      id: 6,
      title: "Hp Laptop",
      price: 55000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Laptop,
    },
    {
      id: 7,
      title: "Samsung Phone",
      price: 70000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Samsung,
    },
    {
      id: 8,
      title: "Ipad Pro",
      price: 60000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Ipad,
    },
    {
      id: 9,
      title: "Desktop Computer",
      price: 80000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Desktop,
    },
    {
      id: 10,
      title: "Iphone 13 pro",
      price: 120000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Iphone,
    },
    {
      id: 11,
      title: "Hp Laptop",
      price: 55000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Laptop,
    },
    {
      id: 22,
      title: "Samsung Phone",
      price: 70000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Samsung,
    },
    {
      id: 13,
      title: "Ipad Pro",
      price: 60000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Ipad,
    },
    {
      id: 14,
      title: "Desktop Computer",
      price: 80000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Desktop,
    },
    {
      id: 15,
      title: "Iphone 13 pro",
      price: 120000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Iphone,
    },
    {
      id: 16,
      title: "Hp Laptop",
      price: 55000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Laptop,
    },
    {
      id: 17,
      title: "Samsung Phone",
      price: 70000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Samsung,
    },
    {
      id: 18,
      title: "Ipad Pro",
      price: 60000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Ipad,
    },
    {
      id: 19,
      title: "Desktop Computer",
      price: 80000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Desktop,
    },
    {
      id: 20,
      title: "Iphone 13 pro",
      price: 120000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Iphone,
    },
    {
      id: 21,
      title: "Hp Laptop",
      price: 55000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Laptop,
    },
    {
      id: 22,
      title: "Samsung Phone",
      price: 70000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Samsung,
    },
    {
      id: 23,
      title: "Ipad Pro",
      price: 60000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Ipad,
    },
    {
      id: 24,
      title: "Desktop Computer",
      price: 80000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Desktop,
    },
    {
      id: 25,
      title: "Iphone 13 pro",
      price: 120000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Iphone,
    },
  ]; 
  const { addList, list } = useContext(CartContext); 
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleSnakbarOpen = (msg, vrnt) => {
    let duration;
    if (vrnt === "error") {
      duration = 3000;
    } else {
      duration = 1500;
    }
    enqueueSnackbar(msg, {
      variant: vrnt,
      autoHideDuration: duration,
    });
  };
  const addNew = (item) => {
    // list.map((el) => {
    //   if (item.id === el.id) {
    //     return addList(list);
    //   }
    // });

    let checkList = list.filter((res) => res.id === item.id);
    if (checkList.length < 1) { 
      addList(item);
      handleSnakbarOpen("Successfully Added to Cart", "success");
    } else {
      handleSnakbarOpen("You Already Added The Item", "warning");
    } 
  };
  return (
    <div>
      <Container maxWidth="lg">
        <br />
        <Grid container spacing={4}>
          {data.map((item, i) => (
            <Grid item xs={12} sm={4} md={3} lg={2.4} key={i}>
              <div className={classes.card}>
                <img
                  src={item.img}
                  alt=""
                  height="90px"
                  width="90px"
                  style={{ display: "block", margin: "auto" }}
                />
                <h4>{item.title}</h4>
                <p>Tk {item.price}</p>
                <p>{item.des}</p>
                <Button
                  variant="contained"
                  disableElevation
                  fullWidth
                  className={classes.cardButton}
                  onClick={() => addNew(item)}
                >
                  Add To Card
                </Button>
              </div>
            </Grid>
          ))}
        </Grid>
        <br />
        <br />
      </Container>
    </div>
  );
};

export default Product;
