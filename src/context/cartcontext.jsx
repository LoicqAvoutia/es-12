import { Children } from 'react';
import { useState, createContext, useContext } from 'react'

const cartcontext = createContext();

export const usecart = () => useContext(cartcontext);

const CartProvider = ({children}) =>{
    const [cart, setcart] = useState([]);
    return(
        <>
        </>
    )
}