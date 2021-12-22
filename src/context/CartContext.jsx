import React, { createContext, useReducer, useEffect } from "react";
import { CartReducer } from "../reducer/CartReducer";

export const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [list, dispatch] = useReducer(CartReducer, [], () => {
    const localData = localStorage.getItem("list");
    return localData ? JSON.parse(localData) : [];
  });

  const addList = (data) => {
    dispatch({
      type: "Add_LIST",
      payload: data,
    });
  };
  const removelist = (id) => {
    dispatch({
      type: "REMOVE_LIST",
      payload: id,
    });
  };
  const updatelist = (data) => {
    dispatch({
      type: "UPDATE_LIST",
      payload: data,
    });
  };
  const completeHandle = (id) => {
    dispatch({
      type: "COMPLETE_HANDLE",
      payload: id,
    });
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
    console.log('listFromContext',list);
  }, [addList, removelist, completeHandle]);
  return (
    <CartContext.Provider value={{ addList,updatelist, removelist, list, completeHandle }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
