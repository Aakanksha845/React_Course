import { createContext } from "react";

// We are creating a variable/constant with first letter capital because it
// is a convention to identify that this is a context object
// and it is not a normal variable

// Ypu can also provide a default value to createContext() function
// e.g. createContext({items: [], totalAmount: 0})
// ypu can provide any default value you want
// but it is not necessary, you can also leave it empty
// you can give a number, string, boolean, object, array, function etc.
const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

export default CartContext;
// Now we can use this CartContext in any component we want
// by using useContext() hook
