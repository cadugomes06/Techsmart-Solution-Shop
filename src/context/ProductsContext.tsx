import React, { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";
import { ProductsData } from "../interfaces/products-data";

 interface CartContextInterface {
  cartItems: ProductsData[],
  setCartItems: Dispatch<SetStateAction<ProductsData[]>>
  openCart: boolean,
  setOpenCart: Dispatch<SetStateAction<boolean>>
 }
 
 const defaultState: CartContextInterface  = {
  cartItems: [],
  setCartItems: () => {},
  openCart: false,
  setOpenCart: () => !defaultState.openCart
 } 


 const CartContext = createContext<CartContextInterface>(defaultState)

 const UserContextProvider: React.FC<{ children: ReactNode }> =  ({ children }) => {
  const [cartItems, setCartItems] = useState(defaultState.cartItems)
  const [openCart, setOpenCart ] = useState(defaultState.openCart)

  return (
    <CartContext.Provider 
       value={{
        cartItems, 
        setCartItems, 
        openCart, 
        setOpenCart
      }}
       >
        { children }
    </CartContext.Provider>
  )
 }

export { UserContextProvider };
export default CartContext;