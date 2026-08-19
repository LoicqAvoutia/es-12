import { useState } from 'react'
import './productlist.css'
import { usecart } from '../context/cartcontext';

export const Productlist = () =>{
    const cart = usecart();

    const [nomep, setnomep] = useState('');
    const [prezzop, setprezzop] = useState('');
    const [quantitap, setquantitap] = useState('');

    const [id, setid] = useState(0);

    return(
        <>
            <form action="" onSubmit={e=>{
                e.preventDefault();
                cart.addToCart({nome: nomep, prezzo: prezzop, quantità: quantitap});
            }}>
                <input 
                    type="text" 
                    placeholder='nome prodotto' 
                    value={nomep} 
                    onChange={e=>setnomep(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder='prezzo al dettaglio'
                    value={prezzop} 
                    onChange={e=>setprezzop(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder='quantità'
                    value={quantitap} 
                    onChange={e=>setquantitap(e.target.value)}
                />
                <button type='submit'>aggiungi prodotto</button>
            </form>
            <form action="" onSubmit={e=>{
                e.preventDefault();
                cart.removeFromCart(id);
                console.log(cart.cart)
            }}>
                <input 
                    type="number" 
                    placeholder='prodotto da rimuovere'
                    value={id} 
                    onChange={e=>setid(e.target.value)}
                />
                <button type='submit'>rimuovi prodotto</button>
            </form>
        </>
    )
}