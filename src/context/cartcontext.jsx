import { Children } from 'react';
import { useState, createContext, useContext } from 'react'

const Cartcontext = createContext();

export const usecart = () => useContext(Cartcontext);

export const CartProvider = ({children}) =>{
    const [cart, setcart] = useState([]);
    const [count, setCount] = useState(0)
    const addToCart = ({nome, prezzo, quantità}) =>{
        setCount(count + 1)
        setcart([...cart,{id: count +1, nome: nome, prezzo: prezzo, quantità: quantità}]);
        console.log(count+1);
    }

    const removeFromCart = (id) =>{
        setcart(cart.filter(prod=>prod.id != id));
        console.log(cart);
    }

    const clearCart = () =>{
        setcart([]);
    }

    const data = {
        cart: cart,
        setcart: setcart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        clearCart: clearCart
    }
    return(
        <>
            <Cartcontext value={data}>
                {children}
            </Cartcontext>
        </>
    )
}