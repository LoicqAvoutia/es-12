import { useState } from 'react'
import './productlist.css'
import { usecart } from '../context/cartcontext';

export const Productlist = () =>{
    const cart = usecart();
    const [nomep, setnomep] = useState('');
    const [prezzop, setprezzop] = useState('');
    const [quantitap, setquantitap] = useState('');

    return(
        <>
            <form action="" onSubmit={e=>{
                e.preventDefault();
                cart.addToCart({nome: nomep, prezzo: prezzop, quantità: quantitap});
                console.log(cart.cart)
            }}>
                <input 
                    type="text" 
                    placeholder='nome prodotto' 
                    value={nomep} 
                    onChange={e=>setnomep(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='prezzo al dettaglio'
                    value={prezzop} 
                    onChange={e=>setprezzop(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='quantità'
                    value={quantitap} 
                    onChange={e=>setquantitap(e.target.value)}
                />
                <button type='submit'>aggiungi prodotto</button>
            </form>
        </>
    )
}