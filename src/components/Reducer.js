const Reducer = (cart = [], action) => {
  if (action.type === "ADD") {
    const tempData = cart.filter((item) => item.id === action.payload.id);
    // console.log("temo", tempData);
    if (tempData < 1) {
      return [...cart, action.payload];
    } else {
      return cart;
    }
  }
  if (action.type === "REMOVE") {
    return cart.filter((item) => item.id !== action.payload.id);
  }
  if (action.type === "INC") {
    let tempcart = cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      //   console.log("i", item);
      return item;
    });
    // console.log("new", tempcart);
    return tempcart;
  }
  if (action.type === "DEC") {
    let tempcart = cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      //   console.log("i", item);
      return item;
    });
    // console.log("new", tempcart);
    return tempcart;
  }
};
export default Reducer;
