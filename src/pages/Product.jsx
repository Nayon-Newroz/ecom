import React, { useContext } from "react";
import Desktop from "../assets/images/Desktop.jpg";
import Laptop from "../assets/images/Laptop.jpg";
import Samsung from "../assets/images/Samsung.jpg";
import Ipad from "../assets/images/Ipad.jpg";
import Iphone from "../assets/images/Iphone.png";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import { CartContext } from "../context/CartContext";

import Container from "@mui/material/Container";

import { useSnackbar } from "notistack";

const Product = () => {
  const data = [
    {
      id: 1,
      title: "Hp Latop",
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
      title: "Hp Latop",
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
      title: "Hp Latop",
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
      title: "Hp Latop",
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
      title: "Hp Latop",
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
  console.log("data", data);
  const { addList, list } = useContext(CartContext);
  console.log("list", list);
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
  const addNew = (item) => {
    // list.map((el) => {
    //   if (item.id === el.id) {
    //     return addList(list);
    //   }
    // });

    let checkList = list.filter((res) => res.id === item.id);
    if (checkList.length < 1) {
      console.log("if");
      addList(item);
      handleSnakbarOpen("Successfully Added to Cart", "success");
    }
    console.log("checkList", checkList.length, checkList);
  };
  return (
    <div>
      <Container maxWidth="lg">
        <br />
        <Grid container spacing={4}>
          {data.map((item, i) => (
            <Grid item xs={12} md={2} key={i}>
              <div
                style={{
                  textAlign: "center",
                  width: "95%",
                  margin: "auto",
                  background: "#fff",
                  padding: "10px",
                }}
              >
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
                  style={{
                    background: "#FC2861",
                    textTransform: "none",
                    fontSize: "16px",
                    color: "#fff",
                    margin: "auto",
                    display: "block",
                    textAlign: "center",
                    borderRadius: "0px",
                  }}
                  onClick={() => addNew(item)}
                >
                  Add To Card
                </Button>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Product;
