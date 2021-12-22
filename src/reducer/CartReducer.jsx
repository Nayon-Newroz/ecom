export const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add_LIST":
      return [...state, action.payload];
    case "UPDATE_LIST":
      let newList = [];
      state.map((item) => {
        if (item.id === action.payload.id) {
          return newList.push(action.payload);
        } else {
          return newList.push(item);
        }
      });
      return newList;
      
    case "REMOVE_LIST":
      return state.filter((res) => res.id !== action.payload);

    case "COMPLETE_HANDLE":
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });

    default:
      return state;
  }
};
