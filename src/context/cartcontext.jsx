import { Children } from 'react';
import { useState, createContext, useContext } from 'react'

const Cartcontext = createContext();

export const usecart = () => useContext(Cartcontext);

export const CartProvider = ({children}) =>{
    const [cart, setcart] = useState([{}]);
    const addToCart = ({nome, prezzo, quantità}) =>{
        setcart([...cart,{nome: nome, prezzo: prezzo, quantità: quantità}]);
    }
    const data = {
        cart: cart,
        setcart: setcart,
        addToCart: addToCart
    }
    return(
        <>
            <Cartcontext value={data}>
                {children}
            </Cartcontext>
        </>
    )
}