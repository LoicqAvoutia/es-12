import { useState } from 'react'
import './productlist.css'

export const Productlist = () =>{
    const [nomep, setnomep] = useState('');
    const [prezzop, setprezzop] = useState('');
    const [quantitap, setquantitap] = useState('');

    return(
        <>
            <form action="">
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
            </form>
        </>
    )
}